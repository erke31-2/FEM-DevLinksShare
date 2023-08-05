import { FaGithub, FaLinkedin, FaYoutube, FaArrowRight } from "react-icons/fa";

const Share = () => {
  return (
    <article className="w-[300px] bg-white shadow-md rounded-xl p-8 flex flex-col gap-y-10">
      <div className="w-full flex flex-col items-center gap-y-2">
        <div className="w-20 h-20 rounded-full border-[3px] border-btnBg">
          <img src="/images/profile.png" alt="profile" className="w-full h-full object-cover object-center rounded-full"/>
        </div>
        <h2 className="text-2xl font-bold">Yang Wenli</h2>
        <p className="text-sm text-secondaryColor">yangwenli@gmail.com</p>
      </div>
      <ul className="flex flex-col gap-y-3">
        <li>
          <a href="#" className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-lg" target="_blank">
            <p className="flex items-center gap-x-2">
            <FaGithub size={20}/> <span>GitHub</span>
            </p>
            <FaArrowRight size={12}/>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-between bg-red-600 text-white px-4 py-3 rounded-lg" target="_blank">
            <p className="flex items-center gap-x-2">
            <FaYoutube size={20}/> <span>YouTube</span>
            </p>
            <FaArrowRight size={12}/>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-between bg-blue-600 text-white px-4 py-3 rounded-lg" target="_blank">
            <p className="flex items-center gap-x-2">
            <FaLinkedin size={20}/> <span>Linkedin</span>
            </p>
            <FaArrowRight size={12}/>
          </a>
        </li>
       
      </ul>
    </article>
  );
};
export default Share;
