import React,{useState} from "react";
import {Box,Text,Heading} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';
import PLEditor from '../components/PLEditor';
import '../index.css';
function CLanguage(){
  const [code, setCode] = useState(`#include<stdio.h>;
  #include<conio.h>;
  
  int main(){
    return 0;
  }`);


  return(
    <>
    <ChakraProvider> 
      <Box bg="hsl(225, 6%, 25%)" color="white" h="auto" w="100vw">
        <Box justifyContent="center" textAlign="center">
        <Heading>C language Editor</Heading>
        </Box>
        <Box h="auto" w="100%">
        <PLEditor
          code={code}
          onchange={setCode}
         />  
         </Box> 
      </Box>
    </ChakraProvider>
    </>
  )
}

export default CLanguage;