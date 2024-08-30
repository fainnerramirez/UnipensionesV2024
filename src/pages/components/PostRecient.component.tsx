import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const PostRecientComponent = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      <Box padding={5}>
        <Heading as="h3" fontSize={20} textTransform={"capitalize"}>
          Tu última publicación
        </Heading>
      </Box>
      <Card size={"md"} bg={bg}>
        <CardHeader>
          <Image
            src={require("../../assets/pension.jpg")}
            width={"100%"}
            height={300}
          />
        </CardHeader>
        <CardBody>
          <Text textAlign={"center"} textTransform={"capitalize"}>
            Titulo de anuncio
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            eius error pariatur nulla enim delectus.
          </Text>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"center"}>
          <Button colorScheme="blue">Ver publicación</Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default PostRecientComponent;
