import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy, faThumbsUp, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3>Oepp'i Keşfet</h3>
      </div>
      <div className="side-menu"  style={{backgroundColor: '#563d7c'}}>
        <Nav vertical className="list-unstyled pb-3"  >
          <NavItem>
            <NavLink style={{color:'white'}} tag={Link} to={'/category'}>
              <FontAwesomeIcon icon={faGamepad} className="mr-2"/>Kategoriler
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white'}}  tag={Link} to={'/'}>
              <FontAwesomeIcon icon={faHome} className="mr-2"/>Anasayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white'}} tag={Link} to={'/about'}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>Hakkımızda
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'white'}} tag={Link} to={'/Faq'}>
              <FontAwesomeIcon icon={faQuestion} className="mr-2"/>FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  style={{color:'white'}} tag={Link} to={'/support'}>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Support
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink  style={{color:'white'}} tag={Link} to={'/feedback/list'}>
              <FontAwesomeIcon icon={faThumbsUp} className="mr-2"/>Feedback List
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "Home 1",
        target: "Home-1"
      },
      {
        title: "Home 2",
        target: "Home-2",        
      },
      {
        itle: "Home 3",
        target: "Home-3",      
      }
    ],
    [
      {
        title: "Page 1",
        target: "Login",          
      },
      {
        title: "Page 2",
        target: "Registration",        
      },
      {
        title: "Page 3",
        target: "Page-3",        
      }
    ]
  ]

export default SideBar;