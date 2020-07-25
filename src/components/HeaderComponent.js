import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,Button, Jumbotron } from 'reactstrap';

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
                                    <a className="nav-link" href="#">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" to="#">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" to="#">
                                        <span className="fa fa-pencil fa-lg"></span> Activities
                                    </a>
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
                <Jumbotron>
                <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>WCE ACM STUDENT CHAPTER</h1>
                            </div>      
                        </div>
                    </div>
                </Jumbotron>
                </React.Fragment>
        );
    }
}


export default Header;