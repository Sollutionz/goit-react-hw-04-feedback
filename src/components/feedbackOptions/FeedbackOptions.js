import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({handleClick}) => {
  return (
    <>
      <button
        className={css.button}
        name="Good"
        type="button"
        onClick={handleClick}
      >
        Good
      </button>
      <button
        className={css.button}
        name="Neutral"
        type="button"
        onClick={handleClick}
      >
        Neutral
      </button>
      <button
        className={css.button}
        name="Bad"
        type="button"
        onClick={handleClick}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleClick: PropTypes.func.isRequired,
};