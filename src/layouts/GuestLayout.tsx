import { useSessionContext } from "@supabase/auth-helpers-react";
import { Outlet, Navigate } from "react-router-dom";
import FullScreenLoading from "../components/FullScreenLoading";

const GuestLayout = () => {
  const { session, isLoading } = useSessionContext();
  if (isLoading) {
    return <FullScreenLoading />;
  }
  return session?.user ? (
    <Navigate to="/edit" />
  ) : (
    <main className="w-full h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <section className="w-full h-full hidden bg-[#6067F2] md:flex md:flex-col md:justify-center md:items-center md:gap-y-3">
        <h1 className="text-lg font-bold text-primaryColor">
          Create Your Own and Share it with the World!
        </h1>
        <div className="w-[90%]">
          <img
            src="/images/yang.png"
            alt="yang"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
      <Outlet />
    </main>
  );
};
export default GuestLayout;
