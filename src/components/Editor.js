import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'material-icons';
function Editor(props) {
  const { language, displayName, value, onchange, className } = props;
  const [open, setOpen] = useState(true);
  const option={
    lineWrapping: true,
    mode: language,
    lineNumbers: true,
    theme: 'material',
    extraKeys:{'Ctrl-space':'autocomplete'}
  }

  function handleChange(editor, data, value) {
    onchange(value);
  }
  return (
    <div className={`editor-container${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          <span className="material-icons">{open? "open_in_full":"close_fullscreen"}</span>
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