import supabase from "../supabase/supabase";
import { ProfileData, UpsetProfileData } from "../types/types";

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

const usePersonalInfo = () => {
  return {
    getPersonalInfo,
    upsertPersonalInfo,
  };
};

export default usePersonalInfo;
