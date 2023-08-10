import { ZodType, z } from "zod";
import { UpsetProfileData, SocialLinksData } from "./types";

export const UpsertProfileFormData: ZodType<UpsetProfileData> = z.object({
    id: z.string().nonempty(),
    first_name: z.string().nonempty("Please Enter Your First Name!").min(3, "First Name should be at least 3 characters"),
    last_name: z.string().nonempty("Please Enter Your Last Name!").min(3, "Last Name should be at le"),
    email_address: z.string().nonempty("Please Enter Your Email Address!").email("Please Enter Valid Email Address"),
    avatar_url: z.string().optional(),
    updated_at: z.string().optional(),
})


export const UpsertSocialLinkFormData: ZodType<SocialLinksData> = z.object({
    id: z.string().nonempty(),
    name: z.string().nonempty("Select Social Platform"),
    url: z.string().nonempty("Enter Your Social Link Url").url(),
    user_id: z.string().nonempty(),
    description: z.string(),
    created_at: z.string()
})