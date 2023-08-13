import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSocialLinks from "../functions/useSocialLinks";
import { SocialLinksData } from "../../types/types";
import { toast } from "react-toastify";

const useSocialLinkMutate = (userId: string, successFn: () => void) => {
  const queryClient = useQueryClient();
  const { upsertSocialLink } = useSocialLinks();
  const mutation = useMutation<void, Error, SocialLinksData>({
    mutationKey: ["upsertingSocialLink"],
    mutationFn: (formData) => upsertSocialLink(formData),
    onSuccess: () => {
        successFn();
        queryClient.invalidateQueries({queryKey: ["getUserSocialLinks", userId]});
        toast.success("New Social Link Added!")
      },
    onError: (error) => toast.error(error.message)
});
  return {
    mutation,
  };
};
export default useSocialLinkMutate;
