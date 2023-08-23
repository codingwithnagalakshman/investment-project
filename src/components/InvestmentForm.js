import { useState } from "react";
import styles from "./InvestmentForm.module.css";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlySavings, setYearlySavings] = useState(1200);
  const [interest, setInterest] = useState(7);
  const [duration, setDuration] = useState(10);

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const interestRateHandler = (event) => {
    setInterest(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": interest,
      duration: duration
    };
    props.onCalculate(inputData);
  };

  const resetFormHandler = (event) => {
    event.preventDefault();
    setCurrentSavings(10000);
    setYearlySavings(1200);
    setInterest(7);
    setDuration(10);
    props.onReset();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSavings}
            onChange={currentSavingsHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySavings}
            onChange={yearlySavingsHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={interest}
            onChange={interestRateHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={durationHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetFormHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
