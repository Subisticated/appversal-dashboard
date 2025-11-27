export default function MemberCard({ member }) {
  return (
    <div className="card">
      <h3>{member.name}</h3>
      <span className={`status-tag status-${member.status.toLowerCase()}`}>
        {member.status}
      </span>
      <p style={{ marginTop: "8px" }}>
        Tasks: <strong>{member.tasks.length}</strong>
      </p>
    </div>
  );
}
