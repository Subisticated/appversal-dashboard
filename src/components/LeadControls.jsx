import { useSelector } from "react-redux";

export default function LeadControls({ onFilterChange, onSortChange }) {
  const members = useSelector((state) => state.members);
  const statuses = [...new Set(members.map((m) => m.status))];

  return (
    <div className="form-card" style={{ marginBottom: "1rem", width: "350px" }}>
      <h3>Manage View</h3>

      <label>Filter by Status</label>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <option value="all">All</option>
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <label>Sort by Tasks</label>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button className="button" onClick={() => onSortChange("asc")}>
          Asc
        </button>
        <button className="button" onClick={() => onSortChange("desc")}>
          Desc
        </button>
      </div>
    </div>
  );
}
