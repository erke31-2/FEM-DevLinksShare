import { useMutation, useQueryClient } from "@tanstack/react-query"
import usePersonalInfo from "../functions/usePersonalInfo"
import { UpsetProfileData } from "../../types/types"
import { toast } from "react-toastify";

const usePersonalInfoMutate = (userId: string) => {
    const queryClient = useQueryClient();
    const {upsertPersonalInfo} = usePersonalInfo()
    const mutation = useMutation<void, Error, UpsetProfileData>({
        mutationKey: ["upsertingPersonalInfo"],
        mutationFn: (formData) => upsertPersonalInfo(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["getPersonalInfoById", userId]}); 
            toast.success("Saved Changes Successfully!") 
        },
        onError: (error) => {
            toast.error(error.message)    
        }
    })
  return {
    mutation
  }
}
export default usePersonalInfoMutate