import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, SignUpType } from "../../types/schema";
import useSignUpMutation from "../../hooks/mutations/useSignUpMutation";
import ErrorMsg from "../ErrorMsg";

const EmailRegister = () => {
  const {mutate, error: signUpError, isLoading} = useSignUpMutation();
  const {handleSubmit, register, formState:{errors}} = useForm<SignUpType>({resolver: zodResolver(SignUpSchema)})

  const onSubmit: SubmitHandler<SignUpType> = (formData) => {
    mutate(formData);
  }

  return (
    <form className="w-[75%] p-6 flex flex-col gap-y-5 relative" onSubmit={handleSubmit(onSubmit)}>
      {signUpError && <span className="absolute z-20 -top-7 rounded-sm text-center left-6 right-6 text-white bg-red-500 py-1 mx-auto">{signUpError.message} !</span>}
      <div className="relative z-0 w-full mb-8">
        <input
          type="email"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor"
          id="email"
          {...register("email")}
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="email"
        >
          Email
        </label>
        {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
      </div>
      <div className="relative z-0 w-full mb-8">
        <input
          type="password"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor" 
          id="password"
          autoComplete="on"
          {...register("password")}
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="password"
        >
          Password
        </label>
        {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
      </div>
      <div className="relative z-0 w-full mb-8">
        <input
          type="password"
          placeholder=" "
          className="floatInput pt-2 pb-1 px-1 block w-full bg-transparent border-b-2 border-gray-400 outline-none focus:border-primaryColor" 
          id="confirm-password"
          autoComplete="on"
          {...register("password_confirmation")}
        />
        <label
          className="floatLabel absolute duration-300 top-3 left-1 -z-1 origin-0 text-secondaryColor"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        {errors.password_confirmation && <ErrorMsg>{errors.password_confirmation.message}</ErrorMsg>}
      </div>
      <button
          className="text-white py-2 bg-btnBg rounded-md font-medium flex justify-center items-center h-10"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <div className="w-5 h-5 rounded-full animate-spin border-2 border-slate-400"/> : "Sign Up"} 
        </button>
    </form>
  );
};
export default EmailRegister;
