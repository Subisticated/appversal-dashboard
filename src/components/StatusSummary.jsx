import { useSelector } from "react-redux";

export default function StatusSummary() {
  const members = useSelector((state) => state.members);

  const statusCount = members.reduce(
    (acc, m) => {
      acc[m.status] = (acc[m.status] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <div style={{ display: "flex", gap: "12px", margin: "1rem 0" }}>
      {Object.entries(statusCount).map(([status, count]) => (
        <span
          key={status}
          className={`status-tag status-${status.toLowerCase()}`}
          style={{ fontSize: "12px", padding: "5px 12px" }}
        >
          {status}: {count}
        </span>
      ))}
    </div>
  );
}
