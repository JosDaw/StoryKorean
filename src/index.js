import React from 'react';
import { render } from 'react-dom';
import '../src/style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

render( 
     <Provider store={store}>
      <App />
     </Provider>,
    document.getElementById('root')
);



serviceWorker.unregister();
