import Heading from "../components/Heading";
import SocialLinksForm from "../components/socialLinks/SocialLinksForm";
import useSocialLinksQuery from "../hooks/queries/useSocialLinksQuery";
import { GetCurrentUser } from "../layouts/AuthLayout";


const EditLinks = () => {
  const user = GetCurrentUser();
  const {socialLinks, status} = useSocialLinksQuery(user.id);
  if(status === "loading"){
    return <span>Loading...</span>
  }
  return (
    <>
      <Heading title="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>
      {socialLinks && <SocialLinksForm socialLinks={socialLinks}/>}
    </>
  );
};
export default EditLinks;
