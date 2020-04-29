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
      <Counter />
    </div>
  );
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
    };
  }
  // we can write it like this which is more concise
  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };
  // or we can write it like this which is less concise with a return
  incrementScore = () => {
    this.setState((prevState) => {
      return {
        score: prevState.score + 1,
      };
    });
  };
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}>
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}>
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      { name: "Gamy", id: 1 },
      { name: "Lisa", id: 2 },
      { name: "Joe Exotic", id: 3 },
    ],
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Players list */}
        {this.state.players.map((player) => {
          return <Player key={player.id} name={player.name} />;
        })}
      </div>
    );
  }
}

// with the compiler, these elements get rendered to the DOM uding JSX
ReactDOM.render(<App />, document.getElementById("root"));
