import { useQuery } from "@tanstack/react-query";
import usePersonalInfo from "../functions/usePersonalInfo";
import { ProfileData } from "../../types/types";


const usePersonalInfoQuery = (userId: string) => {
  const { getPersonalInfoById } = usePersonalInfo();
  const { data: personalInfo, status, error } = useQuery<ProfileData, Error>({
    queryKey: ["getPersonalInfoById", userId],
    queryFn: () => getPersonalInfoById(userId),
    enabled: userId !== undefined
  });
  
  return {
    personalInfo,
    status,
    error,
  };
};
export default usePersonalInfoQuery;
