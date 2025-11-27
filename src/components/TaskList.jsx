export default function TaskList({ tasks }) {
  const updateProgress = (task, delta) => {
    task.progress = Math.min(100, Math.max(0, task.progress + delta));
    if (task.progress === 100) {
      task.completed = true;
    }
  };

  return (
    <div>
      <h3>Your Tasks</h3>

      {tasks.length === 0 && <p>No tasks assigned yet.</p>}

      {tasks.map((task, index) => (
        <div key={index} className="card" style={{ width: "300px" }}>
          <strong>{task.title}</strong>
          <p>Due: {task.dueDate || "N/A"}</p>
          <p>Progress: {task.progress || 0}%</p>

          <button className="button" onClick={() => updateProgress(task, +10)}>
            +10%
          </button>
          <button
            className="button"
            onClick={() => updateProgress(task, -10)}
            style={{ marginLeft: "6px", background: "#555" }}
          >
            -10%
          </button>
        </div>
      ))}
    </div>
  );
}
