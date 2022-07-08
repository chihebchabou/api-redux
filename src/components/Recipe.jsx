import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      <div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <h2 className="card-title">{recipe.recipe.label}</h2>
            <span>Cuisine Type: {recipe.recipe.cuisineType[0]}</span>
            <Link to={`/recipe-details/${recipe.recipe.uri.slice(51)}`}>
              Read details
            </Link>
          </div>
          <img src={recipe.recipe.image} alt="" />
        </div>
        <div className="card-shadow" />
      </div>
    </div>
  );
};

export default Recipe;
