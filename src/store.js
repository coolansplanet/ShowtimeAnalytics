import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promise from "redux-promise-middleware";
import reducer from './reducers';

const middleware = applyMiddleware(promise(), createLogger());

//export default createStore(reducer, middleware);

export default createStore(
    reducer,
    compose(
        middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
