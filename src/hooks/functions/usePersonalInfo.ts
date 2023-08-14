import supabase from "../../supabase/supabase";
import { ProfileData, UpsetProfileData } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
const getPersonalInfoById = async (userId: string): Promise<ProfileData> => {
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

const getPersonalInfoByUserName = async ( username: string): Promise<ProfileData> => {
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("user_name", username)
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const upsertPersonalInfo = async (formData: UpsetProfileData) => {
  const { error } = await supabase.from("profiles").upsert(formData).select();
  if (error) {
    if (error.code === "23505") {
      throw new Error("Username already existed!");
    }
    throw new Error(error.message);
  }
};

const uploadImage = async (file: File, userId: string) => {
  const uniqueId = uuidv4();
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`${userId}/${uniqueId}`, file);
  if (error) throw new Error(error.message);
  return data.path;
};

const usePersonalInfo = () => {
  return {
    getPersonalInfoById,
    getPersonalInfoByUserName,
    upsertPersonalInfo,
    uploadImage,
  };
};

export default usePersonalInfo;
