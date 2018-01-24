import React, { Component } from 'react';
import ListItem from './list-item';


class ListDisplay extends Component {
    constructor(props) {
        super(props);
        this.generateList = this.generateList.bind(this);
    }

    generateList() {
        return (
            this.props.list.map(function (object) {
                return <ListItem key={object} text={object} removeItem = {this.props.removeItem} />
            },this)
        )
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.generateList()}
                </ul>
            </div>
        )
    }

}

export default ListDisplay;
