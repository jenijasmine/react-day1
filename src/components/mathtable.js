import React from 'react';

const Mathtable = (props) => {
const n= props.number;
const table=[];
for(let i=1;i<=10;i++){
    let product = n*i;
    table.push(<span>{n} * {i} = {product}<br/></span>);
}
return table;
}

export default Mathtable;