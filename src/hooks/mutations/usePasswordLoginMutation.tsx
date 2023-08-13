import { useMutation } from "@tanstack/react-query"
import useAuth from "../functions/useAuth"
import { SignInType } from "../../types/schema";
import { toast } from "react-toastify";

const usePasswordLoginMutation = () => {
    const {logInWithPassword} = useAuth();
    const {mutate, isLoading, error: LoginError} = useMutation<void, Error, SignInType>({
        mutationKey: ["logInWithPassword"],
        mutationFn: (formData) => logInWithPassword(formData),
        onSuccess: () => toast.success("Welcome!", {position: "top-center"}),
    })
  return {
    mutate, isLoading, LoginError
  }
}
export default usePasswordLoginMutation