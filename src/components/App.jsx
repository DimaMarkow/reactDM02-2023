import { Component } from 'react';
import Feedback from 'components/Feedback/Feedback';
import Header from 'components/Header/Header';

class App extends Component {
  state = {
    showFeedback: false,
    showContacts: false,
  };

  showFeedback = () => {
    this.setState(state => ({ showFeedback: !state.showFeedback }));
  };

  render() {
    return (
      <>
        <Header showFeedback={this.showFeedback} />
        {this.state.showFeedback && <Feedback />}
      </>
    );
  }
}

export default App;
