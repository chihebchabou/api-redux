import {
  GET_RECIPES_FAIL,
  GET_RECIPES_LOADING,
  GET_RECIPES_SUCCESS,
  GET_RECIPE_DETAILS_SUCCESS,
} from '../actions/types';

const initialState = {
  loading: false,
  recipes: [],
  recipeDetails: {},
  errors: null,
};

const recipeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RECIPES_LOADING:
      return { ...state, loading: true };
    case GET_RECIPES_SUCCESS:
      return { ...state, recipes: payload, loading: false };

    case GET_RECIPE_DETAILS_SUCCESS:
      return { ...state, recipeDetails: payload, loading: false };

    case GET_RECIPES_FAIL:
      return { ...state, errors: payload, loading: false };
    default:
      return state;
  }
};

export default recipeReducer;
