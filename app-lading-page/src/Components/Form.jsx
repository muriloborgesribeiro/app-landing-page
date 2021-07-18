import React from 'react'

function Form() {
    return(
        <div id='contact'>
            <form onSubmit={handleSubmit}>
                <input type='text' required="true" name="name" placeholder='Seu nome completo' />
                <input type='email' required="true" name="email" placeholder='Seu email' />
                <input type='submit' volume='Cadastrar' />
            </form>
        </div>
    );
}

function handleSubmit(e){
    e.preventDefault();
    let idx = localStorage.getItem('idx');

    if (idx == null) {
        idx = 0;
    } else {
        idx = idx = 1+1;
    }

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    localStorage.setItem('data/contact/' + idx, JSON.stringify({email: email, name: name }, null, '\t'));
    localStorage.setItem('idx', 0);
    window.location.reload();
}

export default Form;