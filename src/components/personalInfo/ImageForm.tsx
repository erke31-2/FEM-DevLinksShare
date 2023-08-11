import { FaImage } from "react-icons/fa";
import useUploadImageMutate from "../../hooks/queries/useUploadImageMutate";
import { getImageUrl } from "../../supabase/supabase";
import { useRef, useState } from "react";
import { ImageSchema, ImageSchemaType } from "../../types/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


interface ImageFormProps {
  userId: string;
  selectedImgUrl: string | undefined;
  setSelectedImgUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ImageForm: React.FC<ImageFormProps> = ({ userId, setSelectedImgUrl, selectedImgUrl }) => {
  const [uploadImage, setUploadImage] = useState<string | undefined>()
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { mutateAsync, isLoading } = useUploadImageMutate();
  const {handleSubmit: handleImageSubmit, formState:{errors}, setValue} = useForm<ImageSchemaType>({resolver: zodResolver(ImageSchema)})
  const handleImageInput = () => {
    if (inputRef) {
      inputRef.current?.click();
    }
  };
  
  const handleImageUpload:SubmitHandler<ImageSchemaType> = async (imageForm) => {
      const path = await mutateAsync({userId, file:imageForm.image});
      const url = getImageUrl(path)
      setSelectedImgUrl(url);
      handleRemoveImage()
  };

  const handleRemoveImage = () => {
    if(uploadImage){
      URL.revokeObjectURL(uploadImage);
      setUploadImage(undefined)
    }
  }

  return (
    <div className="bg-cardBg rounded-xl mx-5 px-5 py-3 flex flex-col items-start gap-y-4 text-secondaryColor shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="w-full flex items-center justify-between md:w-[30%] md:flex-col md:items-start">
        <label htmlFor="image">Profile picture</label>
        {errors.image && <small className="text-red-600">{errors.image.message}</small>}
      </div>
      <div className="md:w-[70%] md:flex md:items-center md:gap-x-3">
        
        <div
          className="relative px-2 py-4 flex flex-col items-center justify-center gap-2  border border-dashed border-secondaryColor hover:border-btnBg rounded-md text-secondaryColor hover:text-btnBg cursor-pointer w-[140px] h-[140px]"
          onClick={handleImageInput}
        >
          <div className="absolute w-full h-full z-20 flex flex-col justify-center items-center opacity-0 hover:opacity-70 hover:bg-gray-300 rounded-md">
            <FaImage size={23} />
            <span>Choose Image</span>
          </div>
          <input
            type="file"
            id="image"
            ref={inputRef}
            className="hidden"
            disabled={isLoading}
            onChange={(e) => {
              if(e.target.files){
                const file = e.target.files[0]
                setValue("image", file)
                setUploadImage(URL.createObjectURL(file))
              }
            }}
          />
          {!uploadImage && selectedImgUrl && (
            <div className="absolute w-full h-full z-10 rounded-md">
              <img
                src={selectedImgUrl}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          )}
           {uploadImage && (
            <div className="absolute w-full h-full z-10 rounded-md">
              <img
                src={uploadImage}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          )}
          {isLoading && 
            <div className="absolute w-full h-full z-20 flex justify-center items-center bg-btnBg opacity-50 rounded-md">
              <div className="animate-spin w-5 h-5 rounded-full border-2 border-b-btnBg" />
            </div>
          }
        </div>
        <div className="md:w-[60%] flex md:flex-col gap-5 pt-3 justify-center items-center" >
          <small className="font-semibold">
            Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
          </small>
        {uploadImage &&  <div className="w-full flex flex-col items-center justify-between gap-2 text-sm md:flex-row">  
          <button className="bg-btnBg text-white px-4  py-2 rounded-md font-semibold hover:opacity-75" onClick={handleImageSubmit(handleImageUpload)} disabled={isLoading}>Upload</button>
          <button className="border border-btnBg px-3 py-2 rounded-md hover:text-btnBg font-semibold" onClick={handleRemoveImage}>Remove</button>
        </div>}
       
        </div>
      </div>
    </div>
  );
};
export default ImageForm;
