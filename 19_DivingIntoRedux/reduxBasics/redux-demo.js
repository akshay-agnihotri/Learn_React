const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer); 
// Redux internally triggers the reducer to initialize the state. Even though no action is dispatched explicitly, this is how Redux works — it ensures the store has an initial state by running the reducer once when the store is created.
// The counterReducer is called with the default state { counter: 0 } during initialization.
// The reducer increments the counter by 1 (because it always returns { counter: state.counter + 1 }), so the initial state of the store becomes { counter: 1 }.

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
console.log(store.getState());
