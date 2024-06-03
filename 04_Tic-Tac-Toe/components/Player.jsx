import PropTypes from "prop-types";
import { useState } from "react";

Player.propTypes = {
  initialName: PropTypes.any.isRequired,
  symbol: PropTypes.any.isRequired,
  isActive: PropTypes.any.isRequired,
};

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setisEditing((editing) => !editing);
  }

  function updatePlayerName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {isEditing && (
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={updatePlayerName}
          ></input>
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button className="edit" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
