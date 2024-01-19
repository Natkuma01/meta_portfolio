import { Heading, HStack, Image } from "@chakra-ui/react";
import { Card, Box, CardBody, CardFooter, Stack, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
return (
  <Card cursor='pointer' maxW='lg'borderRadius='7px'>
    <CardBody>
      <Image 
      boxShadow="md"
      p="3"
      round="md"
      bg="white"
      borderRadius='15px'
      src={imageSrc}
      _hover={{
        transform: "scale(1.10)",
      }} 
      alt="drawing" 
      width="1024" />
      <Stack mt='6' spacing='3'>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      </Stack>
  </CardBody>
  <CardFooter>
    <HStack spacing='10px'>
    <Text>See more</Text>
    <Box><FontAwesomeIcon icon={faArrowRight} size="1x" /></Box>
    </HStack>
  </CardFooter>
</Card>
) 
};

export default Cards;
