import { action } from "actions";

export const UPDATE_CART = "UPDATE_CART";
export const update_cart = (data=[]) => action(UPDATE_CART, { data });