// you can write an impicit returm by omitting curly braces and the return keyword
// const Header = () => (
//     <header>
//       <h1>Scoereboard</h1>
//       <span className="stats">Players:1</span>
//     </header>
//   );
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players:{props.totalPlayers}</span>
    </header>
  );
};
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter score={props.score} />
    </div>
  );
};

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1} />
      {/* Players list */}
      <Player name="Gamy" score={5} />
      <Player name="John" score={5} />
    </div>
  );
};

// with the compiler, these elements get rendered to the DOM uding JSX
ReactDOM.render(<App />, document.getElementById("root"));
