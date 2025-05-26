import { BiSolidDashboard } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";

export default function SideBar() {
  const genralOptions = [
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

  const toolsOptions = [
    {
      text: "Chat",
      icon: <AiOutlineMessage />,
    },
    {
      text: "Support",
      icon: <IoCall />,
    },
  ];

  const others = [
    {
      text: "Setting",
      icon: <IoIosSettings />,
    },
  ];
  return (
    <div>
      <h1>
        <span style={{ color: "#5ed4d8" }}>Health</span>
        <span style={{ color: "#4d4f6d" }}>care.</span>
      </h1>
      <div>
        <div>
          <ul>
            {genralOptions.map(function (citem, i) {
              return (
                <li key={i}>
                  <div>{citem.icon}</div>
                  <p>{citem.text}</p>
                </li>
              );
            })}
          </ul>
          <ul>
            {toolsOptions.map(function (citem, i) {
              return (
                <li key={i}>
                  <div>{citem.icon}</div>
                  <p>{citem.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <ul>
          {others.map(function (citem, i) {
            return (
              <li key={i}>
                <div>
                  {citem.icon}
                  <p>{citem.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
