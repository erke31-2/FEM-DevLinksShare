import LeftPart from "../components/PersonalInfo/LeftPart";
import RightPart from "../components/PersonalInfo/RightPart";
const EditPersonalInfo = () => {
  return (
    <main className="w-[95%] mx-auto wide:flex wide:justify-between wide:gap-x-4">
      <LeftPart />
      <RightPart />
    </main>
  );
};
export default EditPersonalInfo;
