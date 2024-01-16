import React from 'react';
import {theme, Box, Heading, Text, Link, Stack, FormControl, Input, TextArea, Button } from '@chakra-ui/react';

import {ChakraProvider} from '@chakra-ui/react';
export  default function ContactUs(){
  return (
    <ChakraProvider>
    <Box bg="hsl(225, 6%, 25%)" color="#111" h="100%">  
    <Box py={10} my={15} bg=" hsl(120, 8%, 10%)" color="white"mx="auto" textAlign="center" >
      <Heading >Get in Touch</Heading>
      <Text mb={8}>We're always happy to hear from you. Whether you have feedback, a question, or just want to say hi, don't hesitate to reach out using the form below.</Text>
      <Stack spacing={8}>
        <FormControl >
          <Input placeholder="Your Name" required/>
        </FormControl>
        <FormControl>  
          <Input type="email" placeholder="Email" required/>
        </FormControl>
        <FormControl>  
          <Input placeholder="Your Message" required/>
        </FormControl>
        <Button type="submit" bg="#004F83" _hover={{bg:"#004F83", color:"black" }} color="whitesmoke">Send Message</Button>
      </Stack>
    </Box> 
    </Box>
    </ChakraProvider>
  );
};
