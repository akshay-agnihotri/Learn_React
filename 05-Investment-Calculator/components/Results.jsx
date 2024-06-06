import {
  calculateInvestmentResults,
  formatter,
} from "../src/util/investment.js";

export default function Results({ input }) {
  const investmentResults = calculateInvestmentResults(input);
  let initialInvestment;
  if (investmentResults[0]) {
    initialInvestment =
      investmentResults[0].valueEndOfYear -
      investmentResults[0].interest -
      investmentResults[0].annualInvestment;
  }

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interset (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {investmentResults[0] &&
            investmentResults.map((resultData) => {
              const totalInterest =
                resultData.valueEndOfYear -
                resultData.annualInvestment * resultData.year -
                initialInvestment;
              const investedCapital = resultData.valueEndOfYear - totalInterest;
              return (
                <tr key={resultData.year}>
                  <td>{resultData.year}</td>
                  <td>{formatter.format(resultData.valueEndOfYear)}</td>
                  <td>{formatter.format(resultData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(investedCapital)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!investmentResults[0] && <p className="center">Please enter duration greater than zero</p>}
    </>
  );
}
