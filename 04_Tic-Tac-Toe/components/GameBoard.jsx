import { PropTypes } from "prop-types";

GameBoard.propTypes = {
  onSelectSquare: PropTypes.any.isRequired,
  turns: PropTypes.any.isRequired,
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
let gameBoard = initialGameBoard;


// if(turns.length >0){
//     const {player , square} = turns[0];
//     const {row,col} = square;
//     gameBoard[row][col] = player;
// }

for (const turn of turns){
    const {player , square} = turn;
    const {row,col} = square;
    gameBoard[row][col] = player;
}

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
