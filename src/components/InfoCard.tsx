import { ProfileData, SocialLinksData } from "../types/types";
import LinkTab from "./LinkTab";

interface InfoCardProps {
  personalInfo?: ProfileData;
  socialLinks?: SocialLinksData[];
}

const InfoCard: React.FC<InfoCardProps> = ({ personalInfo, socialLinks }) => {  
  const defaultProfile = personalInfo?.avatar_url || "/images/profile.png";
  return (
    <>
      {personalInfo ? (
        <div className="w-full flex flex-col gap-y-1 justify-center items-center">
          <div className="w-[120px] h-[120px] rounded-full border-[3px] border-btnBg">
            <img
              src={defaultProfile}
              alt="Profile"
              className="w-full h-full object-cover rounded-full object-center"
            />
          </div>
          <h2 className="font-semibold text-xl text-primaryColor">
            {personalInfo.full_name}
          </h2>
          <p className="text-secondaryColor">{personalInfo.email_address}</p>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center gap-y-2">
          <div className="h-[120px] w-[120px] bg-slate-200 rounded-full" />
          <div className="w-1/2 h-6 bg-slate-200 rounded-md" />
          <div className="w-3/4 h-5 rounded-md bg-slate-200" />
        </div>
      )}
      {socialLinks && socialLinks.length > 0 ? (
        <ul className="flex flex-col gap-y-2 h-[280px] overflow-auto">
          {socialLinks.map((link) => (
            <LinkTab link={link} key={link.id}/>
          ))}
        </ul>
      ) : (
        <div className="w-full flex flex-col gap-y-3">
          <div className="w-full h-11 rounded-md bg-slate-200" />
          <div className="w-full h-11 rounded-md bg-slate-200" />
          <div className="w-full h-11 rounded-md bg-slate-200" />
        </div>
      )}
    </>
  );
};
export default InfoCard;
