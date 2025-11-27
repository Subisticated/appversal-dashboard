import { useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import StatusSummary from "../components/StatusSummary";

export default function Dashboard() {
  const role = useSelector((state) => state.role.currentRole);
  const members = useSelector((state) => state.members);

  return (
    <div className="page">
      {role === "lead" && (
        <>
          <h2>Team Members</h2>
          <StatusSummary />
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {members.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </>
      )}

      {role !== "lead" && (
        <p style={{ fontSize: "18px" }}>Member View Coming...</p>
      )}
    </div>
  );
}
