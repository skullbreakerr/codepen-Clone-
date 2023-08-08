import Editor from './Editor';
import{useState,useEffect} from 'react';

// Work in Progress //

function ClangEditor(){
  const [c,setc] = useState("");
//   const url = 'https://code-compiler10.p.rapidapi.com/';
//   const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'x-compile': 'rapidapi',
// 		'Content-Type': 'application/json',
// 		'X-RapidAPI-Key': '0a992c6bbamshe861d3ad0e91738p1b239ejsn3c25eb73a423',
// 		'X-RapidAPI-Host': 'code-compiler10.p.rapidapi.com'
// 	},
// 	body: {
// 		langEnum: [
// 			'php',
// 			'python',
// 			'c',
// 			'c_cpp',
// 			'csharp',
// 			'kotlin',
// 			'golang',
// 			'r',
// 			'java',
// 			'typescript',
// 			'nodejs',
// 			'ruby',
// 			'perl',
// 			'swift',
// 			'fortran',
// 			'bash'
// 		],
// 		lang: 'c',
// 		code: 'printf("Hello world")',
// 		input: ''
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	setc = result; 
// } catch (error) {
// 	console.error(error);
// }

  return(
   <>
     <Editor 
     language="c"
     displayName="C"
     value={setc}
    //  onchange={setc}
     />
     <h2>Still Working on compiler...</h2>
   </>
  
 )};

 export default ClangEditor;