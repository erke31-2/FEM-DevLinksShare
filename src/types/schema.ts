import { ZodType, z } from "zod";
import { UpsetProfileData } from "./types";

export const UpsertProfileFormData: ZodType<UpsetProfileData> = z.object({
    id: z.string().nonempty(),
    first_name: z.string().nonempty("Please Enter Your First Name!").min(3, "First Name should be at least 3 characters"),
    last_name: z.string().nonempty("Please Enter Your Last Name!").min(3, "Last Name should be at le"),
    email_address: z.string().nonempty("Please Enter Your Email Address!").email("Please Enter Valid Email Address"),
    avatar_url: z.string().optional(),
    updated_at: z.string().optional(),
})