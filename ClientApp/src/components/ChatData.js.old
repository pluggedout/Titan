import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class ChatData extends Component {
  static displayName = ChatData.name;

  constructor(props) {
    super(props);
    this.state = { querydata: [], loading: true };
  }

  componentDidMount() {
    this.populateChatData();
  }

  static renderForecastsTable(querydatas) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Reponses</th>
          </tr>
        </thead>
        <tbody>
          {querydatas.map(querydata =>
            <tr key={querydata.created}>
              <td>{querydata.choices[0].text}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : ChatData.renderForecastsTable(this.state.querydata);

    return (
      <div>
        <h1 id="tableLabel">ChatGPT data</h1>
        <p>This component demonstrates fetching data from the ChatGPT server.</p>
        {contents}
      </div>
    );
  }

  async populateChatData() {
    const token = await authService.getAccessToken();
    const response = await fetch('chat', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ querydata: data, loading: false });
  }
}
