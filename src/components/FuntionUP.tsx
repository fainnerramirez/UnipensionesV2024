import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const FuntionUP = () => {
  return (
    <>
      <Box>
        <Heading>Así es como funciona Unipensiones</Heading>
      </Box>
      <Stack dir={"row"}>
        <Box>
          <Box>
            <Text>Pensión con Cupo para dos personas</Text>
          </Box>
          <Box>
            <Heading>Busca una pensión</Heading>
            <Text>¿Que buscas en una pensión?</Text>
            <Text>Piensa en tu comididad, economía y gustos</Text>
            <Text>Y a ver que te encuentras</Text>
          </Box>
          <Box>
            <Button colorScheme="blue">Explorar</Button>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default FuntionUP;
