import axios from "axios";
import { TYPE, TOAST_CONFIG } from "../utils/constants";
import { toast } from "react-toastify";

export const addToCart = async (
  dataDispatch,
  product,
  token,
  setBtnDisabled
) => {
  try {
    setBtnDisabled(true);
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setBtnDisabled(false);

    toast.success("Added To Cart", TOAST_CONFIG);

    dataDispatch({ type: TYPE.ADD_TO_CART, payload: response.data.cart });
  } catch (error) {
    console.log("Error in addToCart", error);
  }
};

export const removeFromCart = async (
  dataDispatch,
  productId,
  token,
  setBtnDisabled,
  isClearing
) => {
  try {
    setBtnDisabled(true);
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: token,
      },
    });
    setBtnDisabled(false);

    if (!isClearing) {
      toast.warn("Removed From Cart", TOAST_CONFIG);
    }

    dataDispatch({ type: TYPE.REMOVE_FROM_CART, payload: response.data.cart });
  } catch (error) {
    console.log("Error in removeFromCart", error);
  }
};

export const updateQtyInCart = async (
  dataDispatch,
  productId,
  token,
  actionType,
  setBtnDisabled
) => {
  try {
    setBtnDisabled(true);
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: actionType === "INCREMENT" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setBtnDisabled(false);

    dataDispatch({
      type: TYPE.UPDATE_QTY_IN_CART,
      payload: response.data.cart,
    });
  } catch (error) {
    console.log("Error in updateQtyInCart", error);
  }
};