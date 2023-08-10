import Heading from "../components/Heading";
import SocialLinksForm from "../components/socialLinks/SocialLinksForm";


const EditLinks = () => {
  return (
    <>
      <Heading title="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>
      <SocialLinksForm />
    </>
  );
};
export default EditLinks;
