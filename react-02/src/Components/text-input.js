import React , {Component} from 'react';

class TextInput extends Component{

        render(){
            return (
                <div>
                    <input
                    value={this.props.currentString}
                    onChange={this.props.textChanged} />
                <button
                    onClick={this.props.addClicked}
                    className="btn btn-primary">
                    Add
                </button>
                </div>
            )
        }
    }

    export default TextInput;