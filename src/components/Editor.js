import React,{useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor(props) {
  const { language, displayName, value, onchange, className } = props;
  const [open,setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onchange(value);
  }
  return (
    <div className={`editor-container${open? '':'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button onclick={()=> setOpen(prevOpen =>!prevOpen)}>O/C</button>
      </div>
      <ControlledEditor
        value={value}
        className="code-mirror"
        options={{
          lineWrapping: true,
          mode: language,
          lineNumbers: true,
          theme: 'material',
        }}
        onBeforeChange={handleChange}
      />
    </div>
  );
}

export default Editor;
