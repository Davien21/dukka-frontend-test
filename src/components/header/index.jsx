import React from "react";
import TopNav from "./../navigation/topNav/index";
import SideNav from "./../navigation/sideNav/index";

function Header(props) {
  return (
    <header className="container  ">
      <div className="d-flex flex-wrap align-items-center">
        <TopNav />
        <SideNav />
        <div className="col-auto text-right ml-3 my-2 letter-logo">
          <span className="d-block">SAMASYS</span>
          <span className="pr-3">combat salary fraud</span>
        </div>
      </div>
      <hr className="row"/>
    </header>
  );
}

export default Header;
