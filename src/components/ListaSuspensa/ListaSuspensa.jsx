import "./ListaSuspensa.css";

export default function ListaSuspensa({id, name, itens}) {
  return (
    <select name={name} id={id} className="lista-suspensa-form" defaultValue="">
      <option disabled value="">Selecione uma opção</option>
      {itens.map((item) => {
        return <option key={item.id} value={item.id}>{item.nome}</option>
      })}
    </select>
  )
}
