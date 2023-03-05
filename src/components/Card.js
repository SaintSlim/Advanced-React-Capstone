import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack backgroundColor='white' borderRadius="md" spacing={5} gap={1}>
      <Image src={imageSrc} resize="block" borderBottomRadius='xl' />
      <Heading as='h4' size='md' alignSelf='flex-start' px='2' color='black'>{title}</Heading>
      <Text px='2' color='blackAlpha.700' >{description}</Text>
      <HStack alignSelf='flex-start' p='2'>
        <Text color='black'>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color='black'/>
      </HStack>
  </VStack>
  );
};

export default Card;
