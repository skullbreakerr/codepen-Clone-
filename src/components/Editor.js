import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import {expand_content,close_fullscreen} from'https://fonts.googleapis.com/icon?family=Material+Icons';
import GoogleIcon from './GoogleIcon.js';

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
          <GoogleIcon iconName={open ? expand_content:close_fullscreen} />
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
