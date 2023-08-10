import { useQuery } from "@tanstack/react-query"
import useSocialLinks from "../functions/useSocialLinks"

const useSocialLinksQuery = (userId: string) => {
    const {getSocialLinks} = useSocialLinks();
    const {data: socialLinks} = useQuery({
        queryKey: ["getUserSocialLinks", userId],
        queryFn: () => getSocialLinks(userId),
        enabled: userId !== undefined
    })
  return {
    socialLinks
  }
}
export default useSocialLinksQuery