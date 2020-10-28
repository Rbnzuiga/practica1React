import React,{Component} from 'react';
//import React from 'react';
import logoitt from './logoitt.jpg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import banner from './Components/Banner';
import Banner2 from './Components/Banner2';


class App extends Component{
  funcAlerta(){
    alert("hola mundo")
}
  render(){
  return (
    
    <div className="App">
    <div><Banner></Banner>
    </div>

    <Banner2/>  
    <Header
    titulo="27/10/2020" 
    />
    <Body 
    t6="Practica 1 - Unidad2"
    texto1="Tipos de componentes"
    texto2="Contenedores"
    texto3="Usar mas de un componente"
    texto4="Funciones"
    texto5="Props"

        />
<div>    <button onClick={()=>this.funcAlerta()}>dale click</button>
</div>


    <Footer
    pie={<p>Copyright © Todos los derechos reservados</p>}
    />

    </div>
    
  )}; 
  }

export default App;
