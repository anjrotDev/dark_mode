import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { AiFillThunderbolt } from "react-icons/ai";
import Switcher from "./Switcher";

const Header = () => {
  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <span className="text-2xl">
          <AiFillThunderbolt />
        </span>
        <p className="font-bold text-inherit">Anjrot Dev</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Switcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
