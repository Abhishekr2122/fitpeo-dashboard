import { BiSolidDashboard } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

export const genralOptions = [
  {
    text: "Dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    text: "History",
    icon: <LuArrowDownUp />,
  },

  { text: "Calender", icon: <FaCalendarAlt /> },
  {
    text: "Appointments",
    icon: <FaSquarePlus />,
  },
  {
    text: "Statistics",
    icon: <FaArrowTrendUp />,
  },
];

export const toolsOptions = [
  {
    text: "Chat",
    icon: <AiOutlineMessage />,
  },
  {
    text: "Support",
    icon: <IoCall />,
  },
];

export const others = [
  {
    text: "Setting",
    icon: <IoIosSettings />,
  },
];
