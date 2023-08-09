import { FaImage } from "react-icons/fa";
import useUploadImageMutate from "../hooks/queries/useUploadImageMutate";
import { getImageUrl } from "../supabase/supabase";
import { useRef } from "react";

interface ImageFormProps {
  userId: string;
  selectedImgUrl?: string;
  setSelectedImgUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ImageForm: React.FC<ImageFormProps> = ({ userId, setSelectedImgUrl, selectedImgUrl }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { mutateAsync, isLoading } = useUploadImageMutate();

  const handleImageInput = () => {
    if(inputRef){
      inputRef.current?.click();
    }
  }



  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const path = await mutateAsync({ e, userId });
    if (path) {
      const url = getImageUrl(path);
      setSelectedImgUrl(url);
    }
  };

  return (
    <div className="bg-cardBg rounded-xl mx-5 px-5 py-3 flex flex-col items-start gap-y-4 text-secondaryColor shadow-sm md:flex-row md:items-center md:justify-between">
      <label htmlFor="image">Profile picture</label>
      <div className="md:w-[70%] md:flex md:items-center md:pr-8 md:gap-x-3">
        <div className="relative px-2 py-4 flex flex-col items-center justify-center gap-2  border border-dashed border-secondaryColor hover:border-btnBg rounded-md text-secondaryColor hover:text-btnBg cursor-pointer w-[140px] h-[140px]" onClick={handleImageInput}>
          <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center opacity-0 hover:opacity-70 hover:bg-gray-300 rounded-md">
            <FaImage size={23} />
            <span>Choose Image</span>
          </div>
          <input
            type="file"
            id="image"
            ref={inputRef}
            className="hidden"
            onChange={handleImageUpload}
            disabled={isLoading}
          />
          {selectedImgUrl && (
            <div className="absolute w-full h-full z-10 rounded-md">
              <img
                src={selectedImgUrl}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          )}
        </div>
        <small className="md:w-[60%]">
          Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
        </small>
      </div>
    </div>
  );
};
export default ImageForm;
