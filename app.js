function Header() {
  return (
    <header>
      <h1>Scoereboard</h1>
      <span className="stats">Players:1</span>
    </header>
  );
}

// with the compiler, these elements get rendered to the DOM uding JSX
ReactDOM.render(header, document.getElementById("root"));
