import { useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import StatusSummary from "../components/StatusSummary";
import TaskForm from "../components/TaskForm";
import StatusSelector from "../components/StatusSelector";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const role = useSelector((state) => state.role.currentRole);
  const members = useSelector((state) => state.members);
  const currentUser = useSelector((state) => state.role.currentUser);

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

      {role !== "lead" && (
  <>
    <h2>Welcome</h2>
    <StatusSelector />

    <div style={{ marginTop: "1.5rem" }}>
      <TaskList tasks={members.find(m => m.name === currentUser)?.tasks || []} />
    </div>
  </>
)}
    </div>
  );
}
