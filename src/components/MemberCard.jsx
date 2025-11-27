import { useDispatch } from "react-redux";
import { updateStatus } from "../redux/slices/membersSlice";

export default function MemberCard({ member }) {
  const dispatch = useDispatch();

  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const changeStatus = (status) =>
    dispatch(updateStatus({ id: member.id, status }));

  return (
    <div
      className="card"
      style={{
        width: "240px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "#4e73df",
            color: "white",
            borderRadius: "50%",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          {initials}
        </div>

        <strong style={{ fontSize: "15px" }}>{member.name}</strong>
      </div>

      <span
        className={`status-tag status-${member.status.toLowerCase()}`}
        style={{ padding: "4px 8px", fontSize: "12px" }}
      >
        {member.status}
      </span>

      <p style={{ fontSize: "14px", color: "#475569" }}>
        Tasks: {member.tasks.length}
      </p>

      <button className="button" onClick={() => changeStatus("Working")}>
        Mark Working
      </button>
      <button className="button" onClick={() => changeStatus("Break")}>
        Break
      </button>
      <button className="button" onClick={() => changeStatus("Meeting")}>
        Meeting
      </button>
      <button className="button" onClick={() => changeStatus("Offline")}>
        Offline
      </button>
    </div>
  );
}
