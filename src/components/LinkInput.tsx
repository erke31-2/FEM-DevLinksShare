import { FaGithub, FaLink } from "react-icons/fa";

const LinkInput = () => {
  return (
    <div className="w-full bg-cardBg p-4 rounded-xl text-secondaryColor flex flex-col gap-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">= Link #1</h3>
        <button className="text-gray-500">Remove</button>
      </div>
      <div>
        <label htmlFor="platform" className="text-sm font-medium">
          Platform
        </label>
        <div className="flex items-center border rounded-md px-3 py-[10px] gap-x-3 border-inputBorder">
          <FaGithub size={15}/>
          GitHub
        </div>
      </div>
      <div>
        <label htmlFor="link" className="text-sm font-medium">
          Link
        </label>
        <div className="flex items-center border rounded-md pl-3 py-[10px] gap-x-3 border-inputBorder overflow-auto">
          <button>
            <FaLink />
          </button>
          https://imagecolorpicker.com/en
        </div>
      </div>
    </div>
  );
};
export default LinkInput;
