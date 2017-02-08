import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCysA36f_yWB1SdjHW9DrkSJBjmb_4DUGE';

class App extends Component{
    render () {
        return(
            <SearchBar />
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))