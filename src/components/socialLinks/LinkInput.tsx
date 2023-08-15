import { FaLink } from "react-icons/fa";
import ReactSelect, { StylesConfig, GroupBase } from "react-select";
import { options, selectOption } from "../../constants/linkTabs";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { SocialLinksData } from "../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpsertSocialLinkFormData } from "../../types/schema";
import { useOutletContext } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import useSocialLinkMutate from "../../hooks/mutations/useSocialLinkMutate";
import LoadingLayout from "../OverlayLoading";

interface LinkInputProps {
  defaultFormData: SocialLinksData;
  removeAddedForm: (id: string) => void;
}

const LinkInput: React.FC<LinkInputProps> = ({ defaultFormData, removeAddedForm,}) => {
  const handleRemoveForm = () => {
    removeAddedForm(defaultFormData.id);
  };
  const user = useOutletContext<User>();
  const { mutation } = useSocialLinkMutate(user.id, handleRemoveForm);
  const { handleSubmit, control, register, formState: { errors } } = useForm<SocialLinksData>({
    resolver: zodResolver(UpsertSocialLinkFormData),
    defaultValues: defaultFormData,
  });
  const { field: linkName, fieldState: linkNameState } = useController({
    name: "name",
    control,
  });

  const selectStyles: StylesConfig<selectOption, false, GroupBase<selectOption>> | undefined = {
    control: (base) => ({
      ...base,
      paddingBlock: "5px",
      borderRadius: "6px",
      cursor: "pointer",
    }),
    option: (base) => ({ ...base, cursor: "pointer" }),
  };

  const onSubmit: SubmitHandler<SocialLinksData> = (formData) => {
    formData.created_at = new Date().toISOString();
    mutation.mutate(formData);
  };
  
  return (
    <>
    {mutation.isLoading && <LoadingLayout />}
    <div className="w-full bg-cardBg px-4 py-3 rounded-xl text-secondaryColor flex flex-col gap-y-3">
      <div className="flex justify-between items-center px-1">
        <h3 className="font-semibold">= Link</h3>
        <button
          className="text-gray-500 hover:text-slate-400 font-semibold"
          onClick={handleRemoveForm}
        >
          Remove
        </button>
      </div>
      <div>
        <div className="text-sm font-medium flex items-center justify-between px-1">
          <label htmlFor="platform">Platform*</label>
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <ReactSelect
          placeholder="Select Your Social Platform..."
          styles={selectStyles}
          options={options}
          isClearable
          getOptionLabel={(option) => {
            return (
              <div className="flex items-center gap-x-2">
                {<option.labelIcon size={20} />}{" "}
                <span className="font-semibold">{option.label}</span>
              </div>
            ) as unknown as string;
          }}
          value={
            linkName.value
              ? options.find((v) => v.value === linkName.value)
              : null
          }
          onChange={(option) =>
            linkName.onChange(option ? option?.value : null)
          }
          {...linkNameState}
        />
      </div>
      <div>
        <div className="font-medium text-sm flex items-center justify-between px-1">
          <label htmlFor="url" className="text-sm font-medium">
            Link*
          </label>
          {errors.url && <span className="text-red-600">{errors.url.message}</span>}
        </div>
        <div className="flex items-center border rounded-md px-3 py-[11px] gap-x-3 border-inputBorder overflow-auto">
          <button>
            <FaLink />
          </button>
          <input
            type="text"
            id="url"
            className="cursor-pointer w-full outline-none bg-cardBg"
            {...register("url")}
          />
        </div>
      </div>
      <div>
        <label htmlFor="description" className="text-sm font-medium">
          Description (optional)
        </label>
        <div className="flex items-center border rounded-md px-3 py-[11px] border-inputBorder overflow-auto">
          <input
            type="text"
            id="description"
            placeholder="@eg:Follow Me On Twitter"
            className="cursor-pointer w-full outline-none bg-cardBg"
            {...register("description")}
          />
        </div>
      </div>
      <div className="w-full  flex md:justify-end justify-center">
        <button
          className="w-full md:w-fit py-2 px-6 bg-btnBg rounded-lg text-white font-medium hover:bg-opacity-90 hover:text-gray-400"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Save
        </button>
      </div>
    </div>
    </>
  );
};
export default LinkInput;
