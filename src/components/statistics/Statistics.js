import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percent,
}) => {
  return (
    <div>
      <div>
        <ul className={css.list}>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li className={css.item}>Total: {total}</li>
          <li className={css.item}>Percent: {percent}%</li>
        </ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
}