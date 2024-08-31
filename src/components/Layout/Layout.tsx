import React from "react";
import Navbar from "../Navbar.component";
import FooterComponent from "../Footer.component";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box width={"100%"}>
      <Navbar />
      {children}
      <FooterComponent />
    </Box>
  );
};

export default Layout;
