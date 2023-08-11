import { useMutation } from "@tanstack/react-query"
import usePersonalInfo from "../functions/usePersonalInfo"

interface uploadImageParams{
    file: File 
    userId: string
}

const useUploadImageMutate = () => {
    const {uploadImage} = usePersonalInfo();
    const {mutateAsync, isLoading} = useMutation<string, Error, uploadImageParams>({
      mutationKey: ["uploadImage"],
      mutationFn: ({file, userId}) => uploadImage(file, userId)
    })
  return {
    mutateAsync, isLoading
  }
}
export default useUploadImageMutate