// React.createElement("h1", { id: "main-title", title: "This is a title" }, "my react element")
const name = "Gamy";
// React.createElement("p", null, "I am Gay, I am broke as shit, Carole Baskins killed her husband");
const desc = <p>I am Gay, I am broke as shit, Carole Baskins killed her husband</p>;
const myTitleID = "main-title";
// here we can pass all of the information on the header element
const header = (
  <header>
    <h1 id={myTitleID}>{name}'s React Element</h1>
    {desc}
  </header>
);

// with the compiler, these elements get rendered to the DOM uding JSX
ReactDOM.render(header, document.getElementById("root"));
