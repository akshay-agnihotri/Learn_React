// import componentImage from "./assets/components.png";
// import { Component } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      {/* Here we have defined our componet 
      that we have just build above using Header function */}
      <main>
        <div id="core-concepts">
          <h2>Core-Concepts</h2>
          <ul>
            <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
          <section id="examples">
            <h1>Examples</h1>
            <menu>
              <TabButton>Components</TabButton>
              <TabButton>JSX</TabButton>
              <TabButton>Props</TabButton>
              <TabButton>States</TabButton>
            </menu>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;