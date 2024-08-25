import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const SubscriptionsComponent = () => {
  const bgBorder = useColorModeValue("black", "#FB7813");
  return (
    <Card maxW={"sm"} minW={"sm"} variant={"filled"}>
      <CardHeader>
        <Heading as="h4" size={"md"} textAlign={"center"}>
          Subscripciones
        </Heading>
      </CardHeader>
      <CardBody>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>156,00</StatNumber>
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

export default SubscriptionsComponent;
