import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = [
  {
    heading: "Start With A Mock",
    content: "Front end in its plain form",
  },
  {
    heading: "Break The UI Into A Component Hierarchy",
    content:
      "Draw boxes.Identify components (Single Responsibility Principle).Arrange into hierarchy",
  },
  {
    heading: "Build A Static Version",
    content:
      "Don't use state at all, only use props.Reuse components.Top down/Bottom up to you.Pass sample\
      data to the top of the hierarchy",
  },
  {
    heading: "Identify The Minimal Representation of UI State",
    content:
      "Keep only the absolute minimal and compute everything else on-demand.Is it passed in from a parent via props?If so, it probably isn't state.\
      Does it remain unchanged over time? If so, it probably isn’t state.Can you compute it based on any other state or props in your component? If so, it isn’t state",
  },
  {
    heading: "Identify Where Your State Should Live",
    content:
      "Identify every component that renders something based on that state.Find a common owner component (above all other components).\
      Create a wrapper component above components if necessary",
  },
  {
    heading: "Add Inverse Data Flow",
    content:
      "Pass state changing callbacks from state owner to relevant child component",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App detail={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
