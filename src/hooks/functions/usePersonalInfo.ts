import supabase from "../../supabase/supabase";
import { ProfileData, UpsetProfileData } from "../../types/types";
import {v4 as uuidv4} from "uuid"
const getPersonalInfo = async (userId: string): Promise<ProfileData> => {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", userId)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const upsertPersonalInfo = async (formData: UpsetProfileData) => {
  const { error } = await supabase.from("profiles").upsert(formData).select();
  if (error) {
    throw new Error(error.message);
  }
};

const uploadImage = async ( e: React.ChangeEvent<HTMLInputElement>, userId: string ) => {
  const uniqueId = uuidv4();
  const file = e.target.files?.[0];
  if (file) {
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`${userId}/${uniqueId}`, file);
    if (error) throw new Error(error.message);
    return data.path; 
  }
};

const usePersonalInfo = () => {
  return {
    getPersonalInfo,
    upsertPersonalInfo,
    uploadImage,
  };
};

export default usePersonalInfo;