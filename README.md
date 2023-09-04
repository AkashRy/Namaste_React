//# Namaste_React_P1(NOTES)

//First install node and package.json using "npm init" (do not use "npm init -y")
//Then install parcel the bundler using "npm install -D parcel" ("npm install packageName" to install any packages)

//To start the localhost server(Parcel) "npx parcel index.html";

//To generate production build "npx parcel build index.html" (it compresses the code and make it ready for production, on dist folder)
//"main": "app.js", (don't need to mention the entry point file location on package.json while using parcel)



//************************************(core react)
// *****declearing root*****
const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement('h1', {id:"main_heading"}, 'Hello World');
// root.render(heading);

// *****creating a div or html structure*****
// *****create sibling childs under a parent div using array*****
const wrapper = React.createElement(
  "div",
  { class: "wrapper" },
  React.createElement("div", { class: "content" }, [
    React.createElement("h1", {}, "Hello World!!!"),
    React.createElement("h2", {}, "Hello World!!!"),
  ])
);
root.render(wrapper);
//**********************************