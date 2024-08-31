import {
  Avatar,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserVisitComponent from "./UserVisit.component";
import { UserData } from "../../Types/UserData";

const RecentVisitsComponent = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("gray.800", "white");

  const [users, setUsers] = useState<UserData[]>([
    {
      id: 1,
      name: "Fainner Ramirez",
      email: "fai@dev.com",
      url: require("../../assets/user.png"),
    },
    {
      id: 2,
      name: "Fainner Ramirez",
      email: "fai@dev.com",
      url: require("../../assets/user.png"),
    },
    {
      id: 3,
      name: "Fainner Ramirez",
      email: "fai@dev.com",
      url: require("../../assets/user.png"),
    },
    {
      id: 4,
      name: "Fainner Ramirez",
      email: "fai@dev.com",
      url: require("../../assets/user.png"),
    },
    {
      id: 5,
      name: "Fainner Ramirez",
      email: "fai@dev.com",
      url: require("../../assets/user.png"),
    },
    {
      id: 6,
      name: "Fainner Ramirez",
      email: "fai@dev.com",
      url: require("../../assets/user.png"),
    },
  ]);

  return (
    <Box
      width={{ base: "100vw", md: "40%" }}
      bg={bg}
      borderRadius={10}
      color={color}
    >
      <Box padding={5}>
        <Heading as={"h2"} mb={4} size={"md"}>
          Visitas recientes
        </Heading>
        <Text fontSize={"sm"}>
          Mostrando los últimos {users.length} visitas recientes
        </Text>
      </Box>
      {users.map((user: UserData) => (
        <UserVisitComponent user={user} />
      ))}
    </Box>
  );
};

export default RecentVisitsComponent;
