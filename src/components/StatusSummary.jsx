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
    <div style={{ margin: "1rem 0", fontWeight: "bold" }}>
      {Object.entries(statusCount).map(([status, count]) => (
        <span key={status} style={{ marginRight: "1rem" }}>
          {status}: {count}
        </span>
      ))}
    </div>
  );
}
