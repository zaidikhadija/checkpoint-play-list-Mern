import React from 'react';
import {useState} from "react";


import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

export const AppNavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
             <Navbar color="dark" expand="sm" className="mb-5" >
                 <Container>
        <NavbarBrand href="/" className="mr-auto">Shopping-List</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/bradtraversy">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
        </div>
    )
}

export default AppNavBar;