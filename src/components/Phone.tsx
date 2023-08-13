import InfoCard from "./InfoCard";
import { User } from "@supabase/supabase-js";
import { useOutletContext } from "react-router-dom";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";

const Phone = () => {
  const user = useOutletContext<User>();
  const { personalInfo } = usePersonalInfoQuery(user.id);
  const { socialLinks } = useSocialLinksQuery(user.id);
  
  return (
    <div className="w-[320px] h-[600px] border-2 rounded-[35px] p-3 border-gray-500">
      <div className="w-full h-full border-2 rounded-[22px] border-gray-500 relative flex flex-col gap-y-8 pt-10 pb-4 px-4">
        <div className="absolute w-[140px] h-[25px] -top-1 left-0 right-0 mx-auto bg-cardBg border-b-2 border-r-2 border-l-2 border-gray-500 rounded-b-2xl rounded-tr-[-50px] rounded-t-sm" />
        <div className="absolute -top-1  bg-cardBg w-[200px] h-[2px]" />
        <InfoCard personalInfo={personalInfo} socialLinks={socialLinks}/>
      </div>
    </div>
  );
};
export default Phone;
