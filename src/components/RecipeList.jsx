import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((el, i) => (
        <Recipe recipe={el} key={i} />
      ))}
    </div>
  );
};

export default RecipeList;
