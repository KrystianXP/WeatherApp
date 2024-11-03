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
                    <div className="forecast">
                        <div className='first-block'>
                        <div className="date-city">
                            <p className="date">Niedziela 3.11.2024</p>
                            <p className="city">Wrocław </p>
                        </div>
                        <div>
                            <img id="icon" src="src/components/weatherapplogoinc.webp" />
                        </div>
                        </div>
                        <div className="second-block">
                            <p>Temperatura</p>
                            <p>Opady</p>
                            <p>Wiatr</p>
                            <p>Zachmurzenie</p>
                        </div>
                        <div className='third-block'>
                            <div className='first-tower'>
                            <img id="icon" src="src/components/weatherapplogoinc.webp" />
                            <p>Poniedziałek 04.11.2024</p>
                            <p>Temperatura</p>
                            <p>Opady</p>
                            <p>Wiatr</p>
                            <p>Chmury</p>
                            </div>
                            <div className='second-tower'>
                            <img id="icon" src="src/components/weatherapplogoinc.webp" />
                            <p>Poniedziałek 04.11.2024</p>
                            <p>Temperatura</p>
                            <p>Opady</p>
                            <p>Wiatr</p>
                            <p>Chmury</p>
                            </div>
                            <div className='third-tower'>
                            <img id="icon" src="src/components/weatherapplogoinc.webp" />
                            <p>Poniedziałek 04.11.2024</p>
                            <p>Temperatura</p>
                            <p>Opady</p>
                            <p>Wiatr</p>
                            <p>Chmury</p>
                            </div>
                            <div className='fourth-tower'>
                            <img id="icon" src="src/components/weatherapplogoinc.webp" />
                            <p>Poniedziałek 04.11.2024</p>
                            <p>Temperatura</p>
                            <p>Opady</p>
                            <p>Wiatr</p>
                            <p>Chmury</p>
                            </div>
                            <div className='fifth-tower'>
                            <img id="icon" src="src/components/weatherapplogoinc.webp" />
                            <p>Poniedziałek 04.11.2024</p>
                            <p>Temperatura</p>
                            <p>Opady</p>
                            <p>Wiatr</p>
                            <p>Chmury</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
