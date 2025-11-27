import { useSelector, useDispatch } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";

export default function Header() {
  const role = useSelector((state) => state.role.currentRole);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h2>Team Dashboard</h2>
      <div>
        <button
          className="button"
          onClick={() => dispatch(switchRole(role === "lead" ? "member" : "lead"))}
        >
          Switch to {role === "lead" ? "Member" : "Lead"} View
        </button>
      </div>
    </header>
  );
}
