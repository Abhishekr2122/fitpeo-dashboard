import { IoSearchOutline } from "react-icons/io5";
import { TbBellFilled } from "react-icons/tb";

export default function Header() {
  return (
    <header>
      <div>
        <IoSearchOutline />
        <input type="text" placeholder="Search" />
        <TbBellFilled />
      </div>
    </header>
  );
}
