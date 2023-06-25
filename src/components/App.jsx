import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './/FeedbackOptions';
import Notification from './Notification';
// import './App.css';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) return 0;
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  changeState = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
    console.log('checking');
  };

  render() {
    return (
      // <Section title={'Please leave feedback'}>
      //   <FeedbackOptions
      //     options={Object.keys(this.state)}
      //     onLeaveFeedback={this.changeState}
      //   ></FeedbackOptions>
      //   {this.countTotalFeedback()} ? //{' '}
      //   <Statistics
      //     good={this.state.good}
      //     neutral={this.state.neutral}
      //     bad={this.state.bad}
      //     total={this.countTotalFeedback()}
      //     positivePercentage={this.countPositiveFeedbackPercentage()}
      //   ></Statistics>{' '}
      //   : <Notification message="There is no feedback"></Notification>
      //   //{' '}
      // </Section>

      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.changeState}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;

// class App extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = event => {
//     const buttonName = event.target.name;
//     if (buttonName === 'good') {
//       this.setState((state, props) => ({
//         good: state.good + props.step,
//       }));
//     } else if (buttonName === 'neutral') {
//       this.setState((state, props) => ({
//         neutral: state.neutral + props.step,
//       }));
//     } else if (buttonName === 'bad') {
//       this.setState((state, props) => ({
//         bad: state.bad + props.step,
//       }));
//     }
//   };

//   countTotalFeedback = () => {
//     let total = 0;
//     total = this.state.good + this.state.bad + this.state.neutral;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     let positive = 0;
//     positive = Math.round(
//       (this.state.good /
//         (this.state.bad + this.state.neutral + this.state.good)) *
//         100
//     );
//     return positive;
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           Please leave feedback
//           <div>
//             <button type="button" name="good" onClick={this.handleFeedback}>
//               Good
//             </button>
//             <button type="button" name="neutral" onClick={this.handleFeedback}>
//               Neutral
//             </button>
//             <button type="button" name="bad" onClick={this.handleFeedback}>
//               Bad
//             </button>
//           </div>
//           <section>
//             <h2>
//               Statistics
//               <ul>
//                 <li>Good: {this.state.good}</li>
//                 <li>Neutral {this.state.neutral}</li>
//                 <li>Bad {this.state.bad}</li>
//                 <li>Total {this.countTotalFeedback()}</li>
//                 <li>
//                   Positive feedback {this.countPositiveFeedbackPercentage()} %
//                 </li>
//               </ul>
//             </h2>
//           </section>
//         </h1>
//       </div>
//     );
//   }
// }
