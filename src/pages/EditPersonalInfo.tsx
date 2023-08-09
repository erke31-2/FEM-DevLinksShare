import { useOutletContext } from "react-router-dom";
import Heading from "../components/Heading";
import PersonalInfoForm from "../components/PersonalInfoForm";
import { User } from "@supabase/supabase-js";
import usePersonalInfoQuery from "../hooks/queries/usePersonalInfoQuery";
const EditPersonalInfo = () => {
  const user = useOutletContext<User>();
  const { personalInfo, status } = usePersonalInfoQuery(user.id);
  if(status === "loading"){
    return <span>Loading...</span>
  }

  return (
    <>
      <Heading title="Profile Details">
        Add you details to create a personal touch to your profile.
      </Heading>
      {personalInfo && <PersonalInfoForm currentPersonalInfo={personalInfo} />}
    </>
  );
};
export default EditPersonalInfo;
