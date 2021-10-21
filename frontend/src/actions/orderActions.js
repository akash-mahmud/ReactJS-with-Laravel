import axios from "axios"
import { ADD_ORDERED_ITEM, Remove_ORDERED_ITEM } from "../constants/orderConstants";

export const addToOrder = (productId , qty ) => async (dispatch , getState) => {
  const data = await axios.get(`/api/product/${productId}`);
  console.log(data);
  console.log(data.data.product.id);
  dispatch({
    type:ADD_ORDERED_ITEM,
    payload: {
      name: data.data.product.name,
      image: data.data.product.image,
      price:data.data.product.price,
      product:data.data.product.id,
      qty
    }
  })
  localStorage.setItem('orderItem' , JSON.stringify(getState().order.orderItem))
}

export const removeFromOrder = (productId) => (dispatch , getState) => {

  dispatch({
    type:Remove_ORDERED_ITEM , payload:productId
  });
  localStorage.setItem('orderItem' , JSON.stringify(getState().order.orderItem))
}