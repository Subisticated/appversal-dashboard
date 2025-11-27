import { useState } from "react";
import { useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";
import StatusSummary from "../components/StatusSummary";
import TaskForm from "../components/TaskForm";
import StatusSelector from "../components/StatusSelector";
import TaskList from "../components/TaskList";
import LeadControls from "../components/LeadControls";
import UserSwitcher from "../components/UserSwitcher";

export default function Dashboard() {
  const role = useSelector((state) => state.role.currentRole);
  const currentUser = useSelector((state) => state.role.currentUser);
  const members = useSelector((state) => state.members);

  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState(null);

  let filteredMembers = [...members];

  if (filter !== "all") {
    filteredMembers = filteredMembers.filter((m) => m.status === filter);
  }

  if (sort === "asc") {
    filteredMembers.sort((a, b) => a.tasks.length - b.tasks.length);
  } else if (sort === "desc") {
    filteredMembers.sort((a, b) => b.tasks.length - a.tasks.length);
  }

  return (
    <div className="page">
      {role === "lead" && (
        <>
          <h2>Team Members</h2>
          <LeadControls
            onFilterChange={setFilter}
            onSortChange={setSort}
          />
          <TaskForm />
          <StatusSummary />
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {filteredMembers.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </>
      )}

      {role !== "lead" && (
        <>
          <h2>Welcome, {currentUser}</h2>
          <UserSwitcher />
          <div style={{ marginTop: "1.5rem" }}>
            <StatusSelector />
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <TaskList />
          </div>
        </>
      )}
    </div>
  );
}
