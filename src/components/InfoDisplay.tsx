import { FaGithub, FaLinkedin, FaYoutube, FaArrowRight } from "react-icons/fa";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";
import { User } from "@supabase/supabase-js";
import { useOutletContext } from "react-router-dom";

const InfoDisplay = () => {
  const user = useOutletContext<User>();
  const { personalInfo } = usePersonalInfoQuery(user.id);
  const imgSrc = personalInfo?.avatar_url ? personalInfo.avatar_url : "/images/profile.png"
  return (
    <>
      <div className="w-full flex flex-col items-center gap-y-2">
        <div className="w-20 h-20 rounded-full border-[3px] border-btnBg">
          <img
            src={imgSrc}
            alt={personalInfo?.first_name}
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">
          {personalInfo?.first_name} {personalInfo?.last_name}
        </h2>
        <p className="text-sm text-secondaryColor">
          {personalInfo?.email_address}
        </p>
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
    </>
  );
};
export default InfoDisplay;
