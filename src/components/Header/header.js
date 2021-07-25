import './style.css'


const Header = () => {
    return( 
            <div class ="nav">
            <a class ="nav-link" href="/">Página Inicial</a>
            
                <div class = "right-links">
                    <a class ="nav-link" href="/catálogo">Catálogo</a>
                    
                    <a class ="nav-link" href="listaDeDesejos">Lista de desejos</a>
                </div>
            </div>

    )
}


export default Header