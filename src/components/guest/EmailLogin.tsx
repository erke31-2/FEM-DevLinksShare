import { Link } from "react-router-dom";
import useAuth from "../../hooks/functions/useAuth";

const EmailLogin = () => {
  const {logInWithPassword} = useAuth();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await logInWithPassword({email: "testuser@gmail.com", password: "qwer123"})
  }

  return (
    <form className="w-[75%] p-6 flex flex-col gap-y-5" onSubmit={(e) => handleLogin(e)}>
      <div className="relative z-0 w-full mb-8">
        <input
          type="email"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor"
          id="email"
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-8">
        <input
          type="password"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor" 
          id="password"
          autoComplete="true"
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="password"
        >
          Password
        </label>

        <div className="flex justify-end mt-3">
          <Link to="/guest/register" className="text-sm underline text-slate-700">
            Forgot Password?
          </Link>
        </div>
      </div>
      <button className="text-white py-2 bg-btnBg rounded-md font-medium" type="submit">
        Log in
      </button>
    </form>
  );
};
export default EmailLogin;
