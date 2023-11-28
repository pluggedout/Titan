import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react'; 
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';
import logoImage from './TitanLogo.svg';

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [hasAttribute, setHasAttribute] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const toggleAttribute = () => {
    setHasAttribute(prevState => !prevState);
  };

  useEffect(() => {
    if (hasAttribute) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [hasAttribute]);

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
        <NavbarBrand tag={Link} to="/">
          <img src={logoImage} alt="Logo" style={{ maxWidth: '128px', width: '100%', height: 'auto' }}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
            </NavItem>
            { <NavItem>
              <NavLink onClick={toggleAttribute} tag={Link} className="text-dark" to="#">Light/Dark</NavLink>
            </NavItem>
            /*<NavItem>
              <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/chat-data">Chatbot</NavLink>
            </NavItem>              
            <LoginMenu>
            </LoginMenu>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

//export default NavMenu;
