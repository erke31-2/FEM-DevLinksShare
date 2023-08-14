import supabase from "../../supabase/supabase";
import { SocialLinksData } from "../../types/types";

const getSocialLinks = async (userId: string): Promise<SocialLinksData[]> => {
  const { data, error } = await supabase
    .from("social_links")
    .select()
    .eq("user_id", userId)
    .order("created_at", {ascending: true});
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

const upsertSocialLink = async (formData: SocialLinksData) => {
  const { error } = await supabase
    .from("social_links")
    .upsert(formData)
    .select();
  if (error) {
    throw new Error(error.message);
  }
};

const deleteSocialLink = async (id: string) => {
  const { error } = await supabase
    .from("social_links")
    .delete()
    .eq("id", id);
  if(error){
    throw new Error(error.message)
  }
};

const useSocialLinks = () => {
  return {
    getSocialLinks,
    upsertSocialLink,
    deleteSocialLink
  };
};
export default useSocialLinks;
