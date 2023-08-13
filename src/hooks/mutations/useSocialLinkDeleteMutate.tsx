import { useMutation, useQueryClient } from "@tanstack/react-query"
import useSocialLinks from "../functions/useSocialLinks"
import { toast } from "react-toastify";

const useSocialLinkDeleteMutate = (linkId: string, userId: string) => {
    const queryClient = useQueryClient();
    const {deleteSocialLink} = useSocialLinks();
    const mutation = useMutation<void, Error, string>({
        mutationKey: ["deletingSocialLinkById", linkId],
        mutationFn: (linkId) => deleteSocialLink(linkId),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["getUserSocialLinks", userId]});
          toast.success("Removed Successfully!")
        },
        onError: (error) => toast.error(error.message)
    })
  return {
    mutation
  }
}
export default useSocialLinkDeleteMutate