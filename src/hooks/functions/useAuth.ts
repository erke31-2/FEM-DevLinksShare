import { Provider } from "@supabase/supabase-js";
import supabase from "../../supabase/supabase";

const logInWithProvider = async (provider: Provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: "http://localhost:3000",
    },
  });
  if (error) {
    throw new Error(error.message);
  }
};

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
};


const useAuth = () => {
  return {
    logInWithProvider,
    logOut,
  };
};

export default useAuth;
