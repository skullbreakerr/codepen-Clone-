import React,{useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

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
        <button 
        onClick={()=> setOpen(prevOpen =>!prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt } />
        </button>
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
