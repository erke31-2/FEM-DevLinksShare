import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;


export const getImageUrl = (filePath: string) => {
    return `${supabaseUrl}/storage/v1/object/public/avatars/${filePath}`
}


