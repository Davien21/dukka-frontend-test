import React, { useState, useEffect } from "react";
import Overlay from "../../overlay";
import MenuToggle from "./menuToggle";
import SideBar from "./navigation";
import { useLocation } from "react-router-dom";

function SideNav(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleSideNavToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="d-md-none">
      <MenuToggle onToggleMenu={handleSideNavToggle} />
      <Overlay className="" isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <SideBar onCloseSideBar={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
}

export default SideNav;
