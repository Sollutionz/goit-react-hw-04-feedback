import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
    <>
      <button
        className={css.button}
        name="Good"
        type="button"
        onClick={handleClickGood}
      >
        Good
      </button>
      <button
        className={css.button}
        name="Neutral"
        type="button"
        onClick={handleClickNeutral}
      >
        Neutral
      </button>
      <button
        className={css.button}
        name="Bad"
        type="button"
        onClick={handleClickBad}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};