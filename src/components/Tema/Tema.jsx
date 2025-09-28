import "./Tema.css";

function Tema({ tema }) {
  return (
    <h3 className="titulo-tema">{tema.nome}</h3>
  );
}

export default Tema;