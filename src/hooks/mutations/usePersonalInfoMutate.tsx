import { useMutation, useQueryClient } from "@tanstack/react-query"
import usePersonalInfo from "../functions/usePersonalInfo"
import { UpsetProfileData } from "../../types/types"

const usePersonalInfoMutate = (userId: string) => {
    const queryClient = useQueryClient();
    const {upsertPersonalInfo} = usePersonalInfo()
    const mutation = useMutation<void, Error, UpsetProfileData>({
        mutationKey: ["upsertingPersonalInfo"],
        mutationFn: (formData) => upsertPersonalInfo(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["getPersonalInfoById", userId]});  
        },
        onError: (error) => {
            console.log(error.message);        
        }
    })
  return {
    mutation
  }
}
export default usePersonalInfoMutate