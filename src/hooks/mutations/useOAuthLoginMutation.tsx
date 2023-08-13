import { useMutation } from "@tanstack/react-query";
import useAuth from "../functions/useAuth"
import { Provider } from "@supabase/supabase-js";
import { toast } from "react-toastify";

const useOAuthLoginMutation = () => {
    const {logInWithProvider} = useAuth();
    const mutation = useMutation<void, Error, Provider>({
        mutationKey: ["logInWithProvider"],
        mutationFn: (provider) => logInWithProvider(provider),
        onSuccess: () => toast.success("Welcome!", {position: "top-center"}),
        onError: (error) => toast.error(error.message, {position: "top-center"}) 
    })
  return {
    mutation
  }
}
export default useOAuthLoginMutation