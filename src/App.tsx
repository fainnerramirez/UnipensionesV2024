import { ChakraProvider, theme } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import DashboardPage from "./pages/Dashboard.page";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <DashboardPage />
    </Layout>
  </ChakraProvider>
);
