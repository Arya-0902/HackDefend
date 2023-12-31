import { TYPE } from "../utils/constants";

export const dataInitialState = {
  cart: [],
  wishlist: [],
  products: [],
  categories: [],
  addresses: [
    {
      id: "1",
      name: "Arya Shah",
      phone: "9686899867",
      city: "Ahmedabad",
      state: "Gujarat",
      pin: "380110",
      addressText: "15, Khaman House, Lal darwaja, Ahmedabad"
    },
  ],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case TYPE.LOAD_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };

    case TYPE.LOAD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };

    case TYPE.LOAD_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.LOAD_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload],
      };

    case TYPE.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case TYPE.CLEAR_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };

    case TYPE.ADD_TO_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.UPDATE_QTY_IN_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPE.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload],
      };

    case TYPE.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload],
      };

    case TYPE.ADD_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload],
      };

    case TYPE.DELETE_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.filter(({ id }) => id !== action.payload),
      };

    case TYPE.EDIT_ADDRESS:
      return {
        ...state,
        addresses: state.addresses.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    default:
      return;
  }
};