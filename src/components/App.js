import React,{useState} from 'react';
import Editor from './Editor';

function App() {
  const [html,setHtml]= useState('')
  const [css,setcss]= useState('')
  const [js,setjs]= useState('')
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
        language="js"
        displayName="javascript"
        value={js}
        onchange={setjs}
        />
      </div>
      <div className="pane">
        <iframe
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