import { FaGithub, FaArrowRight } from "react-icons/fa";

const SocialLink = () => {
  return (
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
  );
};
export default SocialLink;
