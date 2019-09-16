import React from 'react';
import ReactDom from 'react-dom';

import Greeting from './components/greeting';
import Propsdemo from './components/propsdemo';
import Mathtable from './components/mathtable';
import Eventdemo from './components/eventdemo';
import Counter from './components/counter';
import Actorlist from './components/actorlist';

const App = () => {
    const obj ={
        name:'abcd',
        age:12
    };
    return (
        <div>
    <h1>Welcome Guyssssssss</h1>
    {/* <Greeting person ="jenifa" city="chennai"/>
    <Propsdemo data={obj}/>
    <Mathtable number={5}/>
    <Eventdemo/> */}
    {/* <Counter min={-5} max={5} cycle={false}/> */}
    <Actorlist/>
    </div>
    );
    }

ReactDom.render(<App/>, document.querySelector('#root'));

export default App;