import { useQuery } from "@tanstack/react-query"
import usePersonalInfo from "../functions/usePersonalInfo"
import { ProfileData } from "../../types/types";

const usePersonalInfoByUserName = (username: string) => {
    const {getPersonalInfoByUserName} = usePersonalInfo();
    const {data, status, error} = useQuery<ProfileData, Error>({
        queryKey: ["getPersonalInfoByUserName", username],
        queryFn: () => getPersonalInfoByUserName(username)
    })
  return {
    data, status, error
  }
}
export default usePersonalInfoByUserName