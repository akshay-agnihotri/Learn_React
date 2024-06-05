import PropTypes from 'prop-types';

GameOver.propTypes = {
    winner:PropTypes.any.isRequired,
    onRestart:PropTypes.any.isRequired,
}

export default function GameOver({winner , onRestart}){
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {winner && <p>{winner} win!</p>}
            {!winner && <p>It&apos;s a draw</p>}
            <button onClick={onRestart}>Rematch!</button>
        </div>
    );
}