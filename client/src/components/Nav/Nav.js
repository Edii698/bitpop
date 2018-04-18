import React from "react";
// import { Link } from "react-router-dom";
import "./Nav.css";
import { Navbar, Modal, Input, NavItem, Row, Button } from 'react-materialize'

const Nav = () => (
  <div className="navbar-fixed animated fadeInDown">
      <Navbar brand='BittPop' className="#03a9f4 light-blue">
              <Modal
                header='Sign in'
                trigger={<NavItem className="right" onClick={() => console.log('test click')}>Get Started</NavItem>}>
                  <Row>
                    <Input placeholder="Name@email.com" s={12} label="Email" type="email"/>
                    <Input type="Password" label="password" s={12} />
                    <Button waves='light' className="#03a9f4 light-blue">Submit</Button>
                  </Row>
              </Modal>
            
              <Modal
                header='Sign up'
                trigger={<NavItem className="right" href='components.html'>Sign Up</NavItem>}>
                <Row>
                  <Input placeholder="Placeholder" s={6} label="First Name" />
                  <Input s={6} label="Last Name" />
                  <Input placeholder="Name@email.com" s={12} label="Email" type="email" />
                  <Input type="Password" label="password" s={12} />
                  <Button waves='light' className="#03a9f4 light-blue">Submit</Button>
                </Row>
              </Modal>
      </Navbar>
  </div>
);

export default Nav;
