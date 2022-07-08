import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipes } from './actions/recipeActions';
import { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('chicken');

  const { recipes, loading, recipeDetails } = useSelector(
    state => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipes(query));
  }, [query]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <h1>loading...</h1>
            ) : (
              <div>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setQuery(input);
                  }}
                >
                  <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                  />
                </form>
                <RecipeList recipes={recipes} />
              </div>
            )
          }
        />
        <Route
          path="/recipe-details/:id"
          element={<RecipeDetails recipeDetails={recipeDetails} />}
        />
      </Routes>
    </div>
  );
}

export default App;
