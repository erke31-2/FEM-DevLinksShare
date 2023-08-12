import { User, useSessionContext } from "@supabase/auth-helpers-react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

const AuthLayout = () => {
  const { session, isLoading } = useSessionContext();
  if (isLoading) {
    return <span>Loading..</span>;
  }
  return session?.user ? (
    <Outlet context={session.user} />
  ) : (
    <Navigate to="/guest" />
  );
};
export default AuthLayout;

export const GetCurrentUser = () => {
  return useOutletContext<User>();
};
