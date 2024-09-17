import React, { useRef } from "react";
export const MyComponent = () => {
  const myBox = useRef(null); // Create your magic box

  // This is where you’ll use your magic box
  const handleButtonClick = () => {
    if (myBox.current) {
      myBox.current.style.color = "red"; // Change the color of the toy car to red
    }
  };

  return (
    <div>
      <p ref={myBox}>I am a toy car</p>{" "}
      {/* Put your toy car in the magic box */}
      <button onClick={handleButtonClick}>Change Toy Car Color</button>
    </div>
  );

  //   Special Box (useRef): 🧳
  // Toy Car Inside the Box: 🚗
  // Button to Change the Car: 🕹️
};
