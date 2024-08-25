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

const PostComponent = () => {
  const bgBorder = useColorModeValue("black", "#FF204E");
  return (
    <Card maxW={"sm"} minW={"sm"} variant={"filled"}>
      <CardHeader>
        <Heading as="h4" size={"md"} textAlign={"center"}>
          Publicaciones
        </Heading>
      </CardHeader>
      <CardBody>
        <Stat>
          <StatLabel>Total</StatLabel>
          <StatNumber>1</StatNumber>
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

export default PostComponent;
