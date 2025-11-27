import { useDispatch, useSelector } from "react-redux";
import { updateTaskProgress } from "../redux/slices/membersSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.role.currentUser);
  const members = useSelector((state) => state.members);
  const user = members.find((m) => m.name === currentUser);

  const activeTasks = user.tasks.filter((t) => !t.completed);
  const completedTasks = user.tasks.filter((t) => t.completed);

  const adjust = (taskIndex, delta) =>
    dispatch(updateTaskProgress({ id: user.id, taskIndex, delta }));

  return (
    <div>
      <h3>Your Tasks</h3>

      {activeTasks.length === 0 && <p>No active tasks right now.</p>}

      {activeTasks.map((task, i) => (
        <div key={i} className="card" style={{ width: "300px" }}>
          <strong>{task.title}</strong>
          <p>Due: {task.dueDate || "N/A"}</p>
          <p>Progress: {task.progress}%</p>
          <button className="button" onClick={() => adjust(i, +10)}>
            +10%
          </button>
          <button
            className="button"
            onClick={() => adjust(i, -10)}
            style={{ marginLeft: "6px", background: "#555" }}
          >
            -10%
          </button>
        </div>
      ))}

      {completedTasks.length > 0 && (
        <>
          <h3 style={{ marginTop: "2rem" }}>Completed Tasks</h3>
          {completedTasks.map((task, i) => (
            <div key={i} className="card" style={{ width: "300px" }}>
              <strong style={{ textDecoration: "line-through" }}>
                {task.title}
              </strong>
              <p>Done ✔</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
