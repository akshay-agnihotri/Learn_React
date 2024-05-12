const reactDescription = ["Fundamental", "Crucial", "Core"];
import image from "./assets/react-core-concepts.png";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      {/* Here we have defined our componet 
      that we have just build above using Header function */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
