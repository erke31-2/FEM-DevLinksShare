import { useMutation } from "@tanstack/react-query"
import usePersonalInfo from "../functions/usePersonalInfo"
import { toast } from "react-toastify"

interface uploadImageParams{
    file: File 
    userId: string
}

const useUploadImageMutate = () => {
    const {uploadImage} = usePersonalInfo();
    const {mutateAsync, isLoading} = useMutation<string, Error, uploadImageParams>({
      mutationKey: ["uploadImage"],
      mutationFn: ({file, userId}) => uploadImage(file, userId),
      onSuccess: () => {
        toast.success("Click Save to save changes!", {position: "top-center"})
      },
      onError: (error) => toast.error(error.message, {position: "top-center"})
    })
  return {
    mutateAsync, isLoading
  }
}
export default useUploadImageMutate