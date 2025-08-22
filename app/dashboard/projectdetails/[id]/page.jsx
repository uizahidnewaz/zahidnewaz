"use client";
import { useEffect, useState } from "react";

const ProjectDetailsPage = () => {
  // State for projects and form
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    status: "active",
    priority: 5,
    image: null,
  });

  const baseUrl = "https://zahidnewazbackend.onrender.com/api";

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/project-details`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProjects(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch projects");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Load projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Create a new project
  const createProject = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      const response = await fetch(`${baseUrl}/project-details`, {
        method: "POST",
        body: data,
        // No need to set Content-Type header with FormData, browser will set it automatically
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      resetForm();
      fetchProjects();
    } catch (err) {
      setError("Failed to create project");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update an existing project
  const updateProject = async (e) => {
    e.preventDefault();
    if (!selectedProject) return;

    try {
      setLoading(true);
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      const response = await fetch(
        `${baseUrl}/project-details/${selectedProject._id}`,
        {
          method: "PUT",
          body: data,
          // No need to set Content-Type header with FormData, browser will set it automatically
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      resetForm();
      setEditMode(false);
      fetchProjects();
    } catch (err) {
      setError("Failed to update project");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a project
  const deleteProject = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/project-details/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      fetchProjects();
    } catch (err) {
      setError("Failed to delete project");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Set up edit mode
  const handleEdit = (project) => {
    setEditMode(true);
    setSelectedProject(project);
    setFormData({
      name: project.name,
      status: project.status,
      priority: project.priority,
      image: null, // We can't populate the file input, but we can update without changing the image
    });
  };

  // Reset form and edit mode
  const resetForm = () => {
    setFormData({
      name: "",
      status: "active",
      priority: 5,
      image: null,
    });
    setSelectedProject(null);
    setEditMode(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-[#fff]">Project Details</h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editMode ? "Edit Project" : "Create New Project"}
        </h2>

        <form onSubmit={editMode ? updateProject : createProject}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Project Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="priority"
            >
              Priority (1-10)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="priority"
              type="number"
              name="priority"
              min="1"
              max="10"
              value={formData.priority}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Project Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              name="image"
              onChange={handleInputChange}
            />
            {editMode && (
              <p className="text-sm text-gray-500 mt-1">
                Leave empty to keep existing image
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Processing..."
                : editMode
                ? "Update Project"
                : "Create Project"}
            </button>

            {editMode && (
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">
          Project List
        </h2>

        {loading && <p>Loading projects...</p>}

        {!loading && projects.length === 0 && (
          <p className="text-gray-500">
            No projects found. Create your first project above.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project._id} className="border rounded p-4">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover mb-2"
                />
              )}
              <h3 className="font-bold">{project.name}</h3>
              <p className="text-gray-500">
                Status:{" "}
                <span
                  className={`${
                    project.status === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {project.status}
                </span>
              </p>
              <p>Priority: {project.priority}</p>
              <p>Created: {new Date(project.createdAt).toLocaleDateString()}</p>

              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-sm"
                  onClick={() => handleEdit(project)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                  onClick={() => deleteProject(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Data Display Section */}
      {projects.length > 0 && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-6">
          {/* Raw JSON Data */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-500">
              Raw Project Data
            </h3>
            <div className="bg-gray-500 p-4 rounded overflow-auto max-h-96">
              <pre className="text-xs">{JSON.stringify(projects, null, 2)}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
