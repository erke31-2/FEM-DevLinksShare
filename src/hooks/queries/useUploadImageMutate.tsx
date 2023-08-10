import { useMutation } from "@tanstack/react-query"
import usePersonalInfo from "../functions/usePersonalInfo"

interface uploadImageParams{
    e:  React.ChangeEvent<HTMLInputElement>,
    userId: string
}

const useUploadImageMutate = () => {
    const {uploadImage} = usePersonalInfo();
    const {mutateAsync, isLoading} = useMutation<string | undefined, Error, uploadImageParams>({
        mutationKey: ["uploadImage"],
        mutationFn: ({e, userId}) => uploadImage(e, userId)
    })
  return {
    mutateAsync, isLoading
  }
}
export default useUploadImageMutate