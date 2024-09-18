// const redux = require("redux");
import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux"; //to do this we use to either change our file name to .mjs
//or we can add type:"module" in package.json() like this--
// {
//     "name": "redux-app",
//     "version": "1.0.0",
//     "main": "index.js",
//     "type": "module"
//   }

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      // return {
      //   counter: state.counter + action.payload,
      //   showCounter: state.showCounter,
      // };
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      // return {
      //   counter: state.counter + action.payload,
      //   showCounter: state.showCounter,
      // };
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      // return {
      //   counter: state.showCounter,
      //   showCounter: !state.showCounter,
      // };
      state.showCounter = !state.showCounter;
    },
  },
});

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
  reducer: { counter: counterSlice.reducer },
});

export const counterActions = counterSlice.actions;

export default store;
