import React from 'react';
import './Body.css';

function Body(props){
   


    return(
        <div className="Body">
            <p>{props.t6}</p>
           <ol>
            <li>{props.texto1}</li>
            <li>{props.texto2}</li>
            <li>{props.texto3}</li>
            <li>{props.texto4}</li>
            <li>{props.texto5}</li>




           </ol>
            
        </div>    )
}
export default Body;