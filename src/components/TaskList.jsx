import { useDispatch, useSelector } from "react-redux";
import { updateTaskProgress } from "../redux/slices/membersSlice";

export default function TaskList() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.role.currentUser);
  const members = useSelector((state) => state.members);
  const user = members.find((m) => m.name === currentUser);

  const adjust = (i, d) =>
    dispatch(updateTaskProgress({ id: user.id, taskIndex: i, delta: d }));

  const split = (arr) => ({
    active: arr.filter((t) => !t.completed),
    done: arr.filter((t) => t.completed),
  });

  const { active, done } = split(user.tasks);

  return (
    <div style={{ width: "500px" }}>
      <h3>Your Tasks</h3>

      {active.map((task, i) => (
        <div key={i} className="card">
          <strong>{task.title}</strong>
          <p style={{ fontSize: "14px" }}>Due: {task.dueDate}</p>

          <div
            style={{
              height: "8px",
              width: "100%",
              background: "#cbd5e1",
              borderRadius: "6px",
              margin: "8px 0",
            }}
          >
            <div
              style={{
                height: "8px",
                width: `${task.progress}%`,
                background: "#4e73df",
                borderRadius: "6px",
                transition: "0.2s",
              }}
            ></div>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <button className="button" onClick={() => adjust(i, +10)}>
              +10%
            </button>
            <button className="button" onClick={() => adjust(i, -10)}>
              -10%
            </button>
          </div>
        </div>
      ))}

      {done.length > 0 && (
        <>
          <h4 style={{ marginTop: "1.5rem" }}>Completed</h4>
          {done.map((task, i) => (
            <div key={i} className="card">
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
