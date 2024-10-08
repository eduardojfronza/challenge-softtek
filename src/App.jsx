import "./css/Home.css";

import Header from "./components/Header";
import Paragraph from "./components/Text/Paragraph";
import Subtitle from "./components/Text/Subtitle";
import Title from "./components/Text/Title";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Title text={"Challenge Softtek"} />
        <Subtitle text={"Melhorando o tempo de respostas de chamados"} />
        <Paragraph
          text={
            "Nesse challenge buscamos melhorar o tempo de resposta que o atendente consegue devolver para o usuário, através de uma filtragem de chamados. Quantos mais casos resolvidos, mais chances de os problemas serem resolvidos em poucos minutos."
          }
        />

        <section>
          <nav className="links">
            <ul>
              <li>
                <a href="/desafio">Desafio</a>
              </li>
              <li>
                <a href="/solucao">Solução</a>
              </li>
              <li>
                <a href="/preview">Preview</a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="video-pitch">
          <article>
            <h3>Pitch 1 - Softtek</h3>
            <iframe
              src="https://www.youtube.com/embed/wC2wBfE3Esg"
              title="Primeiro vídeo Pitch - Softtek - João Trein e Eduardo Fronza"
            ></iframe>
          </article>

          <article>
            <h3>Pitch 2 - Softtek</h3>
            <iframe
              src="https://www.youtube.com/embed/eic8VSWlels"
              title="Segundo vídeo Pitch - Softtek - João Trein e Eduardo Fronza"
            ></iframe>
          </article>

        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
