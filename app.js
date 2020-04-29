// you can write an impicit returm by omitting curly braces and the return keyword
// const Header = () => (
//     <header>
//       <h1>Scoereboard</h1>
//       <span className="stats">Players:1</span>
//     </header>
//   );
const Header = () => {
  return (
    <header>
      <h1>Scoereboard</h1>
      <span className="stats">Players:1</span>
    </header>
  );
};
const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Gamy</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">35</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};

// with the compiler, these elements get rendered to the DOM uding JSX
ReactDOM.render(<Player />, document.getElementById("root"));
