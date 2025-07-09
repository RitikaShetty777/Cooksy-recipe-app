import React from 'react';
import './SaveRecipe.css';

const SaveRecipe = () => {
  const dummySavedRecipes = [
    { title: "Spaghetti Bolognese", id: 1 },
    { title: "Paneer Butter Masala", id: 2 },
    { title: "Avocado Toast", id: 3 },
  ];

  return (
    <div className="saved-recipes-container">
      <h2>Saved Recipes</h2>
      <ul className="recipe-list">
        {dummySavedRecipes.map((recipe) => (
          <li key={recipe.id} className="recipe-item">
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SaveRecipe;
