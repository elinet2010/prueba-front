/* import external modules */
import React from 'react'
import Layout from '../../Components/Common/Layout'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'

const Home = () => {
  const onSelect = (code) => {
    console.log(code)
  }
  return (
    <Layout>
      <DropdownButton id="dropdown-basic-button" className="search" title="Buscar por nit">
        <ul>
          <li>
            <Link to="/user-zone" onClick={() => onSelect(800220154)}>
              800220154
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => onSelect(12345678)}>
              12345678
            </Link>
          </li>
        </ul>
      </DropdownButton>
    </Layout>
  )
}

export default Home
