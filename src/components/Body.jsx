import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="px-2 flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
