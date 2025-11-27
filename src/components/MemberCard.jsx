export default function MemberCard({ member }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "6px",
      padding: "12px",
      width: "200px",
      marginBottom: "12px"
    }}>
      <h3 style={{ margin: 0 }}>{member.name}</h3>
      <p>Status: {member.status}</p>
      <p>Tasks: {member.tasks.length}</p>
    </div>
  );
}
