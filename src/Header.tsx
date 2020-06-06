import React from 'react';

interface HeaderProps {
   
    //title?: String; // propriedade not required (?)
    title: String; //propriedade required
}

// tenho que informar o tipo da const que é uma arrow function
// FC: Function Component, ou seja um component escrito em formato de função. 
//Esse FC é um generic: É um tipo do typeScript que pode receber um parametro,
//esse parametro é basicamente informando quais propriedades esse componente pode receber. 
//Então tenho que criar uma interface que é uma forma de defini a forma de um objeto, ou de um campo
//que não é simplesmente um String, número, boolean
const Header: React.FC<HeaderProps> = (props) => {
    return (
        //props é uma variável do javascript, 
        //para conseguir trabalhar com ela no html tenho que usar {}
        //qualquer javascript dentro do html é entre chaves {}
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}
export default Header;