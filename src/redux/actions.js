// Action Types
export const RECEIVE_NEW_SEARCH = 'RECEIVE_NEW_SEARCH';

// Action Creators
export function receiveNewSearch(messageEvent, milliseconds) {
    const data = JSON.parse(messageEvent.data);
    const [{ terms, browser }] = data;
    return {
        type: RECEIVE_NEW_SEARCH,
        terms,
        browser,
        receivedAt: milliseconds
    }
}