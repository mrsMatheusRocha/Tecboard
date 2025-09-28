import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { CardEvento } from "./components/CardEvento/CardEvento";
import FormularioEvento from "./components/FormularioEvento/FormularioEvento";
import Tema from "./components/Tema/Tema";

function App() {
  const temas = [
    { id: 1, nome: "front-end" },
    { id: 2, nome: "back-end" },
    { id: 3, nome: "devops" },
    { id: 4, nome: "inteligência artificial" },
    { id: 5, nome: "data science" },
    { id: 6, nome: "cloud" },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo Tecboard" />
      </header>
      <Banner />
      <FormularioEvento itens={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map((tema) => {
          if (!eventos.some((evento) => {
            return evento.tema.id == tema.id
          })) {
            return null;
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <section className="eventos">
                {eventos
                .filter((evento) => {
                  return evento.tema.id === tema.id;
                })
                .map((evento, index) => {
                  return <CardEvento evento={evento} key={index} />;
                })}
              </section>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
