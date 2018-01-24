import React, { Component } from 'react';
import TextInput from './text-input';
import ListDisplay from './list-display'

class StringListNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stringList: [],
            currentString: ""
        }

        this.textChanged = this.textChanged.bind(this);
        this.addString = this.addString.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    textChanged(event) {
        this.setState({
            currentString: event.target.value
        })
    }

    addString(event) {
        this.setState({
            stringList: this.state.stringList.concat(this.state.currentString),
            currentString: ""
        })

    }

    removeItem(event){
        //console.log(event.target.parentNode.firstChild.textContent);
        let newList = this.state.stringList;
        console.log("before reomve : " + newList );
        let index = newList.indexOf(event.target.parentNode.firstChild.textContent);
        console.dir(event.target.parentNode.firstChild);
        console.log(index);
        newList.splice(index, 1);
        console.log("after remove : " + newList);
        this.setState({
            stringList : newList
        })
    }



    render() {
        return (
            <div>
                <TextInput 
                currentString = {this.state.currentString}
                textChanged={this.textChanged}
                addClicked={this.addString}
                />
                <ListDisplay list = {this.state.stringList} removeItem = {this.removeItem}/>
                {/*console.log(this.state.stringList)*/}
                
            </div>
        )
    }
}

export default StringListNew