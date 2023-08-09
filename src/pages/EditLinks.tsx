import Heading from "../components/Heading";
import LinkInput from "../components/LinkInput";

const EditLinks = () => {
  return (
    <>
      <Heading title="Customize your links">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </Heading>
      <div className="w-full flex flex-col gap-y-3 px-8 justify-center h-[580px] mt-3">
        <button className="border py-2 rounded-md border-btnBg text-btnBg font-semibold mt-4">
          + Add new link
        </button>
        <div className="flex flex-col gap-y-5 overflow-y-auto py-4">
          <LinkInput />
          <LinkInput />
        </div>
      </div>
      <div className="w-full border-t border-t-gray-300 px-8 pt-3 flex md:justify-end justify-center">
        <button
          className="w-full md:w-fit py-2 px-6 bg-btnBg rounded-lg text-white font-medium"
          type="submit"
        >
          Save
        </button>
      </div>
    </>
  );
};
export default EditLinks;
