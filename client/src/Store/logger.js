
export default function logger({ getState }) {
  return next => (action) => {
    console.group(`Action : ${action.type}`); //eslint-disable-line
    console.info('%c Previous State : ', 'color: #3f51b5', getState()); // eslint-disable-line no-console
    console.info('%c Action Dispatched : ', 'color: #009688', action); // eslint-disable-line no-console
    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);
    console.info('%c Next State : ', 'color: #795548', getState()); // eslint-disable-line no-console
    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    console.groupEnd() // eslint-disable-line
    return returnValue;
  };
}
