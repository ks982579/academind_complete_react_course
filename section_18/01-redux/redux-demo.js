const redux = require('redux');

//reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter: state.counter + 1
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