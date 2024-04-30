import React from "react";
import Nav from "./nav";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
