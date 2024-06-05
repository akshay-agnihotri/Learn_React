import { PropTypes } from "prop-types";

GameBoard.propTypes = {
  onSelectSquare: PropTypes.any.isRequired,
  board: PropTypes.any.isRequired,
};



export default function GameBoard({ onSelectSquare, board }) {

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!==null}>
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
