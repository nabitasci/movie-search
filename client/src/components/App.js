import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Content from './Shared/Content';

import Home from '../routes/Home';
import General from '../routes/General';
import Search from '../routes/Search';

import NotFound from '../routes/NotFound';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/genel" component={General} />
        <Route exact path="/arama" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Content>
    <Footer />
  </div>
);