import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            now: 0
        }

    }

    clockTick(){
        this.setState({
            now : new Date().toLocaleTimeString()
        })
    }

    componentWillMount(){
        this.timer = setInterval(() => {this.clockTick()} , 1000)
    }

    componentWillUnMount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <div>
            <span className = "label label-default">  
                {this.state.now}
            </span>
            </div>
        );
    }

}

export default Clock;



