/* import external modules */
import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../Components/Common/Layout'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Link } from 'react-router-dom'
import { fetchUsers } from '../../Redux/slice/thunk'

const Home = ({ fetchUser }) => {
  const onSelect = () => {
    fetchUser()
  }

  return (
    <Layout>
      <h2 className="title-home">Consulta por usuario</h2>
      <DropdownButton
        id="dropdown-basic-button"
        className="search"
        title="Buscar por nit"
      >
        <ul>
          <li>
            <Link to="/user-zone" onClick={onSelect}>
              800220154
            </Link>
          </li>
          <li>
            <Link to="/user-zone">12345678</Link>
          </li>
        </ul>
      </DropdownButton>
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUsers()),
})

export default connect(null, mapDispatchToProps)(Home)
