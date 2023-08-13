import { User, useSessionContext } from "@supabase/auth-helpers-react";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import FullScreenLoading from "../components/FullScreenLoading";

const AuthLayout = () => {
  const { session, isLoading } = useSessionContext();
  if (isLoading) {
    return <FullScreenLoading /> 
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
