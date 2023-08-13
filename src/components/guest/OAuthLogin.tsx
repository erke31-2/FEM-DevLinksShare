import { FaFacebook, FaGithub } from "react-icons/fa";
import useOAuthLoginMutation from "../../hooks/mutations/useOAuthLoginMutation";
import { Provider } from "@supabase/supabase-js";

const OAuthLogin = () => {
  const {mutation} = useOAuthLoginMutation();

  const handleOAuthLogIn = (provider: Provider) => {
    mutation.mutate(provider)
  }

  return (
    <div className="w-[75%] mx-auto flex justify-center items-center flex-col gap-y-2">
      <h3 className="text-lg font-medium text-secondaryColor">Continue With</h3>
      <div className="flex gap-x-5">
        <button className="border rounded-md p-3 text-[#0F9D58]" onClick={() => handleOAuthLogIn("google")}>
            <img src="/images/google.png" alt="google" className="w-6 h-6"/>
        </button>
        <button className="border rounded-md p-3 text-black" onClick={() => handleOAuthLogIn("github")}>
            <FaGithub size={25}/>
        </button>
        <button className="border rounded-md p-3 text-blue-600" onClick={() => handleOAuthLogIn("facebook")}>
            <FaFacebook size={25}/>
        </button>
      </div>
    </div>
  );
};
export default OAuthLogin;
