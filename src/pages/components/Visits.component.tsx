import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatUpArrow,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const VisitsComponent = () => {
  const bgBorder = useColorModeValue("black", "#4EF037");

  return (
    <Card maxW={"sm"} minW={"sm"} variant={"filled"}>
      <CardHeader>
        <Heading as="h4" size={"md"} textAlign={"center"}>
          Visitas
        </Heading>
      </CardHeader>
      <CardBody>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>1024,00</StatNumber>
        </Stat>
      </CardBody>
      <CardFooter
        bg={bgBorder}
        borderBottomRadius={10}
        padding={2}
      ></CardFooter>
    </Card>
  );
};

export default VisitsComponent;
