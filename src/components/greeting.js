import React from 'react';
import ReactDom from 'react-dom';

const Greeting = (props) => {
    console.log(props);
    return(
     <div>welcome {props.person} {props.city} </div>
    );
}

export default Greeting;