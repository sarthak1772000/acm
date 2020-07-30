import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Button, Jumbotron } from 'reactstrap';
import { Navlink, NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <React.Fragment>
            <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img className="d-block img-fluid img-responsive"
                                src={require('./images/acm.png')} alt="ACM" 
                            />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                            <span className="fa fa-info fa-lg"></span> About Us 
                                        </a>
                                        <div className="dropdown-menu">
                                            <NavLink className="dropdown-item nav-link" id="nav1" to="/aboutus">About<span className="fa fa-info pull-right"></span></NavLink>
                                            <a className="dropdown-item" href="#">Main Board<span className="fa fa-group pull-right"></span></a>
                                            <a className="dropdown-item" href="#">Assistant Board<span className="fa fa-group"></span></a>
                                            <a className="dropdown-item" href="#">Members<span className="fa fa-group pull-right"></span></a>
                                            <a className="dropdown-item" href="#">Alumni<span className="fa fa-group pull-right"></span></a>
                                        </div>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="dropdown">
                                        <a className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                            <span className="fa fa-pencil fa-lg"></span> Activities
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Events<span className="fa fa-pencil fa-lg pull-right"></span></a>
                                            <a className="dropdown-item" href="#">Sessions<span className="fa fa-pencil fa-lg pull-right"></span></a>
                                            <a className="dropdown-item" href="#">Projects<span className="fa fa-pencil fa-lg pull-right"></span></a>
                                            <a className="dropdown-item" href="#">Research Symposium<span className="fa fa-pencil fa-lg "></span></a>
                                            <a className="dropdown-item" href="#">View All Activities<span className="fa fa-pencil fa-lg pull-right"></span></a>
                                        </div>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" to="#">
                                        <span className="fa fa-edit fa-lg"></span> Blog
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" to="#">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </a>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button >
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                </React.Fragment>
        );
    }
}


export default Header;