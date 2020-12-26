import React, { Component } from 'react';
import './App.css';

import Message from './MessageContent/Message';

class App extends Component {
  messageHandler = () => {
    this.setState({
      showMessage: true
    })
  };

  state = {
    showMessage: false
  }

  render() {
    return (
        <div className="App">
          <div style={{position: "fixed", "top": 0, "right": 0}}>
            <button id="btn1" onClick={this.messageHandler}>Show simple message!</button>
          </div>
          { this.state.showMessage && <Message/> }
        </div>
    );
  }
}

export default App;