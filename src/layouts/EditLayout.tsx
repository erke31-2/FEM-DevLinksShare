import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const EditLayout = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 pt-5 flex flex-col gap-y-5">
      <NavBar />
      <Outlet />
    </div>
  );
};
export default EditLayout;
