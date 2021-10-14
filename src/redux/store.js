import {createStore, applyMiddleware,compose  } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from "./Reducers/index";
import thunk from 'redux-thunk';
export const store =createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
)
