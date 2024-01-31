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
        <Box>
        <Button onClick={()=> showAlert()} ml="80%"  bg="hsl(225, 6%, 10%)" color="brown"  _hover={{ bg:"black"}}>Run</Button>
          <Box bg="" display="flex" h="44vh" >
            <Editor
              language="c"
              displayName="C"
              value={code}
            />
          </Box>
          <Box display="flex" h="30vh" w="25vh">
          <IO input={code} />
          </Box>  
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
      <Editor
        language="output"
        displayName="Output :"
        value={output}
        theme="material"
      />
    </>
  );
}

export default PLEditor;
