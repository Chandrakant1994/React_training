import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    componentWillMount(){
        console.log("component will mount");
    }

    componentDidMount(){
        console.log("component did mount");
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-default btn-sm" onClick={this.decrementCount}>
                    <span className="glyphicon glyphicon-minus"></span>
                </button>
                <span className="badge badge-secondary">{this.state.count}</span>
                <button type="button" className="btn btn-default btn-sm" onClick={this.incrementCount}>
                    <span className="glyphicon glyphicon-plus"></span>
                </button>
            </div>

        )
    }
}

export default Counter;