import React from "react";
import ReactDOM  from "react-dom/client";

// declearing root*****
const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement('h1', {id:"main_heading"}, 'Hello World');
// root.render(heading);

// creating a div or html structure*****
// create sibling childs under a parent div using array*****
const wrapper = React.createElement(
  "div",
  { class: "wrapper" },
  React.createElement("div", { class: "content" }, [
    React.createElement("h1", {}, "Hello World!!!"),
    React.createElement("h2", {}, "Hello World!!!"),
  ])
);
root.render(wrapper);
