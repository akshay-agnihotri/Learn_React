import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, amount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
      state.totalQuantity++;
    },
    removeItemToCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.itemId === itemId);
      state.totalQuantity--;
      existingItem.totalPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.itemId !== itemId);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
