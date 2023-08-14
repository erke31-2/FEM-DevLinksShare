import { useQuery } from "@tanstack/react-query";
import useSocialLinks from "../functions/useSocialLinks";

const useSocialLinksQuery = (userId?: string) => {
  const { getSocialLinks } = useSocialLinks();
  const { data: socialLinks, status } = useQuery({
    queryKey: ["getUserSocialLinks", userId],
    queryFn: () => getSocialLinks(userId!),
    enabled: userId !== undefined
  });
  return {
    socialLinks,
    status,
  };
};
export default useSocialLinksQuery;
