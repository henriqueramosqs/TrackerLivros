import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LandingPage from '../pages/landing/landingPage'
import listaDeDesejos from '../pages/lista de desejos/listaDeDesejos'
import Catálogo from '../pages/catálogo/catálogo'
import Cálculo from '../pages/cálculo/Cálculo'


const Routes = () => {
    return(
        <BrowserRouter>
        
        <Route exact path='/'component={LandingPage} />
            <Switch>
                <Route exact path='/listaDeDesejos'component={listaDeDesejos} />
                <Route exact path='/catálogo'component={Catálogo} />
                <Route exact path='/cálculo'component={Cálculo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes