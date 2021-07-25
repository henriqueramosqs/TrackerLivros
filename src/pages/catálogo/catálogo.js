
import React from 'react'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import R from '../../assets/livros/r.jpg'
import Calc from '../../assets/livros/calculo.jpg'
import "./style.css";


const Catálogo = () => {
    return(
          <>
            <Header />
            <div class= "introduction-catalog">        
                <div class="catalog-element-1">
                    <img alt="Imagem do livro" src={Calc}/>
                        <a href="/cálculo">Cálculo - cálculo com funções de uma variável,com uma intrpdução à Álgebra Linear, <br/>Tom M. Apostol</a>       
                </div>
                <div class="catalog-element-1">
                    <img alt="Imagem do livro" src={R}/>
                    <a href="google.com">R para Data Science, <br/>Hadley Wickham</a>
                </div>
             </div>
            <Footer/>
        </>
    )
}

export default Catálogo
