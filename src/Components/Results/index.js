import { connect } from 'react-redux'
import Options from './../Options/index'
import './result.css'
import { Link } from 'react-router-dom'

const Result = ({ user }) => {
  return (
    <>
      {user ? (
        <div className="result">
          <div className="title">{user.nombre}</div>
          <div className="nit">NIT: {user.nit}</div>
          <div className="flex">
            <div className="capa">Capa: {user.capa}</div>
            <div className="segment">Segmento: {user.segment}</div>
          </div>
          <Options></Options>
        </div>
      ) : (
        <div className="result">
          <div className="title">
            El usuario no existe <br /> <Link to="/">ir al inicio</Link>
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.Users.user,
})

export default connect(mapStateToProps)(Result)
