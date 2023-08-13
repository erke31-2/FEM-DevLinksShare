import { Link } from "react-router-dom";
import EmailLogin from "../components/guest/EmailLogin";
import OAuthLogin from "../components/guest/OAuthLogin";

const Login = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col gap-y-8">
      <h2 className="text-2xl font-semibold">Welcome Back!</h2>
      <OAuthLogin />
      <div className="flex items-center gap-x-8 w-[75%] mx-auto justify-between px-6">
        <div className="h-[2px] w-1/3 bg-slate-300" />
        <span>Or</span>
        <div className="h-[2px] w-1/3 bg-slate-300" />
      </div>
      <EmailLogin />
      <p className="text-sm flex gap-x-1">
        <span>Don't have an account?</span>
        <Link to="/guest/register" className="text-primaryColor font-medium">
          Sign up for free
        </Link>
      </p>
    </section>
  );
};
export default Login;
