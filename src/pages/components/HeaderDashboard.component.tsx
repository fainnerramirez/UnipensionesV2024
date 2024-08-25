import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const HeaderDashboardComponent = () => {
  const bgButton = useColorModeValue("black", "gray.700");

  return (
    <Box
      padding={10}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Heading>Dashboard</Heading>
      <HStack spacing={5}>
        <Input type="date" />
        <Button bg={bgButton} color={"white"}>
          Filtrar
        </Button>
      </HStack>
    </Box>
  );
};

export default HeaderDashboardComponent;
