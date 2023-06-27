import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <h2>Statistics</h2>
      <p className={css.item}>
        Good: <span className={css.number}> {good}</span>
      </p>
      <p className={css.item}>
        Neutral: <span className={css.number}> {neutral}</span>
      </p>
      <p className={css.item}>
        Bad: <span className={css.number}>{bad}</span>
      </p>
      <p className={css.item__calc}>
        Total:<span className={css.item}>{total}</span>
      </p>
      <p className={css.item__calc}>
        Good percentage: <span> {positivePercentage} %</span>
      </p>
    </div>
  );
};

export default Statistics;
