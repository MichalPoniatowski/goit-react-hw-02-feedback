import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonBox}>
      <p>Test - FeedbackOptions is rendering</p>
      {options.map((buttonName, index) => (
        <button
          className={css.button}
          key={index}
          onClick={() => onLeaveFeedback(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
