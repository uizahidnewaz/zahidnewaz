const page = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <h1
        className="text-3xl font-bold mb-6"
        style={{
          color: "var(--color-chartreuse-green-60)",
          textShadow: "0 2px 8px var(--color-blue-24)",
        }}
      >
        Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div
          className="rounded-lg shadow-lg p-6 flex flex-col items-center border"
          style={{
            background:
              "linear-gradient(135deg, var(--color-white-solid) 80%, var(--color-blue-24) 100%)",
            borderColor: "var(--color-blue-24)",
          }}
        >
          <span
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--color-azure-42)" }}
          >
            Projects
          </span>
          <span
            className="text-4xl font-bold"
            style={{ color: "var(--color-chartreuse-green-60)" }}
          >
            12
          </span>
        </div>
        <div
          className="rounded-lg shadow-lg p-6 flex flex-col items-center border"
          style={{
            background:
              "linear-gradient(135deg, var(--color-white-solid) 80%, var(--color-green-49) 100%)",
            borderColor: "var(--color-green-49)",
          }}
        >
          <span
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--color-green-49)" }}
          >
            Tasks
          </span>
          <span
            className="text-4xl font-bold"
            style={{ color: "var(--color-orange-58)" }}
          >
            34
          </span>
        </div>
        <div
          className="rounded-lg shadow-lg p-6 flex flex-col items-center border"
          style={{
            background:
              "linear-gradient(135deg, var(--color-white-solid) 80%, var(--color-violet-67) 100%)",
            borderColor: "var(--color-violet-67)",
          }}
        >
          <span
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--color-violet-67)" }}
          >
            Messages
          </span>
          <span
            className="text-4xl font-bold"
            style={{ color: "var(--color-red-55)" }}
          >
            5
          </span>
        </div>
      </div>
      <div className="mt-10 w-full max-w-4xl">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{
            color: "var(--color-orange-58)",
            textShadow: "0 1px 6px var(--color-grey-14)",
          }}
        >
          Recent Activity
        </h2>
        <ul
          className="rounded-lg shadow-lg p-6 divide-y border"
          style={{
            background:
              "linear-gradient(135deg, var(--color-white-solid) 80%, var(--color-chartreuse-green-60) 100%)",
            borderColor: "var(--color-chartreuse-green-60)",
          }}
        >
          <li className="py-2" style={{ color: "var(--color-blue-24)" }}>
            Project "Redesign" updated
          </li>
          <li className="py-2" style={{ color: "var(--color-orange-58)" }}>
            New task assigned: "UI Review"
          </li>
          <li className="py-2" style={{ color: "var(--color-green-49)" }}>
            Message from Zahid received
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
