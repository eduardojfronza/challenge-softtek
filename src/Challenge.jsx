import Footer from "./components/Footer"
import Header from "./components/Header"
import SecondParagraph from "./components/Text/SecondParagraph"
import SecondTitle from "./components/Text/SecondTitle"
import "./css/Challenge.css"
import descricaoDesafio from './img/descricao-desafio.png'


function Challenge() {
    return (
        <>
            <Header />

            <main>
                <section>
                    <SecondTitle text={"Desafio a ser resolvido"} />
                    <SecondParagraph text={"Melhorar e aumentar a assertividade e produtividade (agilidade) no atendimento do Service Desk e AMS nível 2."} />
                </section>

                <section className="gap">
                    <SecondTitle text={"Objetivo"} />
                    <SecondParagraph text={"O objetivo deste desafio é desenvolver uma aplicação de assistência técnica alimentada por Inteligência Artificial Generativa ou utilizando outras técnicas, capas de fornecer insights e soluções para os atendentes tanto no Service Desk (nível 1) quanto AMS (Nível 2), com base em uma análise automatizada do histórico de soluções."} />
                </section>

                <section className="read-more">
                    <div className="read-more-title">
                        <h3>Veja mais sobre o desafio</h3>
                        <div className="line" />
                    </div>

                    <div className="challenge-description">
                        <img src={descricaoDesafio} alt="Informações extras sobre o desafio, fornecendo um tabela com dados explicando sobre os parametros para auxiliar a IA." />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Challenge