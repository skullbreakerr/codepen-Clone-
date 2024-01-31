import React, { useState } from 'react';
import { Box,Button,useToast } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import Editor from './Editor.js';
import '../index.css';

function PLEditor({code,onchange}) {
  const toast = useToast()
  function showAlert(){
    toast({
      title:'Developing process',
      description:'Finding Suitable API for Compiling the code',
      duration:6000,
      isclosable:true,
      position: "bottom"
    });
  }

  return (
    <>
      <ChakraProvider>
        <Button onClick={()=> showAlert()} ml="80%"  bg="hsl(225, 6%, 10%)" color="brown"  _hover={{ bg:"black"}}>Run</Button>
          <Box display="flex" h="75vh" width="100%">
            <Editor
              language="c"
              displayName="C"
              value={code}
            />
           </Box>
          <Box display="flex"  h={{base:"54vh"}} w="100%">  
            <IO input={code} />
          </Box>  
      </ChakraProvider>
    </>
  );
}

function IO(props) {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  return (
    <>
      <ChakraProvider>
      <Editor
        language="output"
        displayName="Output :"
        value={output}
        theme="material"
      />
      </ChakraProvider>
    </>
  );
}

export default PLEditor;
