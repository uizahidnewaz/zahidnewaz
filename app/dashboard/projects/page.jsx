"use client";
import { useState } from "react";

const ProjectsPage = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
    status: "active",
    priority: 1,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "priority" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(
        "https://zahidnewazbackend.onrender.com/api/projects",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ error: "Failed to create project" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4" style={{ background: "var(--primary)" }}>
      <div className="w-full max-w-lg bg-[var(--color-grey-14)] rounded-2xl shadow-xl p-8 border border-[var(--color-blue-24)]">
        <h1 className="text-3xl font-extrabold mb-6 text-center tracking-tight drop-shadow" style={{ color: "var(--color-chartreuse-green-60)" }}>Create New Project</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold" style={{ color: "var(--color-white-solid)" }}>Name</label>
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
            <label className="block mb-2 text-sm font-semibold" style={{ color: "var(--color-white-solid)" }}>Image URL</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[var(--color-blue-24)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-chartreuse-green-60)] bg-[var(--color-grey-13)] text-[var(--color-white-solid)]"
              placeholder="Paste image URL"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold" style={{ color: "var(--color-white-solid)" }}>Status</label>
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
            <label className="block mb-2 text-sm font-semibold" style={{ color: "var(--color-white-solid)" }}>Priority</label>
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
                <svg className="animate-spin h-5 w-5 text-[var(--color-black-solid)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                Submitting...
              </span>
            ) : (
              "Create Project"
            )}
          </button>
        </form>
        {result && (
          <div className="mt-8 p-4 rounded-xl border border-[var(--color-blue-24)] bg-[var(--color-grey-14)] text-[var(--color-chartreuse-green-60)] shadow-inner">
            <h2 className="font-bold mb-2">Server Response:</h2>
            <pre className="whitespace-pre-wrap break-words text-sm">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
