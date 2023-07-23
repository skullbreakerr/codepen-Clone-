import Editor from './Editor';
import{useState,useEffect} from 'react';

// Work in Progress //

function ClangEditor(){
  const [c,setc] = useState("");

  return(
   <>
     <Editor 
     language="c"
     displayName="C"
     value={c}
     onchange={setc}
     />
     <h2>Still Working on compiler...</h2>
   </>
  
 )};

 export default ClangEditor;