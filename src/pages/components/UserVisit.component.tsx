import {
  Avatar,
  Box,
  Button,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const UserVisitComponent = ({ user }: any) => {
  return (
    <Box
      width={"100%"}
      padding={5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <HStack key={user.id} spacing={5}>
        <Avatar size="md" src={user.url} name={user.name} />
        <VStack spacing={0}>
          <Text textAlign={"left"}>{user.name}</Text>
          <Text textAlign={"left"}>{user.email}</Text>
        </VStack>
      </HStack>
      <Box>
        <Stat>
          <StatLabel>Visitas</StatLabel>
          <StatNumber>10</StatNumber>
        </Stat>
      </Box>
    </Box>
  );
};

export default UserVisitComponent;
