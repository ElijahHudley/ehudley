import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import {Routes} from './Routes';

import {Home} from "./pages/Home";
import {Header} from "./components/header";

import './App.scss';

class App extends Component {
    render() {
        return (
        <Router>
            <div className={'wrapper'}>
              <Header />

                <div className={'content'}>
                    <Route exact path={Routes.HOME} component={Home} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
