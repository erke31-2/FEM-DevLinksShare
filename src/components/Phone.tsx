import { FaGithub, FaLinkedin, FaYoutube, FaArrowRight } from "react-icons/fa";

const Phone = () => {
  return (
    <div className="w-[300px] h-[550px] border-2 rounded-[35px] p-3 border-gray-500">
      <div className="w-full h-full border-2 rounded-[22px] border-gray-500 relative flex flex-col gap-y-8 pt-8 pb-4 px-4">
        <div className="absolute w-[140px] h-[25px] -top-1 left-0 right-0 mx-auto bg-cardBg border-b-2 border-r-2 border-l-2 border-gray-500 rounded-b-2xl rounded-tr-[-50px] rounded-t-sm" />
        <div className="absolute -top-1  bg-cardBg w-[200px] h-[2px]" />
        <div className="w-full flex flex-col items-center gap-y-2">
          <div className="w-20 h-20 rounded-full border-[3px] border-btnBg">
            <img
              src="/images/profile.png"
              alt="profile"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold">Yang Wenli</h2>
          <p className="text-sm text-secondaryColor">yangwenli@gmail.com</p>
        </div>
        <ul className="flex flex-col gap-y-3">
          <li>
            <a
              href="#"
              className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-lg"
              target="_blank"
            >
              <p className="flex items-center gap-x-2">
                <FaGithub size={20} /> <span>GitHub</span>
              </p>
              <FaArrowRight size={12} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between bg-red-600 text-white px-4 py-3 rounded-lg"
              target="_blank"
            >
              <p className="flex items-center gap-x-2">
                <FaYoutube size={20} /> <span>YouTube</span>
              </p>
              <FaArrowRight size={12} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-lg"
              target="_blank"
            >
              <p className="flex items-center gap-x-2">
                <FaLinkedin size={20} /> <span>Linkedin</span>
              </p>
              <FaArrowRight size={12} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Phone;
