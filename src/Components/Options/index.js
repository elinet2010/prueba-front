
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './options.css'

const Options = ({
  title = 'Flotas macarena',
  nit = '1234',
  capa = 'oro',
  segment = 'a',
}) => {
  return (
    <div className="options">
      <Tabs
        defaultActiveKey="operacion"
        id="uncontrolled-tab-example"
        className="mb-3 justify-content-between"
      >
        <Tab eventKey="operacion" title="Operación">
        <div className="content">  <div className="text"> Indique la linea de créditoque quiere considerar</div></div>
        </Tab>
        <Tab eventKey="indicadores" title="Indicadores">
        <div className="content"> Indicadores</div>
        </Tab>
        <Tab eventKey="cliente" title="Cliente" >
        <div className="content">Cliente </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default  Options
