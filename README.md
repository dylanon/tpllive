# TPL Live

Real-time dashboard showing search data from the [Toronto Public Library website](https://www.torontopubliclibrary.ca/).

## Base Functionality

- **[Done]** Connect to TPL's realtime feed of searches conducted on [torontopubliclibrary.ca](https://torontopubliclibrary.ca) with WebSockets
- **[Done]** Display real-time searches as they come in
- **[Done]** Display a data visualization of web browsers used to conduct searches
- **[Done]** Clicking a search result opens the search on the TPL website

## Enhancements

- Show additional stats:
  - Most common search term(s)
    - **textstats branch**: Mostly works, but duplicate words other than *the*, *of*, *and*, etc. aren't very common, so this isn't an exciting stat
  - Average search length (in characters or words)
  - Current search rate (searches per minute or searches per second)
  - Total searches that statistics are based on

## Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Browser logos courtesy [alrra](https://github.com/alrra)'s [browser-logos](https://github.com/alrra/browser-logos).