import React, { useState,useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClangEditor from './ClangEditor.js';
import AboutUs from './AboutUs.js';
import ContactUs from './ContactUs';
import Editor from './Editor';
import '../index.css';
import Nav from'./Nav';

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
      <Nav></Nav> 
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
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="..." class="rounded me-2" alt="..." />
    <strong class="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
      </div>
    </>
  );
}

export default App;
