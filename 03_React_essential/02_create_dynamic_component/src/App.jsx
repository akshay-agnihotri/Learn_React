// import componentImage from "./assets/components.png";
import { CORE_CONCEPTS , EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples  from "./components/Examples.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <div id="core-concepts">
          <h2>Core-Concepts</h2>
          <ul>
            { CORE_CONCEPTS.map( (CORE_CONCEPT)=> <CoreConcepts {...CORE_CONCEPT} /> ) }
          </ul>
          <Examples />
        </div>
      </main>
    </div>
  );
}

export default App;
