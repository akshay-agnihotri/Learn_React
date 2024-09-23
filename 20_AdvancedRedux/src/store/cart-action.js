import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const retrieveData = async () => {
      try {
        const response = await fetch(
          "https://advancedredux-7db44-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
        );
        if (!response.ok) {
          throw new Error();
        }
        const cart = await response.json();
        if (cart) dispatch(cartActions.replaceCart(cart));
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "failed to fetch data",
          })
        );
      }
    };
    retrieveData();
  };
};

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
