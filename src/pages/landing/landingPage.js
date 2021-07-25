import React from 'react'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Foto_site from "../../assets/Foto_site.png"
import "./style.css";


const LandingPage = () => {
    return(
        <>
            <Header />
            <div class= "introduction-landing">
            <img src={Foto_site}/>
                <div class = "text">
                    <p>A quem possa interessar,</p>
                    <p>Desde que eu comecei a dar um grau de seriedade a mais aos meus estudos, eu usei bastante os livros que tinha ao meu alcance, alguns dos quais muito me marcaram, como a coleção “Tópicos de Física”, o “Análise Combinatória e Probabilidade”, do Augusto César Morgado et. al.  e o “Iniciação à Matemática", do Krerley Oliveira. Cada  um à sua forma, estes me foram bastante desafiadores, e desafiadores ao ponto de me levarem muitas vezes  a sentir aquele desespero de pensar, pensar e sentir que não saia do lugar, mas “ferro afia ferro” e sei que se não fosse por isso eu não teria tido evolução alguma. Na verdade, acho que o motivo principal de tanto apreço por esses livros é justamente por eles terem me proporcionado um  desenvolvimento que sem eles eu não acredito que seria possível ter ocorrido. </p>
                    <p>Dito isso, e dado que pretendo manter, e se possível elevar, o nível de dedicação que eu tenho com estudos para o resto da minha vida, achei que fazia sentido reavaliar a forma com que eu registro minha caminhada. Porém, vale ressaltar que apesar de normalmente anotar meu progresso em folhas de papel almaço, eu sou do tipo que as melhores ideias vem em momentos inesperados, como na hora do almoço, e eu corro para anotá-las no primeiro lugar que eu ver. Por conseguinte, algumas soluções que eu mais demorei  para bolar foram escritas em blocos de nota, no verso da lista de compras do mês,ou competem espaço com anotações de telefones e lembretes quaisquer.</p>
                    <p>Daqui em diante, quero ter sempre disponíveis as resoluções que eu fiz que considero  elegantes, mas  também as que me instigaram muito os neurônios sem que eu conseguisse colocar um ponto final . Quero poder voltar até elas quando estiver mais treinado e evitar ao máximo que estas caiam no esquecimento, e como não sou lá um grande fã de rabiscar as páginas dos meus livros, pensei em anotar as questões num bloco de notas, do tipo “Fundamentos da Mecânica I , capítulo 3, exercícios propostos nº26 ” ou simplesmente escrever cada questão por extenso. Porém, analisando melhor a situação, vejo que uma lista com vários itens em qualquer um desses tipos me parece bastante deselegante e cansativa de olhar.</p>
                    <p>Como forma de resolver esses problemas aqui expostos, veio a ideia de desenvolver este site, e acho que no final das contas, manter o acompanhamento da jornada aqui talvez me motive mais ainda.  Somado a isso, eu venho cultivando a ideia que eu deveria aprender a utilizar o framework React, então por que não unir o queijo com a goiabada?</p>
                    <p>A partir desse contexto, apresento a vocês meu portfólio de estudos extra-programação e primeiro projeto React.js.</p>
                    <p class="finalização">Henrique de Oliveira Ramos, 13 de junho de 2021</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LandingPage
