import React, { useEffect, useState } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import '../index.css';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const countPositiveFeedbackPercentage = () => {
      const count = (good * 100) / (good + neutral + bad);
      const rountCount = Math.round(count);
      setPercent(rountCount);
    };

    const countTotal = () => {
      setTotal(good + neutral + bad);
    };
    countPositiveFeedbackPercentage();
    countTotal();
  }, [good, neutral, bad]);

  const handleClick = ({ target: {name} }) => {
    console.log(name);
    switch (name) {
      case "Good":
        setGood(prev => prev + 1);
        break;
      case "Neutral":
        setNeutral(prev => prev + 1);
        break;
      case "Bad":
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  // const handleClickGood = () => {
  //   setGood(prev => prev + 1);
  // };
  // const handleClickNeutral = () => {
  //   setNeutral(prev => prev + 1);
  // };
  // const handleClickBad = () => {
  //   setBad(prev => prev + 1);
  // };

  return (
    <>
      <Section title="Please leave your feedback">
        {' '}
        <FeedbackOptions
          handleClick = {handleClick}
          // handleClickGood={handleClickGood}
          // handleClickNeutral={handleClickNeutral}
          // handleClickBad={handleClickBad}
        />
      </Section>
      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percent={percent}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
