import React from "react";
import ReactDom from "react-dom";

function MyFistComponent() {
  return <div>Hello</div>;
}

ReactDom.render(<MyFistComponent />, document.getElementById("root"));
