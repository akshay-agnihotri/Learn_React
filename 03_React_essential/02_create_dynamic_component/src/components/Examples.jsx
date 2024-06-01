import TabButton  from "./TabButton.jsx";
import { EXAMPLES} from "../data.js";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, updateData] = useState("components");
  function handleSelect(componentSelected) {
    updateData(componentSelected);
  }
  return (
    <>
      <section id="examples">
        <h1>Examples</h1>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleSelect("components")}
          >
            components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleSelect("jsx")}
          >
            jsx
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleSelect("props")}
          >
            props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleSelect("state")}
          >
            state
          </TabButton>
        </menu>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      </section>
    </>
  );
}
