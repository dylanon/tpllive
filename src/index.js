import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Import to create the store
import { createStore } from 'redux';
// Import the root reducer function
import tplLiveApp from './redux/reducers';
// Import the provider for easy store access everywhere
import { Provider } from 'react-redux';

// Create the store
const store = createStore(
    tplLiveApp,
    // Next line enables Chrome dev tools extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    // Wrap App with Provider to give all child components access to the store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
