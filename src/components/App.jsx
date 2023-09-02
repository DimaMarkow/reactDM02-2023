import { Component } from 'react';
import FeedbackButton from './FeedbackButton/FeedbackButton';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good;
    const result = ((value / total) * 100).toFixed(0);
    return Number(result);
  };

  render() {
    const totalStat = this.countTotalFeedback();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackButton handleClick={this.handleClick} />
        </Section>
        {totalStat ? (
          <Section title="Statistics">
            <Statistics
              date={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section>
        )}
        {/* {!totalStat && (
          <Section title="Statistics">
            <Notification message="There is no feedback" />
          </Section>
        )} */}
      </div>
    );
  }
}

export default App;
