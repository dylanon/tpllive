import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import to create the store
import { createStore } from 'redux';
// Import the root reducer function
import tplLiveApp from './redux/reducers';
// Import the action creator
import { receiveNewSearch } from './redux/actions';

// Create the store
const store = createStore(tplLiveApp);

// Log the initial state
console.log('Initial state:', store.getState());

// Listen for state updates
const unsubscribe = store.subscribe(() => {
    console.log('State changed:', store.getState());
});

// Dispatch some test actions
store.dispatch(receiveNewSearch({
    data: '[{"terms":"SWift horse ","browser":"Chrome"}]',
    timeStamp: 1
}));
store.dispatch(receiveNewSearch({
    data: '[{"terms":"gordon korman on the run 4 ","browser":"Chrome"}]',
    timeStamp: 2
}));
store.dispatch(receiveNewSearch({
    data: '[{"terms":"Fiction ","browser":"Samsung Internet"}]',
    timeStamp: 3
}));
store.dispatch(receiveNewSearch({
    data: '[{"terms":"Good bye, philip roth ","browser":"Edge"}]',
    timeStamp: 4
}));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Stop listening to state updates
unsubscribe();
