import React from 'react'
import Github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'


import './style.css'

const Footer = () => {
    return (
        <footer>
            <h2 class="nome">Henrique Ramos</h2>
            <a class="social-links" href ="https://github.com/henriqueramosqs"><img src={Github}/></a>
            <a class="social-links" href ="https://www.linkedin.com/in/henrique-ramos-02b4151b0/"><img src={linkedin}/></a>
        </footer>

    )
}


export default Footer