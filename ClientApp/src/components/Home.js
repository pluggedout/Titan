import React, { Component } from 'react';
//import Box from './Box/Box';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1>Welcome to Energy Investment Platform</h1>
            <p>Chat with our AI to predict energy price fluctuations based on global politics, public sentiment, and statistical data.</p>
            <p>This platform empowers you to make informed investment decisions in the energy market.</p>
          </div>
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">AI Chat</h5>
                <div className="chat-container">
                  {/* Insert your AI chat component here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <h2>About Us</h2>
            <p>We are dedicated to providing you with the most advanced tools and data analysis to optimize your energy investments. Our AI chat feature keeps you updated on the latest trends and predictions in the energy market.</p>
          </div>
          <div className="col-lg-6">
            <h2>How It Works</h2>
            <p>Our AI chat analyzes data from global politics, public sentiment, and statistical sources to provide real-time predictions for energy price fluctuations. You can ask questions, get insights, and make informed investment decisions.</p>
          </div>
        </div>
      </div>
    );
  }
}
