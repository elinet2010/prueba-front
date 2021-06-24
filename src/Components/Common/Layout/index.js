/* import external modules */
import React from 'react'

/* import internal modules */
import Header from './../Header/index'
import Footer from './../Footer/index'

import Container from 'react-bootstrap/Container'
import Main from '../Main'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children} </Container>
      </Main>
      <Footer />
    </>
  )
}

export default Layout
