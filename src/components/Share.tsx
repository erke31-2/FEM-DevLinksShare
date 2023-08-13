import InfoCard from "./InfoCard";
import { User } from "@supabase/supabase-js";
import { useOutletContext } from "react-router-dom";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";

const Share = () => {
  const user = useOutletContext<User>();
  const { personalInfo } = usePersonalInfoQuery(user.id);
  const { socialLinks } = useSocialLinksQuery(user.id);
  
  return (
    <article className="w-[320px] bg-white shadow-lg rounded-xl p-8 flex flex-col gap-y-10 absolute top-[140px] left-0 right-0 mx-auto">
      <InfoCard personalInfo={personalInfo} socialLinks={socialLinks}/>
    </article>
  );
};
export default Share;
