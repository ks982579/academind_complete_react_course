const redux = require('redux');

//reducer function
const counterReducer = (state = { counter: 0 }, { type }) => {
    if (type === 'increment') {
        return {
            counter: state.counter + 1
        };
    } else if (type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    } else {
        return { counter: state.counter };
    };
};

// creating store
const store = redux.createStore(counterReducer);

// Subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// Tell store there is subscriber
store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });