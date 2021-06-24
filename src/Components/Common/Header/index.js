/* import external modules */
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const Header = ({ name = 'carlos Gomez', position = 'gerente' }) => {
  return (
    <header className="header">
      <Container>
        <Navbar className="justify-content-between bg-white">
          <Nav>
            <img src="/img/logo.png" alt="logo" width="200px" />
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Text className="nav-text">
              <b>{name}</b>
              <p>{position}</p>
            </Navbar.Text>
            <NavDropdown
              title={<img src="/img/avatar.png" alt="logo" width="30px" />}
              id="navbarScrollingDropdown"
              className="justify-content-end"
            >
              <NavDropdown.Item href="/">salir</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header
