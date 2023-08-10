import { User } from "@supabase/supabase-js";
import { useOutletContext } from "react-router-dom";
import LinkTab from "./LinkTab";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";

const InfoDisplay = () => {
  const user = useOutletContext<User>();
  const {personalInfo} = usePersonalInfoQuery(user.id);
  const { socialLinks } = useSocialLinksQuery(user.id);
  const imgSrc = personalInfo?.avatar_url ? personalInfo.avatar_url : "/images/profile.png"
  return (
    <>
      <div className="w-full flex flex-col items-center gap-y-2">
        <div className="w-[100px] h-[100px] rounded-full border-[3px] border-btnBg">
          <img
            src={imgSrc}
            alt="Profile"
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
      <ul className="flex flex-col gap-y-3 overflow-y-auto max-h-[300px]">
       {socialLinks && socialLinks.map(link => <LinkTab key={link.id} link={link}/>)}
      </ul>
    </>
  );
};
export default InfoDisplay;
