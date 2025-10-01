"use client";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Layout,
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
      <div style={{ display: "grid", gap: "16px" }}>
        {projects.map((item) => (
          <Card
            key={item._id || item.id}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              transition: "all 0.3s ease",
            }}
            styles={{ body: { padding: "20px" } }}
            hoverable
            actions={[
              <Button
                icon={<EditOutlined />}
                type="text"
                onClick={() => handleEdit(item)}
                key="edit"
                style={{
                  color: "var(--color-chartreuse-green-60)",
                  border: "none",
                }}
              >
                Edit
              </Button>,
              <Popconfirm
                title="Delete Project"
                description="Are you sure to delete this project?"
                onConfirm={() => handleDelete(item._id || item.id)}
                okText="Yes"
                cancelText="No"
                key="delete"
              >
                <Button
                  icon={<DeleteOutlined />}
                  type="text"
                  danger
                  style={{ border: "none" }}
                >
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  style={{
                    objectFit: "cover",
                    borderRadius: "8px",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                  }}
                  preview={true}
                />
              ) : (
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(255, 255, 255, 0.6)",
                      fontSize: "12px",
                    }}
                  >
                    No Image
                  </Text>
                </div>
              )}
              <div style={{ flex: 1 }}>
                <Title
                  level={4}
                  style={{
                    color: "var(--color-white-solid)",
                    margin: "0 0 8px 0",
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Title>
                <Space direction="horizontal" size="large">
                  <div>
                    <Text
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12px",
                        display: "block",
                      }}
                    >
                      Status
                    </Text>
                    <Badge
                      status={item.status === "active" ? "success" : "error"}
                      text={
                        <Text
                          style={{
                            color:
                              item.status === "active" ? "#52c41a" : "#ff4d4f",
                            fontWeight: "500",
                            textTransform: "capitalize",
                          }}
                        >
                          {item.status}
                        </Text>
                      }
                    />
                  </div>
                  <div>
                    <Text
                      style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12px",
                        display: "block",
                      }}
                    >
                      Priority
                    </Text>
                    <Badge
                      count={item.priority}
                      style={{
                        backgroundColor: "var(--color-chartreuse-green-60)",
                        color: "var(--color-black-solid)",
                        fontWeight: "600",
                      }}
                    />
                  </div>
                </Space>
              </div>
            </div>
          </Card>
        ))}
        {projects.length === 0 && (
          <Card
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              textAlign: "center",
              padding: "40px 20px",
            }}
          >
            <Text style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              No projects found. Create your first project above.
            </Text>
          </Card>
        )}
      </div>
    );
  }, [projects, handleEdit, handleDelete]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background: "var(--primary)",
      }}
    >
      <Content style={{ padding: "32px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[32, 32]}>
            <Col span={24}>
              {/* Enhanced Modals */}
              <Modal
                open={modal.open}
                onCancel={() => setModal({ ...modal, open: false })}
                footer={null}
                centered
                title={modal.error ? "Error" : "Success"}
                styles={{
                  content: {
                    backgroundColor: "var(--color-grey-14)",
                    color: "var(--color-white-solid)",
                    borderRadius: "12px",
                  },
                  header: {
                    backgroundColor: "var(--color-grey-14)",
                    color: "var(--color-white-solid)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  },
                  body: {
                    backgroundColor: "var(--color-grey-14)",
                    color: "var(--color-white-solid)",
                    padding: "24px",
                  },
                }}
              >
                <p style={{ color: "var(--color-white-solid)", margin: 0 }}>
                  {modal.content}
                </p>
              </Modal>

              <Modal
                open={editModal.open}
                onCancel={() => setEditModal({ open: false, project: null })}
                footer={null}
                centered
                title={
                  <Text
                    style={{
                      color: "var(--color-white-solid)",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Edit Project
                  </Text>
                }
                width={700}
                styles={{
                  content: {
                    backgroundColor: "var(--color-grey-14)",
                    color: "var(--color-white-solid)",
                    borderRadius: "12px",
                  },
                  header: {
                    backgroundColor: "var(--color-grey-14)",
                    color: "var(--color-white-solid)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "20px 24px",
                  },
                  body: {
                    backgroundColor: "var(--color-grey-14)",
                    color: "var(--color-white-solid)",
                    padding: "24px",
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
                  <Row gutter={[24, 0]}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label={
                          <Text
                            style={{
                              color: "var(--color-white-solid)",
                              fontWeight: "500",
                            }}
                          >
                            Project Name
                          </Text>
                        }
                        rules={[
                          {
                            required: true,
                            message: "Please enter project name",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter project name"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            color: "var(--color-white-solid)",
                            padding: "12px 16px",
                            fontSize: "14px",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={6}>
                      <Form.Item
                        name="status"
                        label={
                          <Text
                            style={{
                              color: "var(--color-white-solid)",
                              fontWeight: "500",
                            }}
                          >
                            Status
                          </Text>
                        }
                        rules={[
                          { required: true, message: "Please select status" },
                        ]}
                      >
                        <Select
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "8px",
                          }}
                        >
                          <Option value="active">Active</Option>
                          <Option value="inactive">Inactive</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={6}>
                      <Form.Item
                        name="priority"
                        label={
                          <Text
                            style={{
                              color: "var(--color-white-solid)",
                              fontWeight: "500",
                            }}
                          >
                            Priority
                          </Text>
                        }
                        rules={[
                          { required: true, message: "Please enter priority" },
                        ]}
                      >
                        <InputNumber
                          min={1}
                          style={{
                            width: "100%",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            color: "var(--color-white-solid)",
                            padding: "4px 8px",
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    label={
                      <Text
                        style={{
                          color: "var(--color-white-solid)",
                          fontWeight: "500",
                        }}
                      >
                        Project Image
                      </Text>
                    }
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
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "2px dashed rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                      }}
                    >
                      {editFileList.length >= 1 ? null : (
                        <div style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                          <PlusOutlined
                            style={{ fontSize: "20px", marginBottom: "8px" }}
                          />
                          <div>Upload Image</div>
                        </div>
                      )}
                    </Upload>
                  </Form.Item>

                  {editPreview && (
                    <div style={{ marginBottom: "24px", textAlign: "center" }}>
                      <Text
                        style={{
                          color: "var(--color-white-solid)",
                          display: "block",
                          marginBottom: "12px",
                          fontWeight: "500",
                        }}
                      >
                        Preview:
                      </Text>
                      <Image
                        src={editPreview}
                        alt="Preview"
                        width={200}
                        style={{
                          borderRadius: "8px",
                          border: "2px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>
                  )}

                  <Form.Item
                    style={{
                      marginBottom: 0,
                      textAlign: "center",
                      marginTop: "24px",
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      style={{
                        background: "var(--color-chartreuse-green-60)",
                        border: "none",
                        borderRadius: "8px",
                        height: "48px",
                        fontSize: "16px",
                        fontWeight: "600",
                        minWidth: "200px",
                        color: "var(--color-black-solid)",
                        boxShadow: "0 4px 15px rgba(184, 255, 52, 0.4)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Update Project
                    </Button>
                  </Form.Item>
                </Form>
              </Modal>

              {/* Create Project Section */}
              <Card
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  marginBottom: "32px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Title
                  level={2}
                  style={{
                    color: "var(--color-white-solid)",
                    textAlign: "center",
                    marginBottom: "32px",
                    fontWeight: "700",
                  }}
                >
                  Create New Project
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
                  <Row gutter={[24, 0]}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label={
                          <Text
                            style={{
                              color: "var(--color-white-solid)",
                              fontWeight: "500",
                            }}
                          >
                            Project Name
                          </Text>
                        }
                        rules={[
                          {
                            required: true,
                            message: "Please enter project name",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter project name"
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            color: "var(--color-white-solid)",
                            padding: "12px 16px",
                            fontSize: "14px",
                          }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={6}>
                      <Form.Item
                        name="status"
                        label={
                          <Text
                            style={{
                              color: "var(--color-white-solid)",
                              fontWeight: "500",
                            }}
                          >
                            Status
                          </Text>
                        }
                        rules={[
                          { required: true, message: "Please select status" },
                        ]}
                      >
                        <Select
                          onChange={(value) =>
                            setForm({ ...form, status: value })
                          }
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "8px",
                          }}
                        >
                          <Option value="active">Active</Option>
                          <Option value="inactive">Inactive</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={6}>
                      <Form.Item
                        name="priority"
                        label={
                          <Text
                            style={{
                              color: "var(--color-white-solid)",
                              fontWeight: "500",
                            }}
                          >
                            Priority
                          </Text>
                        }
                        rules={[
                          { required: true, message: "Please enter priority" },
                        ]}
                      >
                        <InputNumber
                          min={1}
                          onChange={(value) =>
                            setForm({ ...form, priority: value })
                          }
                          style={{
                            width: "100%",
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "8px",
                            color: "var(--color-white-solid)",
                            padding: "4px 8px",
                          }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    label={
                      <Text
                        style={{
                          color: "var(--color-white-solid)",
                          fontWeight: "500",
                        }}
                      >
                        Project Image
                      </Text>
                    }
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
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        border: "2px dashed rgba(255, 255, 255, 0.2)",
                        borderRadius: "8px",
                      }}
                    >
                      {fileList.length >= 1 ? null : (
                        <div style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                          <PlusOutlined
                            style={{ fontSize: "20px", marginBottom: "8px" }}
                          />
                          <div>Upload Image</div>
                        </div>
                      )}
                    </Upload>
                  </Form.Item>

                  {preview && (
                    <div style={{ marginBottom: "24px", textAlign: "center" }}>
                      <Text
                        style={{
                          color: "var(--color-white-solid)",
                          display: "block",
                          marginBottom: "12px",
                          fontWeight: "500",
                        }}
                      >
                        Preview:
                      </Text>
                      <Image
                        src={preview}
                        alt="Preview"
                        width={200}
                        style={{
                          borderRadius: "8px",
                          border: "2px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </div>
                  )}

                  <Form.Item style={{ marginBottom: 0, textAlign: "center" }}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      size="large"
                      style={{
                        background: "var(--color-chartreuse-green-60)",
                        border: "none",
                        borderRadius: "8px",
                        height: "48px",
                        fontSize: "16px",
                        fontWeight: "600",
                        minWidth: "200px",
                        color: "var(--color-black-solid)",
                        boxShadow: "0 4px 15px rgba(184, 255, 52, 0.4)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Create Project
                    </Button>
                  </Form.Item>
                </Form>
              </Card>

              {/* Projects List Section */}
              <Card
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }}
                styles={{ body: { padding: "32px" } }}
              >
                <Title
                  level={2}
                  style={{
                    color: "var(--color-white-solid)",
                    textAlign: "center",
                    marginBottom: "32px",
                    fontWeight: "700",
                  }}
                >
                  All Projects ({projects.length})
                </Title>

                {projectsLoading ? (
                  <div style={{ textAlign: "center", padding: "60px 20px" }}>
                    <Spin
                      size="large"
                      style={{ color: "var(--color-chartreuse-green-60)" }}
                    />
                    <div style={{ marginTop: "16px" }}>
                      <Text style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                        Loading projects...
                      </Text>
                    </div>
                  </div>
                ) : (
                  projectsList
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default ProjectsPage;
