import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSocialLinks from "../functions/useSocialLinks";
import { SocialLinksData } from "../../types/types";

const useSocialLinkMutate = (userId: string, successFn: () => void) => {
  const queryClient = useQueryClient();
  const { upsertSocialLink } = useSocialLinks();
  const mutation = useMutation<void, Error, SocialLinksData>({
    mutationKey: ["upsertingSocialLink"],
    mutationFn: (formData) => upsertSocialLink(formData),
    onSuccess: () => {
        successFn();
        queryClient.invalidateQueries({queryKey: ["getUserSocialLinks", userId]})
}
});
  return {
    mutation,
  };
};
export default useSocialLinkMutate;
