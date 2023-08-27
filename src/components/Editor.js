import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/hint/javascript-hint';
// import 'codemirror/addon/hint/html-hint';
// import 'codemirror/addon/hint/css-hint';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'material-icons';
function Editor(props) {
  const { language, displayName, value, onchange, className } = props;
  const [open, setOpen] = useState(true);
  const option = {
    autofocus: true,
    lineWrapping: true,
    mode: language,
    lineNumbers: true,
    theme: 'material',
    indentUnit: 2,
    dragDrop: true,
    lineWiseCopyCut:true,
    // hintOptions:{
    //   completeSingle:false,
    // }
  };
    
  function handleChange(editor, data, value) {
    onchange(value);
  }
  return (
    <div className={`editor-container${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <span className="material-icons">
            {open ? 'open_in_full' : 'close_fullscreen'}
          </span>
        </button>
      </div>
      <ControlledEditor
        value={value}
        className="code-mirror"
        options={option}
        onBeforeChange={handleChange}
      />
    </div>
  );
}

export default Editor;
