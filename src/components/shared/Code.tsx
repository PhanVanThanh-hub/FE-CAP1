import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

interface Props {
  code: any;
  language: string;
}

const Code = ({ code, language }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code" style={{ marginTop: "40px" }}>
      <pre style={{ borderRadius: "8px" }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
