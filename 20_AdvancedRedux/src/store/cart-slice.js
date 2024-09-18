import { createSlice } from "@reduxjs/toolkit";

const initialState = { xyz: "something" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    xyzfn(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
