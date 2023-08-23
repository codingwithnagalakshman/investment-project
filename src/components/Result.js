import styles from "./Result.module.css";

const Result = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const result = props.data;
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((val) => (
          <tr key={val.year}>
            <td>{val.year}</td>
            <td>{formatter.format(val.savingsEndOfYear)}</td>
            <td>{formatter.format(val.yearlyInterest)}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Result;
