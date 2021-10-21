import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { orderReducer } from './reducers/orderReducers';
import { productDetailsReducer, productListReducer } from "./reducers/productReducer";
const initialState = {
  order:{
    orderItem : localStorage.getItem('orderItem') ? 
    JSON.parse(localStorage.getItem('orderItem')):[],
  },
};
const reducer = combineReducers({

  productList : productListReducer,
  productDetails: productDetailsReducer,
  order: orderReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
const store = createStore(reducer,initialState , composeEnhancer(applyMiddleware(thunk)))

export default store ;