import { useSelector, useDispatch } from "react-redux";
import { assignTask } from "../redux/slices/membersSlice";
import { useState } from "react";

export default function TaskForm() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  const [memberId, setMemberId] = useState(members[0]?.id || 1);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Task must have a title");

    const task = { title, dueDate, completed: false };

    dispatch(assignTask({ id: Number(memberId), task }));

    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3 style={{ marginTop: 0 }}>Assign Task</h3>

      <label>Member</label>
      <select
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
      >
        {members.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>

      <label>Task Title</label>
      <input
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Due Date</label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="button" type="submit">Assign</button>
    </form>
  );
}
