import "./CampoFormulario.css";

export default function CampoFormulario({children}) {
  return (
    <fieldset className="campo-form">
      {children}
    </fieldset>
  )
}