import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';

function Editor(props) {
 const { language, displayName, value, onchange, className } = props;
 const [open, setOpen] = useState(true);

 function handleAceChange(newValue, event, editor) {
    onchange(newValue);
 }
  const option = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 1,
  }

 return (
    <div className={`editor-container`}>
      <div className="editor-title">
        {displayName}
      </div>
      <AceEditor
        value={value}
        className="code-mirror"
        mode={language}
        theme="monokai"
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        onChange={handleAceChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={option}
      />
    </div>
 );
}

export default Editor;