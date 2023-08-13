import { useMutation } from "@tanstack/react-query"
import useAuth from "../functions/useAuth"
import { SignUpType } from "../../types/schema";

const useSignUpMutation = () => {
    const {signUpWithEmail} = useAuth();
    const { mutate,error, isLoading } = useMutation<void, Error, SignUpType>({
        mutationKey: ["SingUpWithEmail"],
        mutationFn: (formData) => signUpWithEmail(formData),
        onSuccess: () => console.log("Success"),
    })
  return {
    mutate, error, isLoading
  }
}
export default useSignUpMutation