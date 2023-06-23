import React from "react";
import { Statistics } from "./statistics/Statistics";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Section } from "./section/Section";
import { Notification } from "./notification/Notification";
import '../index.css';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prev => {
      return {
        good: prev.good + 1,
      };
    });
  };
  handleClickNeutral = () => {
    this.setState(prev => {
      return {
        neutral: prev.neutral + 1,
      };
    });
  };
  handleClickBad = () => {
    this.setState(prev => {
      return {
        bad: prev.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const count =
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad);
    return Math.round(count);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(Object.values(this.state));
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave your feedback">
          {' '}
          <FeedbackOptions
            handleClickGood={this.handleClickGood}
            handleClickNeutral={this.handleClickNeutral}
            handleClickBad={this.handleClickBad}
          />
        </Section>
        {total >= 1 ? (
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
  }
}

export default App