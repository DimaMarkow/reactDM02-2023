import { Component } from 'react';
import Feedback from './Feedback';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Homework-DM-02
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="container-fluid justify-content-start">
                <button
                  className="btn btn-sm btn-outline-success me-2"
                  type="button"
                >
                  Feedback
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  type="button"
                >
                  Contacts
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
