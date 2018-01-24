import React from 'react';
import ReactDOM from 'react-dom';
//import SearchBar from './Components/search_bar';
//import Counter from './Components/counter';
//import Clock from './Components/clock';
//import StringList from './Components/string-list';
import StringListNew from './Components/string-list-new';

const App = function (props) {
    return (
        <div>
            <StringListNew />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
// document.qureySelector('#root');