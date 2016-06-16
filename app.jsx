import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Panel } from 'react-bootstrap';

const navbarInstance = (
    <div>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Course Platform</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Text>
        Signed in as: <Navbar.Link href="#">Gabriel Ferreira</Navbar.Link>
      </Navbar.Text>
      <Navbar.Text pullRight>
        Be welcome!
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  </div>
);

ReactDOM.render(navbarInstance, document.getElementById('here'));
