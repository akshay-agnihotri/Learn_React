// import componentImage from "./assets/components.png";
import { useState } from "react";
import { CORE_CONCEPTS , EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic , updateData] = useState('components');
  function handleSelect(componentSelected){
    updateData(componentSelected);
  }
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
              <TabButton isSelected={selectedTopic==="components"} onSelect={()=>handleSelect('components')}>components</TabButton>
              <TabButton isSelected={selectedTopic==="jsx"} onSelect={()=>handleSelect('jsx')}>jsx</TabButton>
              <TabButton isSelected={selectedTopic==="props"} onSelect={()=>handleSelect('props')}>props</TabButton>
              <TabButton isSelected={selectedTopic==="state"} onSelect={()=>handleSelect('state')}>state</TabButton>
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
