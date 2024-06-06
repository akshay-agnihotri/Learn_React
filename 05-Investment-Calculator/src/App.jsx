import Header from "../components/Header";
import UserInput from "../components/UserInput";
import Results from "../components/Results";
import { useState } from "react";

const initialInputData = {
  initialInvestment: null,
  annualInvestment: null,
  expectedReturn: null,
  duration: null,
};

function App() {
  const [inputData, updateData] = useState(initialInputData);

  function onChangeUpdateData(value, symbol) {
    updateData((prvData) => {
      return {
        ...prvData,
        [symbol]: +value, //here we have added + to convert it from string to number
      };
    });
  }

  return (
    <main>
      <Header />
      <UserInput onChange={onChangeUpdateData} />
      <Results input={inputData} />
    </main>
  );
}

export default App;
