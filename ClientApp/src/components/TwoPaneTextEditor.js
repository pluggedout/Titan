import React, { Component } from 'react';

class TwoPaneTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  };

  render() {
    const { inputValue } = this.state;
    const reversedText = inputValue.split('').reverse().join('');

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h1>Hello, world!</h1>
          <p>Welcome to your two-pane text editor:</p>
          <div>
            <textarea
              rows="10"
              cols="40"
              placeholder="Type text here..."
              value={inputValue}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h2>Reversed Text:</h2>
          <div>
            <p>{reversedText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TwoPaneTextEditor;