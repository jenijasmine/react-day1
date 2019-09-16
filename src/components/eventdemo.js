import React from 'react';
import { directive } from '@babel/types';


const clickHandler =(event) =>{
    alert("hey pappi");
    console.log(event);
}
const Eventdemo = (props) => {
    return(
     <div>
         <h3>Event demo component</h3>
         <br/>
         <button onClick= {clickHandler}>Click me</button>
     </div>
    );

}

export default Eventdemo;