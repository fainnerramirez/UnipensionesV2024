import React from "react";
import Navbar from "../Navbar.component";
import FooterComponent from "../Footer.component";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout;
