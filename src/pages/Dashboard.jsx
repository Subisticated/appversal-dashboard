import { useSelector } from "react-redux";
import MemberCard from "../components/MemberCard";

export default function Dashboard() {
  const role = useSelector((state) => state.role.currentRole);
  const members = useSelector((state) => state.members);

  if (role !== "lead")
    return <p>Member View coming...</p>;

  return (
    <div>
      <h2>Team Members</h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {members.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </div>
  );
}
