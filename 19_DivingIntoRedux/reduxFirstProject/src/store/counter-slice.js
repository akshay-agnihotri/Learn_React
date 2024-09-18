import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
