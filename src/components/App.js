import React, { useState,useEffect } from 'react';
import Editor from './Editor';
import '../index.css'

function App() {
  const [html, setHtml] = useState('');
  const [css, setcss] = useState('');
  const [js, setjs] = useState('');
  const [srcDoc,setSrcDoc] = useState('');
  useEffect(()=>{
   const timeout =setTimeout(()=>{
     setSrcDoc(`
     <html>
     <body>${html}</body>
     <style>${css}</style>
     <script>${js}</script>
     </html>`)
   },250)
   return ()=>{
     clearTimeout(timeout);
   }
  },[html,css,js])
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onchange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onchange={setcss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onchange={setjs}
        />
      </div>

      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
