import {
  GET_RECIPES_FAIL,
  GET_RECIPES_LOADING,
  GET_RECIPES_SUCCESS,
  GET_RECIPE_DETAILS_SUCCESS,
} from './types';
import axios from 'axios';

export const getAllRecipes = query => async dispatch => {
  dispatch({ type: GET_RECIPES_LOADING });
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=4247859e&app_key=62bf647f572b59b4b360bfb1b7914f8b`
    );

    dispatch({ type: GET_RECIPES_SUCCESS, payload: response.data.hits });
  } catch (error) {
    dispatch({ type: GET_RECIPES_FAIL, payload: error });
    console.log(error);
  }
};

export const getRecipeDetail = id => async dispatch => {
  dispatch({ type: GET_RECIPES_LOADING });
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=4247859e&app_key=62bf647f572b59b4b360bfb1b7914f8b`
    );

    console.log(response.data.recipe);

    dispatch({
      type: GET_RECIPE_DETAILS_SUCCESS,
      payload: response.data.recipe,
    });
  } catch (error) {
    dispatch({ type: GET_RECIPES_FAIL, payload: error });
    console.log(error);
  }
};
