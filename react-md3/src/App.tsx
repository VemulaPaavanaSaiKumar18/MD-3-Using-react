import React from "react";
import "./App.css";
import { HeadTypography } from "./components/HeadTypography";
import Radiobutton from "./components/Radiobutton";
import { UsingButton } from "./components/UsingButton";
import { Selectcheckbox } from "./components/Selectcheckbox";
import { Trackslider } from "./components/Trackslider";

function App() {
  return (
    <div className="App">
      <HeadTypography />
      <UsingButton />
      <Radiobutton />
      <Selectcheckbox />
      <Trackslider />
    </div>
  );
}

export default App;
