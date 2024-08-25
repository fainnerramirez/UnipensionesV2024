import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const LikesComponent = () => {
  const bgBorder = useColorModeValue("black", "#FAEF5D");
  return (
    <Card maxW={"sm"} minW={"sm"} variant={"filled"}>
      <CardHeader>
        <Heading as="h4" size={"md"} textAlign={"center"}>
          Likes publicaciones
        </Heading>
      </CardHeader>
      <CardBody>
        <StatGroup>
          <Stat>
            <StatLabel>
              <Button pointerEvents={"none"}>
                <AiOutlineLike />
              </Button>
            </StatLabel>
            <StatNumber>345,670</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>
              <Button pointerEvents={"none"}>
                <AiOutlineDislike />
              </Button>
            </StatLabel>
            <StatNumber>45</StatNumber>
          </Stat>
        </StatGroup>
      </CardBody>
      <CardFooter
        bg={bgBorder}
        borderBottomRadius={10}
        padding={2}
      ></CardFooter>
    </Card>
  );
};

export default LikesComponent;
