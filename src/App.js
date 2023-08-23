import { useState } from "react";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import Result from "./components/Result";

function App() {
  const [data, setData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    setData(yearlyData);
  };

  const resetHandler = () => {
    setData([]);
  };

  return (
    <div>
      <Header />
      <InvestmentForm onCalculate={calculateHandler} onReset={resetHandler} />
      {data.length !== 0 && <Result data={data} />}
      {data.length === 0 && <p>Data not available</p>}
    </div>
  );
}

export default App;
