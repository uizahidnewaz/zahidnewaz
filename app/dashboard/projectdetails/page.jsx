"use client";

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Image as AntImage,
  Button,
  Form,
  Input,
  InputNumber,
  Layout,
  message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Spin,
  Typography,
  Upload,
} from "antd";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import debounce from "lodash/debounce";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const { Title, Text } = Typography;
const { Content } = Layout;
const { Option } = Select;

const ProjectDetailsPage = () => {
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

  // Add animation refs and hooks
  const galleryRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.2, 1]), {
    stiffness: 200,
    damping: 30,
  });

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]),
    { stiffness: 200, damping: 30 }
  );

  // Animation variants
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Replace the projectsList memo with a Framer Motion gallery
  const projectsList = useMemo(() => {
    return (
      <div className="gallery" ref={galleryRef}>
        <motion.div
          style={{ opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-6"
        >
          {projects.length > 0 ? (
            projects.map((item, index) => (
              <motion.div
                key={item._id || item.id}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                variants={childVariants}
              >
                <div className="cursor-pointer relative overflow-hidden rounded-[3px] aspect-[1.46/1]">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      quality={100}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  ) : (
                    <div
                      style={{
                        height: "100%",
                        background: "var(--color-grey-13)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "#fff" }}>No Image</Text>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <Space>
                      <Link
                        href={`/dashboard/projectdetails/${item._id || item.id}`}
                        passHref
                      >
                        <Button
                          icon={<EditOutlined />}
                          type="primary"
                          ghost
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            borderColor: "#fff",
                            color: "#fff",
                          }}
                        />
                      </Link>
                      <Popconfirm
                        title="Are you sure to delete this project?"
                        onConfirm={(e) => {
                          e?.stopPropagation();
                          handleDelete(item._id || item.id);
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button
                          icon={<DeleteOutlined />}
                          type="primary"
                          danger
                          ghost
                          onClick={(e) => e.stopPropagation()}
                        />
                      </Popconfirm>
                    </Space>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center w-full">
                  <h3 className="text-white text-lg font-medium">
                    {item.name}
                  </h3>
                  <p className="text-[var(--color-chartreuse-green-60)] text-sm">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="w-full text-center py-12">
              <Text style={{ color: "#fff" }}>No projects found</Text>
            </div>
          )}
        </motion.div>
      </div>
    );
  }, [projects, handleDelete, opacity]);

  return (
    <Layout style={{ minHeight: "100vh", background: "var(--primary)" }}>
      <Content style={{ padding: "24px" }}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
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
                  <AntImage src={editPreview} alt="Preview" width={200} />
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
                  className="w-full bg-[var(--color-grey-13)] text-[var(--color-white-solid)] border-[var(--color-blue-24)]"
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

          <Title
            level={2}
            style={{
              color: "var(--color-white-solid)",
              textAlign: "left",
              marginBottom: "48px",
              marginTop: "24px",
              fontSize: "36px",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            Projects Gallery
          </Title>

          {projectsLoading ? (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <Spin size="large" />
            </div>
          ) : (
            projectsList
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default ProjectDetailsPage;
