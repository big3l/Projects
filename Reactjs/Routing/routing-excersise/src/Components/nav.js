import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar color="warning" light expand='md' >
                    <NavbarBrand href="/">About Me</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/me'>Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/hobbies'>Hobbies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
