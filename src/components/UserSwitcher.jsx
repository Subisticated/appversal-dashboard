import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/slices/roleSlice";

export default function UserSwitcher() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.role.currentUser);
  const members = useSelector((state) => state.members);

  return (
    <div className="form-card" style={{ width: "260px" }}>
      <label style={{ fontWeight: "bold" }}>Switch User</label>
      <select
        value={currentUser}
        onChange={(e) => dispatch(setUser(e.target.value))}
        style={{ width: "100%", marginTop: "4px" }}
      >
        {members.map((m) => (
          <option key={m.id} value={m.name}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
}
