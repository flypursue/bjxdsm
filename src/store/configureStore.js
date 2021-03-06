import { createStore, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
    const enhancers = [];
    let composeEnhancers = compose;

    if (__DEV__) {
        if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            ...enhancers
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/rootReducer', () => {
            const nextRootReducer = require('../reducers/rootReducer');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
