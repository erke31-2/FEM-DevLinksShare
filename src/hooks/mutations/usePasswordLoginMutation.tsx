import { useMutation } from "@tanstack/react-query"
import useAuth from "../functions/useAuth"
import { SignInType } from "../../types/schema";

const usePasswordLoginMutation = () => {
    const {logInWithPassword} = useAuth();
    const mutation = useMutation<void, Error, SignInType>({
        mutationKey: ["logInWithPassword"],
        mutationFn: (formData) => logInWithPassword(formData),
        onSuccess: () => console.log("Success")
    })
  return {
    mutation
  }
}
export default usePasswordLoginMutation