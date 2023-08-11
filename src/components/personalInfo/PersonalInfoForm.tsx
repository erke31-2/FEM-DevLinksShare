import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { UpsertProfileFormData } from "../../types/schema";
import { UpsetProfileData } from "../../types/types";
import usePersonalInfoMutate from "../../hooks/mutations/usePersonalInfoMutate";
import ErrorMsg from "../ErrorMsg";
import ImageForm from "./ImageForm";
import { useState } from "react";

interface PersonalInfoFormProps {
  currentPersonalInfo: UpsetProfileData;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ currentPersonalInfo }) => {
  const [selectedImgUrl, setSelectedImgUrl] = useState<string | undefined>(currentPersonalInfo.avatar_url || undefined);
  const { handleSubmit, register, formState: { errors } } = useForm<UpsetProfileData>({
    resolver: zodResolver(UpsertProfileFormData),
    defaultValues: currentPersonalInfo,
  });

  const { mutation } = usePersonalInfoMutate(currentPersonalInfo.id);

  const onSubmit: SubmitHandler<UpsetProfileData> = (formData) => {
    formData.updated_at = new Date().toUTCString();
    formData.avatar_url = selectedImgUrl
    mutation.mutate(formData);
  };
  
  
  return (
    <>
    {mutation.isLoading && <div className="fixed top-0 left-0 w-full h-full bg-gray-600 opacity-80 flex justify-center items-center z-20">
        <div className="w-10 h-10 rounded-full border-2 border-t-cardBg animate-spin"/>
      </div>}
    <section className="h-[650px] flex flex-col md:justify-around gap-y-4 pt-4">
      <ImageForm userId={currentPersonalInfo.id} 
          selectedImgUrl={selectedImgUrl} 
            setSelectedImgUrl={setSelectedImgUrl}
          />  
      <form className="h-[60%] flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-cardBg rounded-xl px-5 mx-5 py-3 flex flex-col gap-y-5 md:gap-y-8 md:py-6 text-secondaryColor shadow-sm">
          <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between relative">
            <label htmlFor="firstName">First name*</label>
            <div className="md:w-[70%] relative">
              <input
                type="text"
                id="firstName"
                className={`${ errors.first_name ? "border-red-600" : "border-inputBorder" } px-4 py-2 rounded-md border outline-none focus:border-btnBg  focus:drop-shadow-inputShadow w-full`}
                placeholder="eg. Yang"
                {...register("first_name")}
              />
              {errors.first_name && (
                <ErrorMsg>{errors.first_name.message}</ErrorMsg>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between relative">
            <label htmlFor="lastName">Last name*</label>
            <div className="md:w-[70%] relative">
              <input
                type="text"
                id="lastName"
                className={`${ errors.last_name ? "border-red-600" : "border-inputBorder" } px-4 py-2 rounded-md border outline-none focus:border-btnBg  focus:drop-shadow-inputShadow w-full`}
                placeholder="eg. Wenli"
                {...register("last_name")}
              />
              {errors.last_name && (
                <ErrorMsg>{errors.last_name.message}</ErrorMsg>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center md:gap-x-3 md:justify-between relative">
            <label htmlFor="email">Email*</label>
            <div className="md:w-[70%] relative">
              <input
                type="email"
                id="email"
                className={`${ errors.email_address ? "border-red-600" : "border-inputBorder" } px-4 py-2 rounded-md border outline-none focus:border-btnBg  focus:drop-shadow-inputShadow w-full`}
                placeholder="eg. yangwenli@gmail.com"
                {...register("email_address")}
              />
              {errors.email_address && (
                <ErrorMsg>{errors.email_address.message}</ErrorMsg>
              )}
            </div>
          </div>
        </div>
        <div className="w-full border-t pt-4 md:pt-8 border-t-gray-300 px-8 flex md:justify-end justify-center">
          <button
            className="w-full md:w-fit py-2 px-8 bg-btnBg rounded-lg text-white font-medium````"
            type="submit">
            Save
          </button>
        </div>
      </form>
    </section>
    </>
  );
};
export default PersonalInfoForm;
