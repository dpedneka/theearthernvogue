import React from "react";
import Navbar from "../navbar";

const Layout = (props: any) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
    </>
  );
};

export default Layout;
