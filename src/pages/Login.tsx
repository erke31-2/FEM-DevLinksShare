import { useUser } from "@supabase/auth-helpers-react";
import { FaGithub } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const user = useUser();
  const {logInWithProvider} = useAuth()

  if (user) {
    return <Navigate to="/edit" />;
  }
  return (
    <div className="bg-cardBg w-full h-screen flex justify-center items-center">
      <div className="w-[300px] h-[400px] bg-navBg rounded-lg px-6 flex justify-center items-center">
        <button className="flex items-center w-full bg-black text-cardBg p-3 gap-x-3 rounded-md" onClick={() => logInWithProvider("github")}>
          <FaGithub size={20} />{" "}
          <span className="font-bold">Log In With GitHub</span>
        </button>
      </div>
    </div>
  );
};
export default Login;
