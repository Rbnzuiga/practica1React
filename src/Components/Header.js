import React, {Component} from 'react';
import './Header.css'
//import logo from '../logo.svg'

class Header extends Component{
        render()  {
            return(
         <div className="Header">
        <p>
            {this.props.titulo}
        </p>

         </div>


    );
        }
    }
    export default Header; 