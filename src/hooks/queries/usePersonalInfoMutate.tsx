import { useMutation, useQueryClient } from "@tanstack/react-query"
import usePersonalInfo from "../usePersonalInfo"
import { UpsetProfileData } from "../../types/types"

const usePersonalInfoMutate = () => {
    const queryClient = useQueryClient();
    const {upsertPersonalInfo} = usePersonalInfo()
    const mutation = useMutation<void, Error, UpsetProfileData>({
        mutationKey: ["upsertPersonalInfo"],
        mutationFn: (formData) => upsertPersonalInfo(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["getPersonalInfoById"]})
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