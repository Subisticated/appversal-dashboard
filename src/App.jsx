import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const role = useSelector((state) => state.role.currentRole);
  const [active, setActive] = useState("team");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onNavigate={setActive} active={active} />
      <div style={{ flexGrow: 1 }}>
        <Header />
        <Dashboard active={active} />
      </div>
    </div>
  );
}

export default App;
