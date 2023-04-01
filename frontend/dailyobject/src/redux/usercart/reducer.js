import { APPLY_COUPON_DISCOUNT,
    APPLY_GIFTCARD,
    CART_PAGE_TOTAL_AMOUNT,
     CART_PAGE_TOTAL_ITEMS,
      GET_CART_DATA_FAILURE,
       GET_CART_DATA_REQUEST,
        GET_CART_DATA_SUCCESS,
         QUANTITY_CHANGE_SUCCESS 
       } from "./action.type";
 
 const initialState = {
   cart: [],
   isLoading: false,
   isError: false,
   totalCartAmount : 0,
   totalItems : 0,
   discount : 0
 };
 
 export const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
     case GET_CART_DATA_REQUEST:
       return { ...state, isLoading: true };
     case GET_CART_DATA_SUCCESS:
       return { ...state, isLoading: false, cart: payload };
     case GET_CART_DATA_FAILURE:
       return { ...state, isLoading: false, isError: true };
     case QUANTITY_CHANGE_SUCCESS:
       return {...state, isLoading: false}
     case CART_PAGE_TOTAL_AMOUNT:
       return {...state, totalCartAmount: payload}
     case CART_PAGE_TOTAL_ITEMS:
       return {...state, totalItems: payload}
     case APPLY_COUPON_DISCOUNT:
       return {...state, discount:payload}
     case APPLY_GIFTCARD:
        return {...state, discount:payload}
     default:
       return state;
   }
 };



 