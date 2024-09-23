import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending..",
        message: "sending cart data..",
      })
    );
    const httpsRequest = async () => {
      try {
        const response = await fetch(
          "https://advancedredux-7db44-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );

        if (!response.ok) {
          throw new Error("sending data failed");
        }

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success..",
            message: "sends data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "sending Cart data failed",
          })
        );
      }
    };
    httpsRequest();
  };
};
