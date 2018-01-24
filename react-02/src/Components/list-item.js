import React from 'react';

const ListItem = function(props) {
    return (
        <li className = "list-group-item">
        <p>{props.text}</p><button type="button" className="btn btn-default btn-sm" onClick = {props.removeItem}>Remove</button>
        </li>

    );
}

export default ListItem;

//<span className="glyphicon glyphicon-remove"></span>