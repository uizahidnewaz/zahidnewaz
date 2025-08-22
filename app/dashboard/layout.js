// Dashboard layout with sidebar, hides Header and Footer

const Sidebar = () => (
  <aside className="border-r border-[#b3b3b3] h-screen w-64 flex flex-col p-6 fixed left-0 top-0">
    <h2 className="text-2xl font-bold mb-8 text-[#fff]">ZahidNewz</h2>
    <nav className="flex flex-col gap-4">
      <a
        href="/dashboard"
        className="text-[#fff] hover:text-blue-600 font-medium"
      >
        Home
      </a>
      <a
        href="/dashboard/projects"
        className="text-[#fff] hover:text-blue-600 font-medium"
      >
        Projects
      </a>
      <a
        href="/dashboard/tasks"
        className="text-[#fff] hover:text-blue-600 font-medium"
      >
        Tasks
      </a>
      <a
        href="/dashboard/messages"
        className="text-[#fff] hover:text-blue-600 font-medium"
      >
        Messages
      </a>
    </nav>
    <div className="mt-auto pt-8 text-sm text-gray-400">© 2025 Zahid Newaz</div>
  </aside>
);

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
