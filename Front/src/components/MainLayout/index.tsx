import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "0.25rem 1rem", flex: 1 }}>
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;
