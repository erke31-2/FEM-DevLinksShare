import { User } from "@supabase/supabase-js";
import NavBar from "../components/NavBar";
import Phone from "../components/Phone";
import { Outlet, useOutletContext } from "react-router-dom";

const EditLayout = () => {
  return (
    <div className="w-full min-h-screen bg-cardBg pt-5 flex flex-col gap-y-5">
      <NavBar />
      <main className="w-[95%] mx-auto wide:flex wide:justify-between wide:gap-x-4">
        <div className="hidden wide:w-[42%] wide:flex wide:items-center wide:justify-center wide:bg-white wide:rounded-lg wide:shadow-md wide:mb-6">
          <Phone />
        </div>

        <div className="w-full shadow-md  rounded-lg py-4 mb-6 bg-white wide:w-[58%]">
          <Outlet context={useOutletContext<User>()} />
        </div>
      </main>
    </div>
  );
};
export default EditLayout;
