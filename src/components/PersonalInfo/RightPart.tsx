import Heading from "../Heading";
import PersonalInfoForm from "./PersonalInfoForm";

const RightPart = () => {
  return (
    <div className="w-full shadow-sm  rounded-lg py-4 mb-6 bg-white wide:w-[60%]">
      <Heading title="Profile Details">
        Add you details to create a personal touch to your profile.
      </Heading>
      <PersonalInfoForm />
      <div className="w-full border-t border-t-gray-300 px-8 pt-3 flex md:justify-end justify-center">
        <button className="w-full md:w-fit py-2 px-6 bg-btnBg rounded-lg text-white font-medium">
          Save
        </button>
      </div>
    </div>
  );
};
export default RightPart;
