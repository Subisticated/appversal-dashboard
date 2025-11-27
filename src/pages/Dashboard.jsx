import { useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import StatusSummary from "../components/StatusSummary";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  const role = useSelector((state) => state.role.currentRole);
  const members = useSelector((state) => state.members);

  return (
    <div className="page">
      {role === "lead" && (
        <>
          <h2>Team Members</h2>

          <TaskForm />
          <StatusSummary />

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {members.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </>
      )}

      {role !== "lead" && <p>Member View Coming...</p>}
    </div>
  );
}
