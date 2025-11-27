import { useDispatch, useSelector } from "react-redux";
import { switchRole } from "../redux/slices/roleSlice";
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  UserCheck,
  Settings,
} from "lucide-react";

export default function Sidebar({ onNavigate, active }) {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role.currentRole);

  return (
    <aside
      style={{
        width: "240px",
        background: "#233044",
        color: "#fff",
        minHeight: "100vh",
        padding: "1.5rem 1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2 style={{ fontSize: "22px",color:"white", marginBottom: "2rem" }}>My Panel</h2>

        <NavItem
          icon={<LayoutDashboard size={18} />}
          label="Overview"
          active={active === "overview"}
          onClick={() => onNavigate("overview")}
        />
        <NavItem
          icon={<Users size={18} />}
          label="Team Status"
          active={active === "team"}
          onClick={() => onNavigate("team")}
        />
        <NavItem
          icon={<ClipboardList size={18} />}
          label="Task Assignment"
          active={active === "assign"}
          onClick={() => onNavigate("assign")}
        />

        {role !== "lead" && (
          <NavItem
            icon={<UserCheck size={18} />}
            label="My Tasks"
            active={active === "mytasks"}
            onClick={() => onNavigate("mytasks")}
          />
        )}

      </div>

      <div>
        <button
          className="button"
          style={{
            width: "100%",
            background: "#4e73df",
            fontSize: "14px",
          }}
          onClick={() =>
            dispatch(switchRole(role === "lead" ? "member" : "lead"))
          }
        >
          Switch to {role === "lead" ? "Member" : "Lead"}
        </button>

        <NavItem
          icon={<Settings size={18} />}
          label="Settings"
          onClick={() => {}}
          style={{ marginTop: "1rem" }}
        />
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: ".6rem .8rem",
        marginBottom: ".6rem",
        cursor: "pointer",
        borderRadius: "6px",
        background: active ? "#4e73df" : "transparent",
        color: active ? "#fff" : "#e2e8f0",
        transition: "0.2s",
      }}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}
