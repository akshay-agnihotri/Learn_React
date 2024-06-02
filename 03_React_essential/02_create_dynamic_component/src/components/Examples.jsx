import Tab from "./Tab.jsx";
import TabButton  from "./TabButton.jsx";
import TabContent from "./TabContent.jsx";
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
        <Tab TabContainer="menu"
          buttons={
            <>
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
            </>
          }
        />
        <TabContent selectedTopic={selectedTopic} />
      </section>
    </>
  );
}
