// const redux = require("redux");
import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter-slice.js";
import authSliceReducer from "./auth-slice.js";

// import { createStore } from "redux"; //to do this we use to either change our file name to .mjs
//or we can add type:"module" in package.json() like this--
// {
//     "name": "redux-app",
//     "version": "1.0.0",
//     "main": "index.js",
//     "type": "module"
//   }

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggleShowCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});




export default store;
