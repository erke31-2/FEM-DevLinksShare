import { FaFacebook, FaGithub } from "react-icons/fa";

const OAuthLogin = () => {
  return (
    <div className="w-[75%] mx-auto flex justify-center items-center flex-col gap-y-2">
      <h3 className="text-lg font-medium text-secondaryColor">Continue With</h3>
      <div className="flex gap-x-5">
        <button className="border rounded-md p-3 text-[#0F9D58]">
            <img src="/images/google.png" alt="google" className="w-6 h-6"/>
        </button>
        <button className="border rounded-md p-3 text-black">
            <FaGithub size={25}/>
        </button>
        <button className="border rounded-md p-3 text-blue-600">
            <FaFacebook size={25}/>
        </button>
      </div>
    </div>
  );
};
export default OAuthLogin;
