import Heading from "../components/Heading";
import SkeletonLinksForm from "../components/socialLinks/SkeletonLinksForm";
import SocialLinksForm from "../components/socialLinks/SocialLinksForm";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import { GetCurrentUser } from "../layouts/AuthLayout";


const EditLinks = () => {
  const user = GetCurrentUser();
  const {socialLinks, status} = useSocialLinksQuery(user.id);
 
  return (
    <>
      <Heading title="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>
      {status === "loading" ? <SkeletonLinksForm /> : status === "success" && socialLinks ? <SocialLinksForm socialLinks={socialLinks}/> : <span>An Error happened!</span>}
    </>
  );
};
export default EditLinks;
