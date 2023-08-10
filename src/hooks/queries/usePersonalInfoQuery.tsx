import { useQuery } from "@tanstack/react-query";
import usePersonalInfo from "../functions/usePersonalInfo";


const usePersonalInfoQuery = (userId: string) => {
  const { getPersonalInfo } = usePersonalInfo();
  const { data: personalInfo, status, error } = useQuery({
    queryKey: ["getPersonalInfoById", userId],
    queryFn: () => getPersonalInfo(userId),
    enabled: userId !== undefined
  });
  
  return {
    personalInfo,
    status,
    error,
  };
};
export default usePersonalInfoQuery;
