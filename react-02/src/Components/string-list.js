import React, { Component } from 'react';
import ListItem from './list-item';

class StringList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            currentString: ""
        }

        this.textChanged = this.textChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    textChanged(event) {
        this.setState({
            currentString: event.target.value
        })
    }

    onSubmit(event) {
        this.setState({
            tags: this.state.tags.concat(this.state.currentString),
            currentString: ""
        })

    }



    render() {
        return (
            <div>
                <input
                    value={this.state.currentString}
                    onChange={this.textChanged} />
                <button
                    className="btn btn-primary"
                    onClick={this.onSubmit.bind(this)}>
                    Add
                </button>
                <ul className = "list-group">
                    {this.state.tags.map(function (object) {
                        return <ListItem key={object} text = {object}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default StringList
//             {this.state.tags.join(' ')}