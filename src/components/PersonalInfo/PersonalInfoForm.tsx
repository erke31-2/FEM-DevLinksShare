import { useRef } from "react";
import { FaImage } from "react-icons/fa";

const PersonalInfoForm = () => {
  const inputRef = useRef<HTMLInputElement|null>(null)
  const handleRefClick = () => {
    if(inputRef){
      inputRef.current?.click();
    }
  }
  return (
    <form className="p-8 flex flex-col h-[550px] mt-5 items-center justify-evenly gap-y-3">
      <div className="w-full bg-cardBg rounded-xl p-4 flex flex-col items-start gap-y-4 text-secondaryColor shadow-sm md:flex-row md:items-center md:justify-between">
        <label htmlFor="image">Profile picture</label>
        <div className="md:w-[70%] md:flex md:items-center md:pr-8 md:gap-x-2">
          <div className="px-2 py-4 flex flex-col items-center justify-center gap-2  border border-dashed border-secondaryColor hover:border-btnBg rounded-md text-secondaryColor hover:text-btnBg cursor-pointer w-[140px] h-[140px]" onClick={handleRefClick}>
            <FaImage size={23} />
            <span>Choose Image</span>
            <input type="file" id="image" className="hidden" ref={inputRef}/>
          </div>

          <small className="md:w-[60%]">
            Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
          </small>
        </div>
      </div>
      <div className="bg-cardBg rounded-xl p-4 flex flex-col gap-y-3 text-secondaryColor w-full shadow-sm">
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between">
          <label htmlFor="firstName">First name*</label>
          <input
            type="text"
            id="firstName"
            className="px-4 py-2 rounded-md border border-inputBorder outline-none focus:border-btnBg md:w-[70%]"
            placeholder="eg. Yang"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between">
          <label htmlFor="lastName">Last name*</label>
          <input
            type="text"
            id="lastName"
            className="px-4 py-2 rounded-md border border-inputBorder outline-none focus:border-btnBg md:w-[70%]"
            placeholder="eg. Wenli"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className="px-4 py-2 rounded-md border border-inputBorder outline-none focus:border-btnBg md:w-[70%]"
            placeholder="eg. yangwenli@gmail.com"
          />
        </div>
      </div>
    </form>
  );
};
export default PersonalInfoForm;
