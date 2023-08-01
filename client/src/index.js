import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Use createRoot().render instead of ReactDOM.render
const root = document.getElementById('root');
const rootRender = root ? createRoot(root) : null;

if (rootRender) {
    rootRender.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
