import React, { useEffect, useRef } from "react";

const ReactComment = (props) => {
  const el = useRef();
  useEffect(() => {
    const current = el.current as any;
    if (current) {
      current.outerHTML = `<!-- ${props.text} -->`;
    }
  }, []);
  return <div ref={el} />;
};

export default ReactComment;
