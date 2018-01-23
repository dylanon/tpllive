// Reducers

// State will be an array of search objects
// {
//     searches: [
//         {
//             terms: "dog books",
//             browser: "Chrome",
//             timestamp: 1234132431.1234
//         }
//     ]
// }

import { RECEIVE_NEW_SEARCH } from "./actions";

// Define the initial state
const initialState = {
    searches: []
}

// Calculate and return the new state
export default function tplLiveApp(state = initialState, action) {
    if (action.type === RECEIVE_NEW_SEARCH) {
        // Add the new search and return the new state
        return Object.assign({}, state, {
            searches: [
                ...state.searches,
                {
                    terms: action.terms,
                    browser: action.browser,
                    receivedAt: action.receivedAt
                }
            ]
        });
    } else {
        return state;
    }
}