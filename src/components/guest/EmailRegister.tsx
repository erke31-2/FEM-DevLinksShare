const EmailRegister = () => {
  return (
    <form className="w-[75%] p-6 flex flex-col gap-y-5">
      <div className="relative z-0 w-full mb-8">
        <input
          type="email"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor"
          id="email"
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div className="relative z-0 w-full mb-8">
        <input
          type="password"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor" 
          id="password"
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="password"
        >
          Password
        </label>
      </div>
      <div className="relative z-0 w-full mb-8">
        <input
          type="password"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor" 
          id="confirm-password"
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
      </div>
      <button className="text-white py-2 bg-btnBg rounded-md font-medium">
        Sign Up
      </button>
    </form>
  );
};
export default EmailRegister;
