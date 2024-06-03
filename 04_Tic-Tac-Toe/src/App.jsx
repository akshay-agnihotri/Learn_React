import "./App.css";
import Player from "../components/Player.jsx";
import GameBoard from "../components/GameBoard.jsx";
import {useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex,colIndex) {

    setActivePlayer((activePlayer) => {
      return activePlayer === "X" ? "0" : "X";
    });

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length>0 && prevTurns[0].player === "X") {
        currentPlayer = "0";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      
      return updatedTurns;
    });

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player-2"
            symbol="0"
            isActive={activePlayer === "0"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
    </main>
  );
}

export default App;
