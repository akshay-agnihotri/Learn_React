import logo from "../src/assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <main>
      <div id="header">
        <h1>Investment Calculator App</h1>
        <img src={logo} alt="Investment Calculator image" />
      </div>
    </main>
  );
}
