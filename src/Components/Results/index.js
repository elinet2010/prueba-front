/* import internal modules */
import Options from "./../Options/index";

const Result = ({
  title = 'Flotas macarena',
  nit = '1234',
  capa = 'oro',
  segment = 'a',
}) => {
  return (
    <div className="result">
      <div className="title">{title}</div>
      <div className="nit">{nit}</div>
      <div className="capa">{capa}</div>
      <div className="segment">{segment}</div>
      <Options></Options>
    </div>
  )
}

export default Result
