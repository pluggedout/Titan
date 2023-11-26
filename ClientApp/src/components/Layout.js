import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { Helmet } from 'react-helmet';
import '../custom.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Helmet>
            <style>{`
              'body { 
                background-color: var(--background-color); 
                color: var(--text-color);
              }'
              `}</style>
        </Helmet>
        <NavMenu />
        <Container tag="main">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
