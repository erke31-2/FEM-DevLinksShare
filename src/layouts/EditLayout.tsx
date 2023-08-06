import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useUser } from "@supabase/auth-helpers-react";

const EditLayout = () => {
  const user = useUser();
  return user ? (
    <div className="w-full min-h-screen bg-cardBg pt-5 flex flex-col gap-y-5">
      <NavBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export default EditLayout;
