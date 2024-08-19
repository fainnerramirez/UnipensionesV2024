import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar.component";
import Masonry from "./components/Gallery/Masonry";
import Hero from "./components/Hero.component";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Navbar />
      <Hero />
      <Masonry />
    </Layout>
  </ChakraProvider>
);
