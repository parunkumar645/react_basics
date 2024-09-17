import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import ParentCom from "./ParentCom";
// import { Intro } from "./Intro";
import { MyComponent } from "./MyComponent";
// import { ToyRoom } from "./ToyRoom";
// import ParentComp from "./ParentComp";
// import { Like } from "./Like";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Like /> */}
    {/* <ParentComp />/ */}
    {/* <ToyRoom /> */}
    <MyComponent />
    {/* <Intro /> */}
    {/* <ParentCom/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
