import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/Shared/Header/header';
import Footer from './component/Shared/Footer/footer';
import Home from './routes/Home'

import './App.css';


const App = () => (
  <div className="App">
    <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    <Footer />
  </div>
);

export default App
