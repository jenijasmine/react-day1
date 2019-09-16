import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state ={
            actors:[
                    { name: 'kamal', city: 'chennai', rating: 9.8 },
                    { name: 'Rajini', city: 'mumbai', rating: 9.9 },
                    { name: 'vijay', city: 'bangalore', rating: 9.1 },
                    { name: 'surya', city: 'pune', rating: 8.7 },
                    { name: 'vikram', city: 'chennai', rating: 8.2 }
                   ]           
        };
        this.deleteActor = this.deleteActor.bind(this);
    }

    deleteActor(index) {
        this.setState({
            actors: this.state.actors.filter(
                (actor,i) => i!=index 
            )
        })
    }
    render() {
        const rows = this.state.actors.map(
            (actor, i) => <tr key ={i}>
                <td>{actor.name}</td>
                <td>{actor.city}</td>
                <td>{actor.rating}</td>
                <td>
                    <button onClick={() => this.deleteActor(i)}>delete</button>
                </td>
            </tr>
        )
        return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>City</th>
                    <th>Rating</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
        );
    }


}