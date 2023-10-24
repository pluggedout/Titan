import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';

export class ChatData extends Component {
  static displayName = ChatData.name;

  constructor(props) {
    super(props);
    this.state = { querydata: [], question: '', loading: true };
  }

  // componentDidMount() {
  //   this.populateChatData();
  // }

  static renderForecastsTable(querydatas) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Question</th>
          </tr>
          <tr>
            <th>Reponses</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <textarea>{querydatas.question}</textarea>
            </td>
          </tr>
          {querydatas.map(querydata => (
            <tr key={querydata.created}>
              <td>{querydata.choices[0].text}</td>
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
      this.setState({ querydata: data, loading: false });
    }
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ChatData.renderForecastsTable(this.state.querydata);

    return (
      <div>
        <h1 id="tableLabel">ChatGPT data</h1>
        <p>This component demonstrates fetching data from the ChatGPT server.</p>
        <input
          type="text"
          placeholder="Ask a question"
          value={this.state.question}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.sendQuestionToBackend}>Send</button>
        {contents}
      </div>
    );
  }
}
