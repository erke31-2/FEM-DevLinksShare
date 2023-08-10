import { Database } from "./database.types";

export type ProfileData = Database['public']['Tables']['profiles']['Row']

export type UpsetProfileData = Database['public']['Tables']['profiles']['Insert']

export type SocialLinksData = Database['public']['Tables']['social_links']['Row']