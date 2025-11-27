import { useSelector, useDispatch } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";

export default function Header() {
  const role = useSelector((state) => state.role.currentRole);
  const dispatch = useDispatch();

  const toggleRole = () => {
    dispatch(switchRole(role === "lead" ? "member" : "lead"));
  };

  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <h2>Dashboard</h2>
      <button
        onClick={toggleRole}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          background: "#444",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Switch to {role === "lead" ? "Member" : "Lead"} View
      </button>
      <p>Current Role: {role.toUpperCase()}</p>
    </header>
  );
}
