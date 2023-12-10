import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { Helmet } from 'react-helmet';
import '../custom.css';

export class ChatData extends Component {
  static displayName = ChatData.name;

      // Define custom CSS styles as constants
      customTableStyle = {
        backgroundColor: 'var(--background-color)', 
        border: '2px solid #1e90ff', // Blue border
      };
    
      customListStyle = {
        listStyleType: 'none', // Remove bullet points
        backgroundColor: 'var(--background-color)', // Fix: Add 'var' and proper value
        padding: '0',
      };
    
      customListItemStyle = {
        // borderBottom: '1px solid #1e90ff',
        padding: '8px',
        backgroundColor: 'var(--background-color)', // Fix: Add 'var' and proper value
        color: 'var(--text-color)', // Fix: Add 'var' and proper value
      };

  constructor(props) {
    super(props);
    this.state = { querydata: [], question: '', loading: true };
  }



  componentDidMount() {
    this.loadChatHistoryFromLocalStorage();
  }

  renderForecastsTable(querydatas) {
    return (
        <table className="table" style={this.customTableStyle} aria-labelledby="tableLabel">
        <tbody>
          {querydatas.map((querydata, index) => (
            <tr key={index}>
              <td>
                <ul style={this.customListStyle}>
                  {querydata.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex} style={this.customListItemStyle}>
                      {choice.text}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  handleInputChange = (e) => {
    this.setState({ question: e.target.value });
  }

  handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      this.sendQuestionToBackend();
    }
  }

  sendQuestionToBackend = async () => {
    const token = await authService.getAccessToken();
    const response = await fetch('chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ question: this.state.question }),
    });

    if (response.ok) {
      const data = await response.json();
      this.updateChatHistory(data);
    }
  }

  updateChatHistory(newData) {
    const chatHistory = [...newData, ...this.state.querydata];
    this.setState({ querydata: chatHistory, loading: false });
    this.saveChatHistoryToLocalStorage(chatHistory);
  }

  loadChatHistoryFromLocalStorage() {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    this.setState({ querydata: chatHistory, loading: false });
  }

  saveChatHistoryToLocalStorage(chatHistory) {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : this.renderForecastsTable(this.state.querydata);

    return (
      <div>
        <h1 id="tableLabel">ChatGPT data</h1>
        <p>This component demonstrates fetching data from the OpenAI ChatGPT server.</p>
        <div style={{ display: "flex" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Ask a question"
            value={this.state.question}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            onFocus={() => this.setState({ question: '' })} // Clear input on focus
            style={{ marginBottom: "10px" }}
          />
          <button
            className="btn btn-lg btn-primary"
            onClick={this.sendQuestionToBackend}
            style={{ marginLeft: "10px", marginBottom: "10px" }} // Add margin to the button
          >
            Send
          </button>
        </div>
        {contents}
      </div>
    );
  }
}
