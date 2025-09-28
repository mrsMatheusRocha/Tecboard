import Botao from "../Botao/Botao";
import CampoFormulario from "../CampoFormulario/CampoFormulario";
import Input from "../Input/Input";
import Label from "../Label/Label";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import TituloFormulario from "../TituloFormulario/TituloFormulario";
import "./FormularioEvento.css";

export default function FormularioEvento({ itens, aoSubmeter }) {
  function aoSubmeterForm(formData) {
    const evento = {
      capa: formData.get("capa"),
      tema: itens.find((item) => item.id == formData.get("temaEvento")),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nomeEvento"),
    };
    aoSubmeter(evento);
  }

  return (
    <form action={aoSubmeterForm} className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <Input type="text" id="nomeEvento" name="nomeEvento" placeholder="Summer Dev Hits" />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <Input type="text" id="capa" name="capa" placeholder="https://..." />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <Input type="date" id="dataEvento" name="dataEvento" />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSuspensa id="temaEvento" name="temaEvento" itens={itens} />
        </CampoFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
    </form>
  );
}
