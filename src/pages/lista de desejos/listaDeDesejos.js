  
import React from 'react'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Macroeconomia from '../../assets/livros/Macroeconomia.jpg'
import Estatégia from '../../assets/livros/estratégaiCompetitiva.jpg'
import Microecnomia from "../../assets/livros/Microecocnomia.jpg"
import "./style.css";


const listaDeDesejos = () => {
    return(
          <>
            <Header />
            <div class= "introduction-ldd">
                
                <div class="catalog-element">
                    <img alt="Imagem do livro" src={Macroeconomia}/>
                    <div class="catalog-text">
                        <a><b>Título: </b>Macroeconomia</a><br/>              
                        <a><b>Autor: </b>Gregory Mankik</a><br/>
                        <a href="https://www.amazon.co.uk/Macroeconomics-N-Gregory-Mankiw/dp/1464182892"><b>Link de compra</b></a><br/>             
                    </div>
                </div>

                <div class="catalog-element">
                    <img alt="Imagem do livro" src={Estatégia}/>
                    <div class="catalog-text">
                        <a><b>Título: </b>Estratégia Competitiva - Técnicas Para Análise de Indústrias e da Concorrência</a><br/>   
                        <a><b>Autor: </b>Michael E. Porter</a><br/>
                        <a href="https://www.amazon.com.br/Estrat%C3%A9gia-Competitiva-T%C3%A9cnicas-An%C3%A1lise-Ind%C3%BAstrias/dp/8535215263/ref=asc_df_8535215263/?tag=googleshopp00-20&linkCode=df0&hvadid=379727491147&hvpos=&hvnetw=g&hvrand=17439613733027857457&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001541&hvtargid=pla-812193012703&psc=1"><b>Link de compra</b></a><br/>         
                    </div>
                </div>

                <div class="catalog-element">
                    <img alt="imagem do livro" src={Microecnomia}/>
                    <div class="catalog-text">
                        <a><b>Título: </b>Microecnomia - Uma Abordagem Moderna</a><br/>            
                        <a><b>Autor: </b> Hal Hal Varian</a><br/>
                        <a href="https://www.amazon.com.br/Microeconomia-Hal-Varian/dp/8535230181/ref=asc_df_8535230181/?tag=googleshopp00-20&linkCode=df0&hvadid=379720792558&hvpos=&hvnetw=g&hvrand=9709811610637884432&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001541&hvtargid=pla-333762630690&psc=1"><b>Link de compra</b></a><br/>       
                    </div>
                </div>

             </div>

            <Footer/>
        </>
    )
}

export default listaDeDesejos