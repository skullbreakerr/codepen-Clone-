import React, { useState, useEffect } from 'react';
import Editor from '../components/Editor';

const HomePage = () => {
  const[onTrue,setOnTrue]=useState(true)
  const [html, setHtml] = useState(`<div id="counter">0</div>
<button id="increment-button">INCREMENT</button>`);
  const [css, setcss] = useState(`*{
  background-color:whitesmoke;
}

body{
 text-align:center;
}

#increment-button{
 background-color:tomato;
 color:white;
 border:1px;
 border-radius:7px;
 padding: 5px 5px;
}

#counter{
 font-size:24px;
 padding:10px 20px;
 margin-bottom:10px;
}`);
  const [js, setjs] = useState(`document.getElementById('increment-button')
.addEventListener('click',()=>{
  var count = parseInt(document.getElementById('counter').innerText);
  count++;
  document.getElementById('counter').innerText=count;
});`);
  const [srcDoc, setSrcDoc] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
     <html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
     </html>`);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);
  return (
    <>
    <div id="container">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onchange={setHtml}
          theme="material"
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onchange={setcss}
          theme="material"
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onchange={setjs}
          theme="material"
        />
      </div>

      <div className="pane">
        <iframe
          // className="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
      </div>
    </>
  );
};
export default HomePage;
