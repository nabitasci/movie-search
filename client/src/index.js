import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./redux/configureStore";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = configureStore(undefined);
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", () => {
    // eslint-disable-next-line
    const NextApp = require("./App").default;
    render(NextApp);
  });
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
