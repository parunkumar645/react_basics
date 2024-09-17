import { useEffect } from "react";

export function ToyRoom() {
  useEffect(() => {
    // This code runs after the toy room is set up
    console.log("The toy room is ready! Time to play.");
  }, []); // Empty array means it runs only once, like setting up the room once

  return <div>Welcome to the toy room!</div>;
}
