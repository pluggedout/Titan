import React, { Component } from 'react';

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


// import React, { Component } from 'react';

// export class Home extends Component {
//   static displayName = Home.name;

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <p>Welcome to your new single-page application, built with:</p>
//         <ul>
//           <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
//           <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
//           <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
//         </ul>
//         <p>To help you get started, we have also set up:</p>
//         <ul>
//           <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
//           <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
//           <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
//         </ul>
//         <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
//       </div>
//     );
//   }
// }
