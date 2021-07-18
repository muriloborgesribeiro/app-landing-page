import React from 'react';
import Form from './Form';

function Header() {
    return (
        <div id='App-header'>
            <div className='header'>
                <h3>Está chegando a hora de saborear os melhores hambúrgueres por preços incríveis</h3>
                <h1><span>BURGER</span><br/> BLACK WEEK</h1>
                <p className="detail">Faça seu cadastro e receba todas as ofertas</p>
                <Form/>
            </div>
        </div>
    )
}

export default Header;