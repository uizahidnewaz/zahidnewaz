"use client";
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Image,
  List,
  message,
  Modal,
  Popconfirm,
  Spin,
  Upload,
} from "antd";
import React, { useState } from "react";

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
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "priority" ? Number(value) : value,
    }));
  };

  // Ant Design Upload handlers
  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      setForm((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setForm((prev) => ({ ...prev, image: null }));
      setPreview(null);
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage || Upload.LIST_IGNORE;
  };

  const fetchProjects = async () => {
    const handleDelete = async (id) => {
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
    };

    const handleEdit = (item) => {
      // Placeholder for edit logic (e.g., open modal with form)
      message.info(`Edit project: ${item.name}`);
    };
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("status", form.status);
      formData.append("priority", form.priority);
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
  };

  // Fetch projects on mount
  React.useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 px-4"
      style={{ background: "var(--primary)" }}
    >
      <Modal
        open={modal.open}
        onCancel={() => setModal({ ...modal, open: false })}
        footer={null}
        centered
        title={modal.error ? "Error" : "Success"}
      >
        <p>{modal.content}</p>
      </Modal>
      <div className="w-full max-w-lg bg-[var(--color-grey-14)] rounded-2xl shadow-xl p-8 border border-[var(--color-blue-24)]">
        <h1
          className="text-3xl font-extrabold mb-6 text-center tracking-tight drop-shadow"
          style={{ color: "var(--color-chartreuse-green-60)" }}
        >
          Create New Project
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--color-white-solid)" }}
            >
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--color-blue-24)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-chartreuse-green-60)] bg-[var(--color-grey-13)] text-[var(--color-white-solid)]"
              placeholder="Enter project name"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--color-white-solid)" }}
            >
              Image Upload
            </label>
            <Upload
              listType="picture"
              fileList={fileList}
              beforeUpload={beforeUpload}
              onChange={handleImageChange}
              maxCount={1}
              showUploadList={{ showPreviewIcon: false }}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            {preview && (
              <div style={{ marginTop: 16 }}>
                <Image src={preview} alt="Preview" width={200} />
              </div>
            )}
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--color-white-solid)" }}
            >
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--color-blue-24)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-chartreuse-green-60)] bg-[var(--color-grey-13)] text-[var(--color-white-solid)]"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-semibold"
              style={{ color: "var(--color-white-solid)" }}
            >
              Priority
            </label>
            <input
              name="priority"
              type="number"
              value={form.priority}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--color-blue-24)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-chartreuse-green-60)] bg-[var(--color-grey-13)] text-[var(--color-white-solid)]"
              min={1}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-chartreuse-green-60)] text-[var(--color-black-solid)] font-bold rounded-lg shadow hover:scale-105 transition-transform duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-[var(--color-black-solid)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Create Project"
            )}
          </button>
        </form>
      </div>
      <div className="w-full max-w-lg mt-10 bg-[var(--color-grey-14)] rounded-2xl shadow-xl p-8 border border-[var(--color-blue-24)]">
        <h2
          className="text-2xl font-bold mb-4 text-center"
          style={{ color: "var(--color-chartreuse-green-60)" }}
        >
          All Projects
        </h2>
        {projectsLoading ? (
          <Spin />
        ) : (
          <List
            dataSource={projects}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    icon={<EditOutlined />}
                    type="text"
                    onClick={() => handleEdit(item)}
                    key="edit"
                    style={{ color: "#fff" }}
                  />,
                  <Popconfirm
                    title="Are you sure to delete this project?"
                    onConfirm={() => handleDelete(item._id || item.id)}
                    okText="Yes"
                    cancelText="No"
                    key="delete"
                  >
                    <Button
                      icon={<DeleteOutlined />}
                      type="text"
                      danger
                      style={{ color: "#fff" }}
                    />
                  </Popconfirm>,
                ]}
                style={{ color: "#fff" }}
              >
                <List.Item.Meta
                  avatar={
                    item.image ? <Image src={item.image} width={50} /> : null
                  }
                  title={<span style={{ color: "#fff" }}>{item.name}</span>}
                  description={
                    <span
                      style={{ color: "#fff" }}
                    >{`Status: ${item.status}, Priority: ${item.priority}`}</span>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
