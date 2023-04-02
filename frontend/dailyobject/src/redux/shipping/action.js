import axios from "axios";
import {
  GET_ADDRESS_SUCCESS,
  POST_ADDRESS_SUCCESS,
  POST_REQUEST,
  POST_FAILURE
} from "./action.type";

export const getpostRequest = () => {
  return { type: POST_REQUEST };
};

export const getpostFailure = () => {
  return { type: POST_FAILURE };
};

export const getpostSuccessAddress = (payload) => {
  return { type: POST_ADDRESS_SUCCESS };
};
export const getdataSuccessAddress = (payload) => {
  return { type: GET_ADDRESS_SUCCESS, payload };
};


export const postRequestAddress = (payload) => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .post("http://localhost:8080/shipping/add",{
      headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    }},payload)
    .then((res) => {
      console.log("post", res.data);
      dispatch(getpostSuccessAddress(res.data));
    })
    .catch((error) => {
      dispatch(getpostFailure());
    });
};

export const getRequestAddress = () => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .get("http://localhost:8080/shipping",)
    .then((res) => {
        console.log("get",res.data);
      dispatch(getdataSuccessAddress(res.data));
    })
    .catch((error) => {
      dispatch(getpostFailure());
    });
};

