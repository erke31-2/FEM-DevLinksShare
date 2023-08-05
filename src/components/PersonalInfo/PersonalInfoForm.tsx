const PersonalInfoForm = () => {
  return (
    <form className="p-8 flex flex-col h-[550px] mt-5 items-center justify-evenly gap-y-3">
      <div className="w-full bg-cardBg rounded-xl p-4 flex flex-col items-start gap-y-4 text-secondaryColor shadow-sm md:flex-row md:items-center md:justify-between">
        <label htmlFor="image">Profile picture</label>
        <div className="md:w-[65%] md:flex md:items-center md:pr-8 md:gap-x-2">
          <div className="w-[120px] h-[120px] bg-violet-300 text-btnBg p-3">
            + Upload Image
          </div>
          <span className="text-sm md:w-[65%]">
            Image must be below 1024x1024px. Use PNG,JPG, or BMP format.
          </span>
        </div>
      </div>
      <div className="bg-cardBg rounded-xl p-4 flex flex-col gap-y-3 text-secondaryColor w-full shadow-sm">
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between">
          <label htmlFor="firstName">First name*</label>
          <input
            type="text"
            id="firstName"
            className="px-4 py-2 rounded-md border border-inputBorder outline-none focus:border-btnBg md:w-[65%]"
            placeholder="eg. Yang"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between">
          <label htmlFor="lastName">Last name*</label>
          <input
            type="text"
            id="lastName"
            className="px-4 py-2 rounded-md border border-inputBorder outline-none focus:border-btnBg md:w-[65%]"
            placeholder="eg. Wenli"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className="px-4 py-2 rounded-md border border-inputBorder outline-none focus:border-btnBg md:w-[65%]"
            placeholder="eg. yangwenli@gmail.com"
          />
        </div>
      </div>
    </form>
  );
};
export default PersonalInfoForm;
