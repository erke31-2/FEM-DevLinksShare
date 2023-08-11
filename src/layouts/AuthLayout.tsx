import { User, useUser } from "@supabase/auth-helpers-react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const AuthLayout = () => {
  const user = useUser();
  return user ? <Outlet context={user} /> : <Navigate to="/login" />;
};
export default AuthLayout;

export const GetCurrentUser = () => {
  return useOutletContext<User>();
}
