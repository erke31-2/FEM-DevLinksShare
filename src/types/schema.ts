import { ZodType, z } from "zod";
import { UpsetProfileData, SocialLinksData } from "./types";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const MAX_FILE_SIZE = 1024 * 1024;

export const UpsertProfileFormData: ZodType<UpsetProfileData> = z.object({
  id: z.string().nonempty(),
  first_name: z
    .string()
    .nonempty("Please Enter Your First Name!")
    .min(3, "First Name should be at least 3 characters"),
  last_name: z
    .string()
    .nonempty("Please Enter Your Last Name!")
    .min(3, "Last Name should be at le"),
  email_address: z
    .string()
    .nonempty("Please Enter Your Email Address!")
    .email("Please Enter Valid Email Address"),
  avatar_url: z.string().optional(),
  updated_at: z.string().optional(),
});

export const ImageSchema = z.object({
  image: z
    .instanceof(File)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Not Supported Image Type!"
    )
    .refine((file) => file.size <= MAX_FILE_SIZE, "Exceeds Maximum Size!"),
});

export type ImageSchemaType = z.infer<typeof ImageSchema>;

export const UpsertSocialLinkFormData: ZodType<SocialLinksData> = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty("Select Social Platform"),
  url: z.string().nonempty("Enter Your Social Link Url").url(),
  user_id: z.string().nonempty(),
  description: z.string(),
  created_at: z.string(),
});

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .nonempty("Enter Your Email")
      .email("Invalid Email Address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Weak" })
      .refine((value) => /[A-Za-z]/.test(value), {
        message: "At least one letter",
      })
      .refine((value) => /\d/.test(value), {
        message: "At least one number",
      }),
    password_confirmation: z
      .string()
      .nonempty("Confirm Your Password!"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });


export type SignUpType = z.infer<typeof SignUpSchema>



export const SignInSchema = z.object({
  email: z
      .string()
      .nonempty("Enter Your Email")
      .email("Invalid Email Address"),
  password: z.string().nonempty("Enter Your Password") 
})

export type SignInType = z.infer<typeof SignInSchema>
