import {
  LOADING_PRODUCTS,
  GET_HOME_PAGE_PRODUCTS,
  GET_HOME_PAGE_PRODUCTS_SUCCESS,
  GET_HOME_PAGE_PRODUCTS_FAILURE,
  REMOVE_ITEM,
  ADD_ITEM,
  ADD_ALL,
  CLEAR_LIST,
} from './constants';

// HOME PAGE LISTING ACTIONS
export const getHomePageProducts = (payload) => {
  return { type: GET_HOME_PAGE_PRODUCTS, payload };
};

export const getHomePageProductSuccess = (payload) => {
  return { type: GET_HOME_PAGE_PRODUCTS_SUCCESS, payload };
};

export const getHomePageProductFailure = (payload) => {
  return { type: GET_HOME_PAGE_PRODUCTS_FAILURE, payload };
};

export const loadingHomePageProducts = (payload) => {
  return { type: LOADING_PRODUCTS, payload };
};

export const addAllProducts = (payload) => {
  return { type: ADD_ALL, payload };
};

export const clearAllProducts = (payload) => {
  return { type: CLEAR_LIST, payload };
};

// LIST ACTIONS
export const addItem = (payload) => {
  return { type: ADD_ITEM, payload };
};

export const removeItem = (payload) => {
  return { type: REMOVE_ITEM, payload };
};
