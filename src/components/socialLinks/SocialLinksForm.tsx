import { useState } from "react";
import LinkInput from "./LinkInput";
import { SocialLinksData } from "../../types/types";
import { useOutletContext } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import {v4 as uuidv4} from "uuid"
import useSocialLinksQuery from "../../hooks/queries/useSocialLinksQuery";
import LinkDisplay from "./LinkDisplay";


const SocialLinksForm = () => {
  const user = useOutletContext<User>();
  const {socialLinks} = useSocialLinksQuery(user.id)
  const [defaultFormData, setDefaultFormData] = useState<SocialLinksData[]>([])

  const addNewForm = () => {
    const newForm = {id: uuidv4(), name: "", description: "", url: "", user_id: user.id, created_at: ""}
    setDefaultFormData([newForm, ...defaultFormData])
  }

  const removeAddedForm = (id: string) => {
    const newFormData = defaultFormData.filter(formData => formData.id !== id);
    setDefaultFormData(newFormData);
  }


  return (
    <section className="h-[630px] flex flex-col justify-between gap-y-3 pt-6">
      <button className="border-2 py-2 rounded-md border-btnBg text-btnBg font-semibold hover:text-slate-500 hover:border-slate-500 mx-6" onClick={addNewForm}>
        + Add new link
      </button>
      <div className="h-[88%] flex flex-col justify-between overflow-auto">
        <div className="mx-5 flex flex-col gap-y-5">
         {defaultFormData && defaultFormData.map(formData => <LinkInput key={formData.id} defaultFormData={formData} removeAddedForm={removeAddedForm}/>) }
         {socialLinks && socialLinks.map((link, index) => <LinkDisplay key={link.id} socialLink={link} serial={index + 1}/>)}
        </div>
      </div>
    </section>
  );
};
export default SocialLinksForm;