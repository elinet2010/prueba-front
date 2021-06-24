/* import external modules */
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-lg-end justify-content-md-center justify-content-sm-center" >
          <Col xs="auto" md={3} lg={2} >
            <img src="/img/footer.png" alt="logo" width="150px" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
