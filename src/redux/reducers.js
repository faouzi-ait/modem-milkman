import {
  LOADING_PRODUCTS,
  GET_HOME_PAGE_PRODUCTS_SUCCESS,
  GET_HOME_PAGE_PRODUCTS_FAILURE,
  ADD_ITEM,
  ADD_ALL,
  REMOVE_ITEM,
  CLEAR_LIST,
} from './constants';

const productInitialState = {
  products: null,
  titles: null,
  errors: null,
  loading: false,
};

const listInitialState = {
  list: [],
};

export const products = (state = productInitialState, action) => {
  switch (action.type) {
    case GET_HOME_PAGE_PRODUCTS_SUCCESS:
      const categoryTitles = action.payload.map((item) => item.title);
      return { ...state, products: action.payload, titles: categoryTitles };
    case GET_HOME_PAGE_PRODUCTS_FAILURE:
      return { ...state, errors: action.payload };
    case LOADING_PRODUCTS:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const listing = (state = listInitialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const list = [...state.list];

      const item = list.find(
        (product) => product.title === action.payload.title
      );

      if (!item) {
        return { ...state, list: [...state.list, action.payload] };
      }

      return { ...state, list };
    case REMOVE_ITEM:
      const currentList = [...state.list];
      const updatedList = currentList.filter(
        (item) => item.title !== action.payload
      );
      return { ...state, list: updatedList };
    case CLEAR_LIST:
      return { ...state, list: [] };
    case ADD_ALL:
      const allProducts = [...action.payload];
      return { list: allProducts };
    default:
      return state;
  }
};
