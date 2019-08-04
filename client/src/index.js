import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';



import configureStore from './redux/configureStore';

import App from './components/App';
import './index.css';


const store = configureStore(undefined, history);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter >
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

/* istanbul ignore if */
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}

render(App);