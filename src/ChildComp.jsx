// ChildComp.js
import React from "react";

const ChildComp = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComp;
