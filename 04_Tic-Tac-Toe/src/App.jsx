import "./App.css";
import Player from "../components/Player.jsx";
import GameBoard from "../components/GameBoard.jsx";
import { useState } from "react";
import Log from "../components/Log.jsx";
import { WINNING_COMBINATIONS } from "../WINNING_COMBINATIONS.JS";
import GameOver from "../components/GameOver.jsx";

let winner = null;

let hasDraw = false;

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function check_Winner(gameBoard) {
  for (const combination of WINNING_COMBINATIONS) {
    if (
      gameBoard[combination[0].row][combination[0].column] != null &&
      gameBoard[combination[0].row][combination[0].column] ===
        gameBoard[combination[1].row][combination[1].column] &&
      gameBoard[combination[0].row][combination[0].column] ===
        gameBoard[combination[2].row][combination[2].column]
    ) {
      return gameBoard[combination[0].row][combination[0].column];
    }
  }
  return null;
}

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({
    X: "PLAYER-1",
    0: "PLAYER-2",
  });

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  winner = check_Winner(gameBoard);
  hasDraw = gameTurns.length === 9 && !winner;

  function handleStart() {
    setGameTurns(() => {
      return [];
    });
  }

  function handleSelectPlayer(playerSymbol , newName){
    setPlayers((prvPlayers)=>{
      return {
        ...prvPlayers,
        [playerSymbol]:newName
      }
    })
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);

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
            onChangePlayer={handleSelectPlayer}
          />
          <Player
            initialName="Player-2"
            symbol="0"
            isActive={activePlayer === "0"}
            onChangePlayer={handleSelectPlayer}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={players[winner]} onRestart={handleStart}></GameOver>
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
