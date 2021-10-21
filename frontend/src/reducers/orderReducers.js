import { ADD_ORDERED_ITEM, Remove_ORDERED_ITEM } from "../constants/orderConstants";

export const orderReducer = (state ={orderItem :[]} , action) => {
  switch (action.type) {
    case ADD_ORDERED_ITEM:
      
      const item = action.payload;
      const existItem = state.orderItem.find(x => x.product === item.product);
      if(existItem){
        return {
          ...state,
          orderItem: state.orderItem.map(x => x.product === existItem.product ? item : x)
        };
      }else{
        return {
          ...state , orderItem: [...state.orderItem , item]
        }
      }
      case Remove_ORDERED_ITEM:
        return {...state ,
           orderItem: state.orderItem.filter(x => x.product !== action.payload),
          }
    default:
      return state;
  }
}