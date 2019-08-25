import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

import rootReducer from "./modules";

export const history = createBrowserHistory()

const configureStore = (prelodedState) => {
  const middlewares = [thunk, routerMiddleware(history)];

  /* istanbul ignore if */
  if (process.env.NODE_ENV === "development") {
    middlewares.push(createLogger());
  }

  const composed = [applyMiddleware(...middlewares)];

  /* istanbul ignore if */
  // eslint-disable-next-line
  if (
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    /* eslint-disable */
    composed.push(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    /* eslint-enable */
  }

  const store = createStore(rootReducer(history), prelodedState, compose(...composed));

  /* istanbul ignore if */
  if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./modules", () => {
      // eslint-disable-next-line
      const nextRootReducer = require("./modules").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
