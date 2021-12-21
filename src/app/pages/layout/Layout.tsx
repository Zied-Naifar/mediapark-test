import React from "react";
import AppBarMui from "../../components/AppBar/AppBarMui";

function Layout({ children }) {
  return (
    <>
      <AppBarMui />
      {children}
    </>
  );
}

export default Layout;
