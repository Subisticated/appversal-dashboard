import { useSelector, useDispatch } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";

export default function Header() {
  const role = useSelector((state) => state.role.currentRole);
  const currentUser = useSelector((state) => state.role.currentUser);
  const dispatch = useDispatch();

  return (
    <header className="header" style={{ background: "#1e293b", color: "white" }}>
      <h2 style={{ color: "white" }}>Team Dashboard</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span>Logged in: <strong>{currentUser}</strong></span>
        <span>Role: <strong>{role.toUpperCase()}</strong></span>

        <button
          className="button"
          onClick={() =>
            dispatch(switchRole(role === "lead" ? "member" : "lead"))
          }
          style={{
            background: "#475569",
            borderRadius: "4px",
            padding: "6px 12px",
            fontSize: "14px",
          }}
        >
          Switch View
        </button>
      </div>
    </header>
  );
}
