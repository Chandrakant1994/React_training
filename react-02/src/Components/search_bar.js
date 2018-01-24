import React, { Component } from 'react';

//Crate the Search bar component

/* Note - Every class based component must have a render (), and 
this render function must return some JSX */

class SearchBar extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            term: "",
            numbers : [10 , 20 , 30],
            choices : ["Red" , "Green" , "Blue" , "yellow"],
            selected : [],
        };
        this.choiceSelected = this.choiceSelected.bind(this);
    }
    

    termChanged(event){
        this.setState({term : event.target.value})
    }

    choiceSelected(event){
        //console.dir(event.target.parentNode.id);
        var newelement = event.target.parentNode.firstChild.textContent;
        console.log(event.target.checked);
        if(event.target.checked){
            this.setState({selected : this.state.selected.concat([newelement])});
        }
        else
            {
            let index = this.state.selected.indexOf(newelement);
            let newArray = this.state.selected;
            newArray.splice(index,1);
            this.setState({selected : newArray });
        }
        console.log(this.state.selected); 
    }

    render() {
        return (
            <div className = "root container">
                <label> Search term: </label> <input className = "form-control" value = {this.state.term} onChange = {this.termChanged.bind(this)}  /> <br/>
                {this.state.numbers.join('')} <br />
                {this.state.term.split('').reverse().join('')}
                <ul>
                {this.state.choices.map(function(object,i){
                    return <li key = {i} id = {i}><label>{object}</label><input type="checkbox" onChange = {this.choiceSelected.bind(this)}/></li>
                },this)}
                </ul>
                <h4> {this.state.selected} </h4>
                
            </div>
        )
    }

    
}


export default SearchBar;

