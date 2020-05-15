import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import {  Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import axios from 'axios';

class NavBar extends Component {
  constructor(props){
      super(props);
      this.state = {
        isOpen: false,
        isLoggedIn: false
      }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/user/profile', {withCredentials: true}).then(res => {
      console.log(res); //logged in
      this.setState({
        isLoggedIn: true
      })
    })
  }

  setOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <Navbar className="navbar shadow-sm p-3 mb-5  rounded navbar-fixed-top navbar-oepp" fixed="top" expand="md">
          <Button color="info" onClick={this.props.toggle}>
            <FontAwesomeIcon icon={faAlignLeft}/>
          </Button>
          <NavbarToggler onClick={this.setOpen.bind(this)} />
          <Form className="form-center search-oepp" style={{paddingLeft:300}} >
            <FormControl type="text" placeholder="Search" className=""/>
          </Form>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.isLoggedIn ? 
                <Fragment>
                  <NavItem>
                    <NavLink style={{color:'white', fontSize:'medium'}}  tag={Link} to={'/Profile'}><Button color="info" size="lg">Profile &nbsp;&nbsp;<FontAwesomeIcon icon={faUserCog}></FontAwesomeIcon></Button></NavLink>
                  </NavItem>
                  <NavItem style={{marginTop:15}}>
                    <a style={{color:'white' , fontSize:'medium'}}  tag={Link} href={'http://localhost:3001/user/logout'}><Button color="info" size="lg">Logout&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></Button></a>
                  </NavItem>
                </Fragment>
              : 
                <Fragment>
                  <NavItem>
                    <NavLink style={{color:'white', fontSize:'medium'}}  tag={Link} to={'/Login'}><Button color="info" size="lg">Sign in</Button></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink style={{color:'white' , fontSize:'medium'}}  tag={Link} to={'/Registration'}><Button color="info" size="lg"> Sign up</Button></NavLink>
                  </NavItem>
                </Fragment>
              }
            </Nav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;