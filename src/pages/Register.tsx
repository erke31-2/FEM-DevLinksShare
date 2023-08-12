import OAuthLogin from "../components/guest/OAuthLogin";
import EmailRegister from "../components/guest/EmailRegister";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center flex-col gap-y-6">
      <h2 className="text-2xl font-semibold">Create Your Account!</h2>
      <OAuthLogin />
      <div className="flex items-center gap-x-8 w-[75%] mx-auto justify-between px-6">
        <div className="h-[2px] w-1/3 bg-slate-300" />
        <span>Or</span>
        <div className="h-[2px] w-1/3 bg-slate-300" />
      </div>
      <EmailRegister />
      <p className="text-sm flex gap-x-1">
        <span>Already had an Account?</span>
        <Link to="/guest/login" className="text-primaryColor font-medium">
          Log in here
        </Link>
      </p>
    </section>
  );
};
export default Register;
