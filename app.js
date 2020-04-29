// create element has three arguments tag, properties, then the children
const title = React.createElement("h1", { id: "main-title", title: "This is a title" }, "my react element");
const desc = React.createElement("p", null, "I am Gay, I am broke as shit, Carole Baskins killed her husband");
// here we can pass all of the information on the header element
const header = React.createElement("header", null, title, desc);

// this has two arguments,(the element we want to render, and the HTML element we want to Update)
// reacts jus manages what gets rendered to the DOM
ReactDOM.render(header, document.getElementById("root"));
