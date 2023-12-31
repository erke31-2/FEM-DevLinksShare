import { useState } from "react";
import { linkTabs } from "../../constants/linkTabs";
import useSocialLinkDeleteMutate from "../../hooks/mutations/useSocialLinkDeleteMutate";
import { SocialLinksData } from "../../types/types";
import { FaTrashAlt, FaLink } from "react-icons/fa";
import OverlayLoading from "../OverlayLoading";
interface LinkDisplayProps {
  socialLink: SocialLinksData;
  serial: number;
}

const LinkDisplay: React.FC<LinkDisplayProps> = ({ socialLink, serial }) => {
  const [showModal, setShowModal] = useState(false);
  const { mutation } = useSocialLinkDeleteMutate(
    socialLink.id,
    socialLink.user_id
  );
  const matchedLink = linkTabs.find((link) => link.name === socialLink.name);
  if (!matchedLink) {
    return;
  }
  const { icon: Icon } = matchedLink;

  const handleDelete = (linkId: string) => {
    mutation.mutate(linkId);
  };

  return (
    <>
    {mutation.isLoading && <OverlayLoading />}
    <article className="w-full bg-cardBg px-4 py-3 rounded-xl text-secondaryColor flex flex-col gap-y-3">
      <div className="flex justify-between items-center px-1">
        <h3 className="font-semibold">= Link #{serial}</h3>
        <button
          className="text-gray-500 hover:text-red-600"
          onClick={() => setShowModal(true)}
        >
          <FaTrashAlt size={20} />
        </button>
      </div>
      <div>
        <h4  className="text-sm font-medium">
          Platform
        </h4>
        <div className="flex items-center border rounded-md px-3 py-[11px] gap-x-3 border-inputBorder overflow-x-auto">
          <Icon size={23} />
          <p className="cursor-pointer w-full outline-none bg-cardBg" >
            {socialLink.name}
          </p>
        </div>
      </div>
      <div>
        <h4  className="text-sm font-medium">
          Link
        </h4>
        <div className="flex items-center border rounded-md px-3 py-[11px] gap-x-3 border-inputBorder overflow-x-auto">
          <button>
            <FaLink />
          </button>
          <p className="cursor-pointer w-full outline-none bg-cardBg">
            {socialLink.url}
          </p>
        </div>
      </div>
      {socialLink.description && (
        <div>
          <h4  className="text-sm font-medium">
            Description
          </h4>
          <div className="flex items-center border rounded-md px-3 py-[11px] border-inputBorder overflow-auto">
            <p className="cursor-pointer w-full outline-none bg-cardBg" >
              {socialLink.description}
            </p>
          </div>
        </div>
      )}
      {showModal && (
        <div className="flex justify-between text-cardBg mt-2 font-medium gap-x-1">
          <button className="border-2 border-blue-600 text-blue-600 w-1/2 py-2 rounded-md hover:text-btnBg hover:border-btnBg" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="bg-red-600 w-1/2 py-2 rounded-md hover:bg-opacity-80" onClick={() => handleDelete(socialLink.id)}>
            Delete
          </button>
        </div>
      )}
    </article>
    </>
  );
};
export default LinkDisplay;
