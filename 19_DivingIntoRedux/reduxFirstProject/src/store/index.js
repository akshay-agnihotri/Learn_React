// const redux = require("redux");
import { createStore } from "redux"; //to do this we use to either change our file name to .mjs
//or we can add type:"module" in package.json() like this--
// {
//     "name": "redux-app",
//     "version": "1.0.0",
//     "main": "index.js",
//     "type": "module"
//   }

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
