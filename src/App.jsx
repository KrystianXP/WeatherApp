import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Details} from './pages/Details';
import {Provider} from 'react-redux';
import {store} from './store';

import './App.css';
import React from 'react';
import DropdownButton from './components/DropdownButton.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <header className = "header">
                        <div className = "logo-section">
                        <img id="icon" src="src/components/weatherapplogoinc.webp" />
                        <h1 className= "logo-text">Weatherio</h1>
                        </div>
                        <DropdownButton />
                    </header>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
