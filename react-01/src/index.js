import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';

const App = function (props) {
    return (
        <div>
            <h1>This is JSX</h1>
            <h3>
                Welcome {props.name} to our city {props.last}
            </h3>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App name="Reacter" city="Javascipt" />, document.querySelector('#root'));
// document.qureySelector('#root');