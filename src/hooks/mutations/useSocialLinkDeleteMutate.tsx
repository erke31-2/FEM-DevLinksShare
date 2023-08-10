import { useMutation, useQueryClient } from "@tanstack/react-query"
import useSocialLinks from "../functions/useSocialLinks"

const useSocialLinkDeleteMutate = (linkId: string, userId: string) => {
    const queryClient = useQueryClient();
    const {deleteSocialLink} = useSocialLinks();
    const mutation = useMutation<void, Error, string>({
        mutationKey: ["deletingSocialLinkById", linkId],
        mutationFn: (linkId) => deleteSocialLink(linkId),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ["getUserSocialLinks", userId]})
    })
  return {
    mutation
  }
}
export default useSocialLinkDeleteMutate