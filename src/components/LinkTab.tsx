import { FaArrowRight } from "react-icons/fa";
import { SocialLinksData } from "../types/types";
import { linkTabs } from "../constants/linkTabs";

interface LinkTabProps {
  link: SocialLinksData;
}

const LinkTab: React.FC<LinkTabProps> = ({ link }) => {
  const matchedLink = linkTabs.find((linkTab) => linkTab.name === link.name);
  if (!matchedLink) {
    return null;
  }
  const { icon: Icon, colorClass } = matchedLink;

  return (
    <li>
      <a
        href={link.url}
        className={`${colorClass} flex items-center justify-between text-white px-4 py-3 rounded-lg hover:text-gray-400`}
        target="_blank"
      >
        <p className="flex items-center gap-x-2">
          <Icon size={20} /> <span className="font-semibold">{link.description ? link.description : link.name}</span>
        </p>
        <FaArrowRight size={12} />
      </a>
    </li>
  );
};
export default LinkTab;
