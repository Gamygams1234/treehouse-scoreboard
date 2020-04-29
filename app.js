const players = [
  { name: "Gamy", score: 100, id: 1 },
  { name: "Lisa", score: 50, id: 2 },
  { name: "Joe Exotic", score: 9000, id: 3 },
];

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

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initalPlayers.length} />

      {/* Players list */}
      {props.initalPlayers.map((player) => {
        return <Player key={player.id} name={player.name} score={player.score} />;
      })}
    </div>
  );
};

// with the compiler, these elements get rendered to the DOM uding JSX
ReactDOM.render(<App initalPlayers={players} />, document.getElementById("root"));
