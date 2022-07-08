import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecipeDetail } from '../actions/recipeActions';

const RecipeDetails = ({ recipeDetails }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('first');
    dispatch(getRecipeDetail(id));
  }, []);
  return (
    <div>
      <h1>{recipeDetails.label}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.label} />
      <ul>
        {recipeDetails.ingredientLines &&
          recipeDetails.ingredientLines.map(el => <li>{el}</li>)}
      </ul>
      s
    </div>
  );
};

export default RecipeDetails;
