import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

import './options.css'

const Options = () => {
  return (
    <div className="options">
      <Tabs
        defaultActiveKey="operacion"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-between"
      >
        <Tab eventKey="operacion" title="Operación">
          <div className="content">
            <div className="text-secundary">
              Indique la linea de crédito que quiere considerar
            </div>

            <Row className="justify-content-md-center">
              <Col xs={12} md="auto">
                <div className="scroll">
                  <div className="container-card">
                    <Card border="secondary" style={{ width: '15rem' }}>
                      <Card.Body>
                        <Card.Img variant="top" src="/img/cartera.jpg" />
                        <Card.Title>Cartera ordinaria</Card.Title>
                      </Card.Body>
                      <Card.Footer>
                        <div className="text-secundary">Continuar</div>
                      </Card.Footer>
                    </Card>

                    <Card
                      border="secondary"
                      style={{ width: '15rem' }}
                      className="disabled"
                    >
                      <Card.Body>
                        <Card.Img variant="top" src="/img/leasing.jpg" />
                        <Card.Title>Leasing</Card.Title>
                      </Card.Body>
                      <Card.Footer>
                        <div className="text-secundary">Continuar</div>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Alert variant="warning">
                  <img src="/img/mark.png" alt="warning" width="20px"/>
                  Las demas lineas de credito no estan disponibles por el momento
                </Alert>
              </Col>
            </Row>
          </div>
        </Tab>
        <Tab eventKey="indicadores" title="Indicadores">
          <div className="content">
            <div className="text-secundary">Indicadores</div>
          </div>
        </Tab>
        <Tab eventKey="cliente" title="Cliente">
          <div className="content">
            <div className="text-secundary">Cliente</div>{' '}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Options
