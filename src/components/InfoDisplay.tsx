import { User } from "@supabase/supabase-js";
import { useOutletContext } from "react-router-dom";
import LinkTab from "./LinkTab";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";

const InfoDisplay = () => {
  const user = useOutletContext<User>();
  const { personalInfo } = usePersonalInfoQuery(user.id);
  const { socialLinks } = useSocialLinksQuery(user.id);

  return (
    <>
      {personalInfo && (
        <div className="w-full flex flex-col items-center gap-y-2">
          <div className="w-[100px] h-[100px] rounded-full border-[3px] border-btnBg">
            {personalInfo.avatar_url ? (
              <img
                src={personalInfo.avatar_url}
                alt="profile"
                className="w-full h-full object-cover object-center rounded-full"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-slate-200" />
            )}
          </div>
          {personalInfo.first_name && personalInfo.last_name ? (
            <h2 className="text-2xl font-bold text-center">
              {personalInfo?.first_name} {personalInfo?.last_name}
            </h2>
          ) : (
            <div className="bg-slate-200 h-8 w-2/3 rounded-md" />
          )}

          {personalInfo.email_address ? (
            <p className="text-sm text-secondaryColor">
              {personalInfo.email_address}
            </p>
          ) : (
            <div className="bg-slate-200 h-6 w-full rounded-md" />
          )}
        </div>
      )}
      <ul className="flex flex-col gap-y-3 overflow-y-auto max-h-[300px]">
        {socialLinks &&
          socialLinks.map((link) => <LinkTab key={link.id} link={link} />)}
      </ul>
    </>
  );
};
export default InfoDisplay;