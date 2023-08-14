import { useParams } from "react-router-dom";
import InfoCard from "../InfoCard";
import usePersonalInfoByUserName from "../../hooks/queries/usePersonalInfoByUserName";
import useSocialLinksQuery from "../../hooks/queries/useSocialLinksQuery";
import { Link } from "react-router-dom";
import { useSessionContext } from "@supabase/auth-helpers-react";
const MyLinksShareCard = () => {
  const { session } = useSessionContext();
  const { username } = useParams() as { username: string };
  const {data: personalInfo} = usePersonalInfoByUserName(username);
  const {socialLinks} = useSocialLinksQuery(personalInfo?.id);


  return (
    <div className="w-full h-screen bg-cardBg flex justify-center items-start">
      <section className="w-full h-[30vh] bg-btnBg rounded-b-[15px] md:rounded-b-[30px] pt-5 relative">
        <header className="w-[95%] bg-cardBg rounded-md mx-auto px-4 py-2 flex items-center justify-between">
          {session?.user.id === personalInfo?.id ? (
            <Link
              to="/edit"
              className="border border-btnBg text-btnBg rounded-md font-medium px-5 py-[11px] text-sm hover:border-primaryColor hover:text-primaryColor"
            >
              Back to Editor
            </Link>
          ) : (
            <Link to="/" className="bg-btnBg text-cardBg rounded-md font-medium px-5 py-[11px] hover:bg-opacity-80">Create Your Own</Link>
          )}
        </header>
        <article className="w-[320px] bg-white shadow-lg rounded-xl p-8 flex flex-col gap-y-10 absolute top-[140px] left-0 right-0 mx-auto">
          <InfoCard personalInfo={personalInfo} socialLinks={socialLinks} />
        </article>
      </section>
    </div>
  );
};
export default MyLinksShareCard;
