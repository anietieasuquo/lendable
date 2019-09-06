import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/reducer';

let store = createStore(rootReducer);

const provider = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(provider, document.getElementById('root'));

