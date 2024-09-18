import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.value;
    },
    decrement(state, action) {
      state.counter = state.counter + action.value;
    },
    toggeleCounter(state, action) {},
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if ((action.type = "toggleCounter")) {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
// };

const store = configureStore({ counter: counterSlice });

export default store;
