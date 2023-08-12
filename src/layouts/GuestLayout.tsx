import { Outlet, Navigate } from "react-router-dom"
import { useUser } from "@supabase/auth-helpers-react";
const GuestLayout = () => {
    const user = useUser();  
    
  return (
    user ? <Navigate to="/edit"/> : (
      <main className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
        <section className="w-full h-full hidden bg-cardBg md:flex md:flex-col md:justify-center md:items-center md:gap-y-3">
          <h1 className="text-lg font-bold text-primaryColor">Create Your Own and Share it with Friends!</h1>
          <div className="w-[90%]">
          <img src="/public/images/yang.png" alt="yang" className="w-full h-full object-cover object-center"/>
          </div>
        </section>
        <Outlet />
      </main>
    ) 
  ) 
}
export default GuestLayout