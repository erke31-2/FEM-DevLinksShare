import { Link, useOutletContext } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import { User } from "@supabase/supabase-js";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";
import config from "../config";
import { useState } from "react";

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);
  const user = useOutletContext<User>();
  const { personalInfo } = usePersonalInfoQuery(user.id);
  const { socialLinks } = useSocialLinksQuery(user.id);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${config.baseUrl}/share/${personalInfo?.user_name}`);
    setIsCopied(true);
  };
  return (
    <div className="w-full h-screen bg-cardBg flex justify-center items-start">
      <section className="w-full h-[30vh] bg-btnBg rounded-b-[15px] md:rounded-b-[30px] pt-5 relative">
        <header className="w-[95%] bg-cardBg rounded-md mx-auto px-4 py-2 flex items-center justify-between">
          <Link
            to="/edit"
            className="border border-btnBg text-btnBg rounded-md font-medium px-5 py-[11px] text-sm hover:border-primaryColor hover:text-primaryColor"
          >
            Back to Editor
          </Link>
          <button
            className="text-cardBg bg-btnBg w-[140px] px-6 py-3 rounded-md font-medium text-sm hover:bg-opacity-80"
            onClick={handleCopy}
          >
            {isCopied ? "Copied" : "Share Link"}
          </button>
        </header>
        <article className="w-[320px] bg-white shadow-lg rounded-xl p-8 flex flex-col gap-y-10 absolute top-[140px] left-0 right-0 mx-auto">
          <InfoCard personalInfo={personalInfo} socialLinks={socialLinks} />
        </article>
      </section>
    </div>
  );
};
export default Home;
