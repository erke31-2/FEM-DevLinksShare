import Heading from "../components/Heading";
import PersonalInfoForm from "../components/personalInfo/PersonalInfoForm";
import SkeletonInfoForm from "../components/personalInfo/SkeletonInfoForm";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";
import { GetCurrentUser } from "../layouts/AuthLayout";
const EditPersonalInfo = () => {
  const user = GetCurrentUser(); 
  const { personalInfo, status } = usePersonalInfoQuery(user.id);
 

  return (
    <>
      <Heading title="Profile Details">
        Add you details to create a personal touch to your profile.
      </Heading>
      {
        status === "loading" ? <SkeletonInfoForm /> : status === "success" && personalInfo ? <PersonalInfoForm currentPersonalInfo={personalInfo} /> : <span>Error</span>
      }
    </>
  );
};
export default EditPersonalInfo;
