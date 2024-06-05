import gameLogo from '../public/game-logo.png';

export default function Header(){
    return (
        <header>
        <img src={gameLogo} alt="Hand-drawn Tic-Tac-Toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
    );
}