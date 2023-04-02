import axios from "axios";
import {
  APPLY_COUPON_DISCOUNT,
  CART_PAGE_TOTAL_AMOUNT,
  CART_PAGE_TOTAL_ITEMS,
  GET_CART_DATA_FAILURE,
  GET_CART_DATA_REQUEST,
  GET_CART_DATA_SUCCESS,
  QUANTITY_CHANGE_SUCCESS,
  APPLY_GIFTCARD
} from "./action.type";



const getCartDataRequestAction = () => {
  return { type: GET_CART_DATA_REQUEST };
};

const getCartDataSuccessAction = (payload) => {
  return { type: GET_CART_DATA_SUCCESS, payload };
};

const getCartDataFailureAction = () => {
  return { type: GET_CART_DATA_FAILURE };
};

const quantityChangeSuccess = () =>{
  return {type : QUANTITY_CHANGE_SUCCESS};
}

const getCartPageTotalAmount = (payload) => {
  return {type : CART_PAGE_TOTAL_AMOUNT, payload }
}

const getCartPageTotalItems = (payload) => {
  return {type : CART_PAGE_TOTAL_ITEMS, payload }
}

const applyCouponDiscount = (payload) => {
  return {type : APPLY_COUPON_DISCOUNT, payload}
}

const applyGiftCard = (payload) => {
  return {type : APPLY_GIFTCARD, payload}
}

export const getCartData = (dispatch) => {
  dispatch(getCartDataRequestAction());

  axios
  .get("http://localhost:8080/cart",{
    headers: {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json'
  }})
  .then((res)=>{
    dispatch(getCartDataSuccessAction(res.data));
    dispatch(handleTotalAmount(res.data));
    dispatch(handleTotalItems(res.data));
    
  })
  .catch((err)=>{
    dispatch(getCartDataFailureAction());
  })
}


export const handleQuantity = (id, quantity) => (dispatch) => {
  axios.patch(`http://localhost:8080/cart/update/${id}`,{
    Quantity : +quantity
  },{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    }
  }
  ).then((res)=>{
    axios.get(`http://localhost:8080/cart`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      dispatch(getCartDataSuccessAction(res.data));
      dispatch(handleTotalAmount(res.data));
      dispatch(handleTotalItems(res.data));
    })
  })
}

export const handleRemove = (id) => (dispatch) => {
  axios.delete(`http://localhost:8080/cart/delete/${id}`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    }
  }).then((res)=>{
    axios.get(`http://localhost:8080/cart`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      dispatch(getCartDataSuccessAction(res.data));
      dispatch(handleTotalAmount(res.data));
      dispatch(handleTotalItems(res.data));
    })
  }).catch((err)=>{

  })
}


export const handleTotalAmount = (data) => (dispatch) => {
  let totalCartPrice = 0
  data?.map((el)=>{
    totalCartPrice = totalCartPrice + (el.Discount_price * el.Quantity)
  })
  dispatch(getCartPageTotalAmount(+totalCartPrice))
}


export const handleTotalItems = (data) => (dispatch) => {
  let totalItems = 0
  data?.map((el)=>{
    totalItems = totalItems + el.Quantity
  })
  dispatch(getCartPageTotalItems(+totalItems))
}

export const handleCouponDiscount = (coupon, amount) => (dispatch) => {
  let discount = 0;
  if(coupon === "masai30"){
    discount = amount * 0.3
  }
  dispatch(applyCouponDiscount(Math.round(+discount)))
}


export const handleGiftCardDiscount = (gift, amount) => (dispatch) => {
  let discount = 0;
  if(gift === "masai30"){
    discount = amount * 0.3
    console.log(gift)
  }
  dispatch(applyGiftCard(Math.round(+discount)))
}

