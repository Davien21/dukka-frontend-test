import React from "react";
import TopNav from "./../navigation/topNav/index";
import SideNav from "./../navigation/sideNav/index";
import LetterLogo from "./../letterLogo/index";

function Header(props) {
  return (
    <header className="container  ">
      <nav className="d-flex flex-wrap align-items-center py-2 justify-content-between">
        <TopNav />
        <SideNav />
        <LetterLogo />
      </nav>
      <hr className="row my-0" />
    </header>
  );
}

export default Header;
