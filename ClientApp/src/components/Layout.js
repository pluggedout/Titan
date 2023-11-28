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
                a: hover {
                  color: var(--text-color);
                };
                a: visited {
                  color: var(--link-visited-color);
                }; 
                a: active {
                  color: var(--text-color);
                };
                a: link {
                  color: var(--link-color);
                };
                .nav-link .nav-item .text-dark:link {
                  color: var(--link-color);
                };
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
