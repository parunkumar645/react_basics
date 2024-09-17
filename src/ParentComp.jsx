// ParentComp.js
import React from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
  const message = "Hello from Parent Component";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComp message={message} />
    </div>
  );
};

{
  /* <div>
  <h1>Parent Component</h1>
  <div>
    <h2>Child Component</h2>
    <p>Hello from Parent Component</p>
  </div>
</div>; */
}

export default ParentComp;
