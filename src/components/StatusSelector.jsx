import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../redux/slices/membersSlice";

const STATUSES = ["Working", "Break", "Meeting", "Offline"];

export default function StatusSelector() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.role.currentUser);
  const members = useSelector((state) => state.members);

  const user = members.find(m => m.name === currentUser);

  const changeStatus = (status) => {
    dispatch(updateStatus({ id: user.id, status }));
  };

  return (
    <div className="form-card" style={{ width: "300px" }}>
      <h3>Update Status</h3>

      {STATUSES.map((s) => (
        <button
          key={s}
          onClick={() => changeStatus(s)}
          className="button"
          style={{
            marginRight: "8px",
            background: user.status === s ? "#111" : undefined
          }}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
