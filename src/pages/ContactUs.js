import '../index.css';
import React from 'react';
import {Box, Heading, Text, Link, Stack, FormControl, Input, Textarea, Button,FormLabel } from '@chakra-ui/react';

import {ChakraProvider} from '@chakra-ui/react';
export  default function ContactUs(){
  return (
    <ChakraProvider>
    <Box py={10} bg="hsl(120, 8%, 10%)" color="white" mx="auto" textAlign="center" justifyContent="space-between" >
      <Heading >Get in Touch</Heading>
      <Text mb={8} w={[300,450,600]} mx="auto">We're always happy to hear from you. Whether you have feedback, a question, or just want to say hi, don't hesitate to reach out using the form below.</Text>
      <Box w={[300,400,500]} mx="auto">
        <FormControl isRequired mb={2}>
          <FormLabel >Your Name</FormLabel>
          <Input placeholder="Your Name"/>
        </FormControl>
        <FormControl isRequired mb={2}>
        <FormLabel >Email</FormLabel>
          <Input type="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired mb={2}>
        <FormLabel >Message :</FormLabel>
        <Textarea placeholder="Your Message"/>
        </FormControl>
        <Button w="100%" type="submit" bg="#004F83" _hover={{color:"black"}} color="whitesmoke">Send Message</Button>
      </Box>
    </Box> 
    </ChakraProvider>
  );
};
