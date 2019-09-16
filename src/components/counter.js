import React, {Component} from 'react';

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state ={
            counter: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        if(this.state.counter>=this.state.max)
        alert("can't increment");
        else
       this.setState({counter: this.state.counter+1})
    }
    decrement() {
        if(this.state.counter<=this.state.min)
        alert("can't decrement");
        else
        this.setState({counter:this.state.counter-1})
    }
    render() {
        return (
            <div>
          <h3>Counter Component</h3>

          <button onClick={this.decrement} disabled={this.state.counter===this.props.min}>-</button>
          &nbsp;
          {this.state.counter}
          &nbsp;
          <button onClick={this.increment}  disabled={this.state.counter===this.props.max}>+</button>
          </div>

        );
    }
}
