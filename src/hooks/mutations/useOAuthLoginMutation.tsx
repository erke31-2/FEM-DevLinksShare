import { useMutation } from "@tanstack/react-query";
import useAuth from "../functions/useAuth"
import { Provider } from "@supabase/supabase-js";

const useOAuthLoginMutation = () => {
    const {logInWithProvider} = useAuth();
    const mutation = useMutation<void, Error, Provider>({
        mutationKey: ["logInWithProvider"],
        mutationFn: (provider) => logInWithProvider(provider),
        onSuccess: () => console.log("Success"),
        onError: (error) => console.log(error.message)
    })
  return {
    mutation
  }
}
export default useOAuthLoginMutation