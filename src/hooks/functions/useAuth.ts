import { Provider } from "@supabase/supabase-js";
import supabase from "../../supabase/supabase";
import { SignInType, SignUpType } from "../../types/schema";
import config from "../../config";


const signUpWithEmail = async (formData: SignUpType) => {
  const {error} = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });
  if(error){
    throw new Error(error.message)
  }
}

const logInWithPassword = async (formData: SignInType) => {
  const {error} = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
  })
  if(error){
    throw new Error(error.message)  
  }
}


const logInWithProvider = async (provider: Provider) => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${config.baseUrl}/edit`
    } 
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
    signUpWithEmail,
    logInWithPassword,
    logInWithProvider,
    logOut,
  };
};

export default useAuth;
