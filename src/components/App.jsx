import { Component } from 'react';
import Feedback from 'components/Feedback/Feedback';
import Header from 'components/Header/Header';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    showFeedback: false,
    showContacts: false,
  };

  showFeedback = () => {
    this.setState(state => ({ showFeedback: !state.showFeedback }));
  };

  showContacts = () => {
    this.setState(state => ({ showContacts: !state.showContacts }));
  };

  render() {
    return (
      <>
        <Header
          showFeedback={this.showFeedback}
          showContacts={this.showContacts}
        />
        {this.state.showFeedback && <Feedback />}
        {this.state.showContacts && <Contacts />}
      </>
    );
  }
}

export default App;
