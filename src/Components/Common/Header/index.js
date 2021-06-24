import { connect } from 'react-redux'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import './header.css'

const Header = ({ user }) => {
  return (
    <header className="header">
      <Container>
        <Navbar className="justify-content-between bg-white">
          <Nav>
            <img src="/img/logo.png" alt="logo" width="200px" />
          </Nav>
          {/* solo si existe un usuario muestra la informacion */}
          {user && (
            <Nav className="justify-content-end menu-header">
              <Navbar.Text className="nav-text">
                <b>{user.gerenteRelacion}</b>
                <p>Gererente de relación</p>
              </Navbar.Text>
              <NavDropdown
                title={
                  <>
                    <img
                      className="avatar"
                      src="/img/avatar.png"
                      alt="logo"
                      width="30px"
                    />
                    <img
                      className="hamburger-menu"
                      src="/img/menu.png"
                      alt="logo"
                      width="30px"
                    />
                  </>
                }
                id="navbarScrollingDropdown"
                className="justify-content-end"
              >
                <NavDropdown.Item href="/">salir</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar>
      </Container>
    </header>
  )
}

const mapStateToProps = (state) => ({
  user: state.Users.user,
})

export default connect(mapStateToProps)(Header)
