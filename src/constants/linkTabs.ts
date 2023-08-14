import { IconType } from "react-icons";
import {FaDiscord, FaFacebook, FaFreeCodeCamp, FaGithub, FaInstagram, FaLinkedin, FaPinterestP, FaReddit, FaSkype, FaSnapchat, FaSpotify, FaTiktok, FaTwitch, FaWhatsapp, FaYoutube} from "react-icons/fa"
import ThreadsIcon from "../components/icons/ThreadsIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

interface LinkTabs{
    name: string;
    icon: IconType;
    colorClass: string;
}

export const linkTabs: LinkTabs[] = [
    {
        name: "GitHub",
        icon: FaGithub,
        colorClass: "bg-black"
    },
    {
        name: "YouTube",
        icon: FaYoutube,
        colorClass: "bg-[#ff0000]"
    },
    {
        name: "Linkedin",
        icon: FaLinkedin,
        colorClass: "bg-[#0077B5]"
    },
    {
        name: "Discord",
        icon: FaDiscord,
        colorClass: "bg-[#5865F2]"
    },
    {
        name: "Facebook",
        icon: FaFacebook,
        colorClass: "bg-[#3B5998]"
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        colorClass: "bg-[#C32AA3]"
    },
    {
        name: "Twitter",
        icon: TwitterIcon,
        colorClass: "bg-black"
    },
    {
        name: "TikTok",
        icon: FaTiktok,
        colorClass: "bg-[#010101]"
    },
    {
        name: "Snapchat",
        icon: FaSnapchat,
        colorClass: "bg-[#FFFC00]"
    },
    {
        name: "WhatsApp",
        icon: FaWhatsapp,
        colorClass: "bg-[#25D366]"
    },
    {
        name: "Reddit",
        icon: FaReddit,
        colorClass: "bg-[#FF4500]"
    },
    {
        name: "Twitch",
        icon: FaTwitch,
        colorClass: "bg-[#9146ff]"
    },
    {
        name: "Spotify",
        icon: FaSpotify,
        colorClass: "bg-[#1ED760]"
    },
    {
        name: "FreeCodeCamp",
        icon: FaFreeCodeCamp,
        colorClass: "bg-black"
    },
    {
        name: "Threads",
        icon: ThreadsIcon,
        colorClass: "bg-slate-900/70"
    },
    {
        name: "Pinterest",
        icon: FaPinterestP,
        colorClass: "bg-[#BD081C]"
    },
    {
        name: "Skype",
        icon: FaSkype,
        colorClass: "bg-blue-500"
    }
]


export interface selectOption{
    label: string;
    labelIcon: IconType;
    value: string;
}

export const options: selectOption[] = linkTabs.map(link => {
    return {
        label: link.name,
        labelIcon: link.icon,
        value: link.name
    }
})