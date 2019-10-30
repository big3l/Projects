import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Navbar color="warning" light expand='md' >
                    <NavbarBrand href="/">About Me</NavbarBrand>
                    <Nav navbar>
                        <NavItem className='navStyle'>
                            <NavLink to='/me' activeClassName="chosen">Me</NavLink>
                        </NavItem>
                        <NavItem className='navStyle'>
                            <NavLink to='/hobbies' activeClassName="chosen">Hobbies</NavLink>
                        </NavItem>
                        <NavItem className='navStyle'>
                            <NavLink to='/contact' activeClassName="chosen">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
