"use client";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  Layout,
  List,
  message,
  Modal,
  Popconfirm,
  Row,
  Select,
  Space,
  Spin,
  Typography,
  Upload,
} from "antd";
import debounce from "lodash/debounce";
import { useCallback, useEffect, useMemo, useState } from "react";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Option } = Select;

const ProjectsPage = () => {
  const [form, setForm] = useState({
    name: "",
    image: null,
    status: "active",
    priority: 1,
  });
  const [preview, setPreview] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [modal, setModal] = useState({
    open: false,
    content: "",
    error: false,
  });
  const [editModal, setEditModal] = useState({ open: false, project: null });
  const [editForm, setEditForm] = useState({
    name: "",
    status: "active",
    priority: 1,
    image: null,
  });
  const [editFileList, setEditFileList] = useState([]);
  const [editPreview, setEditPreview] = useState(null);
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);

  const [createForm] = Form.useForm();
  const [editFormInstance] = Form.useForm();

  // Define fetchProjects first, before any functions that reference it
  const fetchProjects = useCallback(async () => {
    setProjectsLoading(true);
    try {
      const res = await fetch(
        "https://zahidnewazbackend.onrender.com/api/projects"
      );
      const data = await res.json();
      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      setProjects([]);
    }
    setProjectsLoading(false);
  }, []);

  // Debounced version for expensive operations
  const debouncedFetchProjects = useMemo(
    () => debounce(fetchProjects, 300),
    [fetchProjects]
  );

  // Memoize handleChange function
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "priority" ? Number(value) : value,
    }));
  }, []);

  // Memoize and optimize handleImageChange
  const handleImageChange = useCallback(({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      setForm((prev) => ({ ...prev, image: file }));

      // Create FileReader outside component to avoid recreation
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setForm((prev) => ({ ...prev, image: null }));
      setPreview(null);
    }
  }, []);

  // Memoize beforeUpload function
  const beforeUpload = useCallback((file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage || Upload.LIST_IGNORE;
  }, []);

  // Memoize handleDelete function
  const handleDelete = useCallback(
    async (id) => {
      try {
        await fetch(
          `https://zahidnewazbackend.onrender.com/api/projects/${id}`,
          {
            method: "DELETE",
          }
        );
        message.success("Project deleted");
        fetchProjects();
      } catch (err) {
        message.error("Failed to delete project");
      }
    },
    [fetchProjects]
  );

  // Memoize handleEdit function
  const handleEdit = useCallback(
    (item) => {
      setEditForm({
        name: item.name,
        status: item.status,
        priority: item.priority,
        image: null,
      });
      setEditFileList([]);
      setEditPreview(item.image || null);
      setEditModal({ open: true, project: item });

      // Update form values
      editFormInstance.setFieldsValue({
        name: item.name,
        status: item.status,
        priority: item.priority,
      });
    },
    [editFormInstance]
  );

  // Memoize handleEditImageChange
  const handleEditImageChange = useCallback(
    ({ fileList: newFileList }) => {
      setEditFileList(newFileList);
      if (newFileList.length > 0) {
        const file = newFileList[0].originFileObj;
        setEditForm((prev) => ({ ...prev, image: file }));

        const reader = new FileReader();
        reader.onload = (e) => setEditPreview(e.target.result);
        reader.readAsDataURL(file);
      } else {
        setEditForm((prev) => ({ ...prev, image: null }));
        setEditPreview((prev) => editModal.project?.image || prev);
      }
    },
    [editModal.project]
  );

  // Memoize handleEditChange
  const handleEditChange = useCallback((e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: name === "priority" ? Number(value) : value,
    }));
  }, []);

  // Memoize handleSubmit
  const handleSubmit = useCallback(
    async (values) => {
      setLoading(true);
      setResult(null);
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("status", values.status);
        formData.append("priority", values.priority);
        if (form.image) {
          formData.append("image", form.image);
        }
        const res = await fetch(
          "https://zahidnewazbackend.onrender.com/api/projects",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        setResult(data);
        setModal({
          open: true,
          content: "Project created successfully!",
          error: false,
        });
        setForm({ name: "", image: null, status: "active", priority: 1 });
        setFileList([]);
        setPreview(null);
        createForm.resetFields();
        fetchProjects();
      } catch (err) {
        setResult({ error: "Failed to create project" });
        setModal({
          open: true,
          content: "Failed to create project",
          error: true,
        });
      }
      setLoading(false);
    },
    [form.image, createForm, fetchProjects]
  );

  // Memoize handleEditSubmit
  const handleEditSubmit = useCallback(
    async (values) => {
      if (!editModal.project) return;
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("status", values.status);
        formData.append("priority", values.priority);
        if (editForm.image) {
          formData.append("image", editForm.image);
        }
        await fetch(
          `https://zahidnewazbackend.onrender.com/api/projects/${
            editModal.project._id || editModal.project.id
          }`,
          {
            method: "PUT",
            body: formData,
          }
        );
        message.success("Project updated");
        setEditModal({ open: false, project: null });
        fetchProjects();
      } catch (err) {
        message.error("Failed to update project");
      }
    },
    [editModal.project, editForm.image, fetchProjects]
  );

  // Optimize useEffect with proper dependencies
  useEffect(() => {
    fetchProjects();

    // Cleanup function for debounced operations
    return () => {
      debouncedFetchProjects.cancel();
    };
  }, [fetchProjects, debouncedFetchProjects]);

  // Memoize normFile function
  const normFile = useCallback((e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  }, []);

  // Memoize projects list rendering
  const projectsList = useMemo(() => {
    return (
      <List
        dataSource={projects}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                icon={<EditOutlined />}
                type="primary"
                ghost
                onClick={() => handleEdit(item)}
                key="edit"
                style={{
                  borderColor: "#1890ff",
                  color: "#1890ff",
                }}
              />,
              <Popconfirm
                title="Are you sure to delete this project?"
                onConfirm={() => handleDelete(item._id || item.id)}
                okText="Yes"
                cancelText="No"
                key="delete"
              >
                <Button icon={<DeleteOutlined />} type="primary" danger ghost />
              </Popconfirm>,
            ]}
            style={{
              borderBottom: "1px solid var(--color-blue-24)",
            }}
          >
            <List.Item.Meta
              avatar={
                item.image ? (
                  <Image
                    src={item.image}
                    width={64}
                    height={64}
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    preview={true}
                  />
                ) : (
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      background: "var(--color-grey-13)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ color: "#fff" }}>No Image</Text>
                  </div>
                )
              }
              title={
                <Text
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              }
              description={
                <Space direction="vertical">
                  <Text style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                    Status:{" "}
                    <Text
                      style={{
                        color: item.status === "active" ? "#52c41a" : "#ff4d4f",
                      }}
                    >
                      {item.status}
                    </Text>
                  </Text>
                  <Text style={{ color: "rgba(255, 255, 255, 0.65)" }}>
                    Priority:{" "}
                    <Text style={{ color: "#fff" }}>{item.priority}</Text>
                  </Text>
                </Space>
              }
            />
          </List.Item>
        )}
        locale={{
          emptyText: (
            <div style={{ textAlign: "center", padding: "24px" }}>
              <Text style={{ color: "#fff" }}>No projects found</Text>
            </div>
          ),
        }}
      />
    );
  }, [projects, handleEdit, handleDelete]);

  return (
    <Layout style={{ minHeight: "100vh", background: "var(--primary)" }}>
      <Content style={{ padding: "24px" }}>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Modal
              open={modal.open}
              onCancel={() => setModal({ ...modal, open: false })}
              footer={null}
              centered
              title={modal.error ? "Error" : "Success"}
              styles={{
                content: {
                  backgroundColor: "var(--color-grey-14)",
                  color: "#fff",
                },
                header: {
                  backgroundColor: "var(--color-grey-14)",
                  color: "#fff",
                },
                body: {
                  backgroundColor: "var(--color-grey-14)",
                  color: "#fff",
                },
              }}
            >
              <p style={{ color: "#fff" }}>{modal.content}</p>
            </Modal>

            <Modal
              open={editModal.open}
              onCancel={() => setEditModal({ open: false, project: null })}
              footer={null}
              centered
              title="Edit Project"
              width={600}
              styles={{
                content: {
                  backgroundColor: "var(--color-grey-14)",
                  color: "#fff",
                },
                header: {
                  backgroundColor: "var(--color-grey-14)",
                  color: "#fff",
                },
                body: {
                  backgroundColor: "var(--color-grey-14)",
                  color: "#fff",
                },
              }}
            >
              <Form
                form={editFormInstance}
                layout="vertical"
                onFinish={handleEditSubmit}
                initialValues={{
                  name: editForm.name,
                  status: editForm.status,
                  priority: editForm.priority,
                }}
              >
                <Form.Item
                  name="name"
                  label={<Text style={{ color: "#fff" }}>Project Name</Text>}
                  rules={[
                    { required: true, message: "Please enter project name" },
                  ]}
                >
                  <Input
                    placeholder="Enter project name"
                    className="bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]"
                  />
                </Form.Item>

                <Form.Item
                  label={<Text style={{ color: "#fff" }}>Project Image</Text>}
                  name="image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload
                    listType="picture-card"
                    fileList={editFileList}
                    beforeUpload={beforeUpload}
                    onChange={handleEditImageChange}
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: false }}
                  >
                    {editFileList.length >= 1 ? null : (
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    )}
                  </Upload>
                </Form.Item>

                {editPreview && (
                  <div style={{ marginBottom: 16 }}>
                    <Text
                      style={{
                        color: "#fff",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Preview:
                    </Text>
                    <Image src={editPreview} alt="Preview" width={200} />
                  </div>
                )}

                <Form.Item
                  name="status"
                  label={<Text style={{ color: "#fff" }}>Status</Text>}
                  rules={[{ required: true, message: "Please select status" }]}
                >
                  <Select className="bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]">
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="priority"
                  label={<Text style={{ color: "#fff" }}>Priority</Text>}
                  rules={[{ required: true, message: "Please enter priority" }]}
                >
                  <InputNumber
                    min={1}
                    className="bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]"
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--color-chartreuse-green-60)",
                      color: "var(--color-black-solid)",
                    }}
                  >
                    Update Project
                  </Button>
                </Form.Item>
              </Form>
            </Modal>

            <Card
              className="!bg-[var(--primary)]"
              style={{ overflow: "hidden" }}
            >
              <Title
                level={2}
                style={{
                  color: "var(--color-white-solid)",
                  textAlign: "left",
                  marginBottom: "24px",
                  textTransform: "uppercase",
                }}
              >
                Create Project
              </Title>

              <Form
                form={createForm}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                  name: form.name,
                  status: form.status,
                  priority: form.priority,
                }}
              >
                <Form.Item
                  name="name"
                  label={<Text style={{ color: "#fff" }}>Project Name</Text>}
                  rules={[
                    { required: true, message: "Please enter project name" },
                  ]}
                >
                  <Input
                    placeholder="Enter project name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]"
                  />
                </Form.Item>

                <Form.Item
                  label={<Text style={{ color: "#fff" }}>Project Image</Text>}
                  name="image"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    beforeUpload={beforeUpload}
                    onChange={handleImageChange}
                    maxCount={1}
                    showUploadList={{ showPreviewIcon: false }}
                  >
                    {fileList.length >= 1 ? null : (
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    )}
                  </Upload>
                </Form.Item>

                {preview && (
                  <div style={{ marginBottom: 16 }}>
                    <Text
                      style={{
                        color: "#fff",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Preview:
                    </Text>
                    <Image src={preview} alt="Preview" width={200} />
                  </div>
                )}

                <Form.Item
                  name="status"
                  label={<Text style={{ color: "#fff" }}>Status</Text>}
                  rules={[{ required: true, message: "Please select status" }]}
                >
                  <Select
                    onChange={(value) => setForm({ ...form, status: value })}
                    className="bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]"
                  >
                    <Option value="active">Active</Option>
                    <Option value="inactive">Inactive</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="priority"
                  label={<Text style={{ color: "#fff" }}>Priority</Text>}
                  rules={[{ required: true, message: "Please enter priority" }]}
                >
                  <InputNumber
                    min={1}
                    onChange={(value) => setForm({ ...form, priority: value })}
                    className="bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]"
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    style={{
                      width: "100%",
                      backgroundColor: "var(--color-chartreuse-green-60)",
                      color: "var(--color-black-solid)",
                    }}
                  >
                    Create Project
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            <Divider
              style={{
                borderColor: "var(--color-blue-24)",
                margin: "32px 0",
              }}
            />

            <Card
              className="bg-[var(--color-grey-14)]"
              style={{ overflow: "hidden" }}
            >
              <Title
                level={2}
                style={{
                  color: "var(--color-chartreuse-green-60)",
                  textAlign: "center",
                  marginBottom: "24px",
                }}
              >
                All Projects
              </Title>

              {projectsLoading ? (
                <div style={{ textAlign: "center", padding: "24px" }}>
                  <Spin size="large" />
                </div>
              ) : (
                projectsList
              )}
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ProjectsPage;
