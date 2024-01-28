import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";

export default function MyEditor() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log(text);

    return () => {};
  }, [text]);

  const renderHeader = () => {
    return (
      <div style={{ width: "400px" }}>
        <span>Editor</span> &nbsp;&nbsp;
        <span className="ql-formats">
          <button className="ql-list" value="bullet" aria-label="Bold"></button>
        </span>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card flex justify-content-center">
      <Editor
        placeholder="Copy or Type your data here and Click Refresh to generate the Tree view"
        value={text}
        onTextChange={(e) => setText(e.htmlValue)}
        style={{ height: "320px", width: "100%", marginRight: "20px" }}
        headerTemplate={header}
      />
    </div>
  );
}
