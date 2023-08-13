import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { SignInSchema, SignInType } from "../../types/schema";
import usePasswordLoginMutation from "../../hooks/mutations/usePasswordLoginMutation";
import ErrorMsg from "../ErrorMsg";

const EmailLogin = () => {
  const { mutation } = usePasswordLoginMutation();
  const { handleSubmit, register, formState: { errors } } = useForm<SignInType>({ resolver: zodResolver(SignInSchema) });

  const onSubmit: SubmitHandler<SignInType> = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <form
      className="w-[75%] p-6 flex flex-col gap-y-5 relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      {mutation.error && <span className="text-center bg-red-500 text-white py-1 rounded-sm absolute -top-7 left-6 right-6">{mutation.error.message} !</span>}
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
      <div className="relative z-0 w-full mb-2">
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
      <div className="flex justify-end mt-5 flex-col gap-y-4">
        <Link to="/guest/register" className="text-sm underline text-slate-700 text-right">
          Forgot Password?
        </Link>
        <button
          className="text-white py-2 bg-btnBg rounded-md font-medium"
          type="submit"
          disabled={mutation.isLoading}
        >
          Log in
        </button>
      </div>
    </form>
  );
};
export default EmailLogin;
