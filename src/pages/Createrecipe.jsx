import React, { useState } from "react";
import "./RecipeForm.css";

const CreateRecipe = ({ onRecipeCreate }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    cookingTime: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRecipeCreate) {
      onRecipeCreate(recipe);
    }
    setRecipe({
      title: "",
      description: "",
      cookingTime: "",
      ingredients: "",
      instructions: "",
      imageUrl: "",
    });
    alert("Recipe Created Successfully!");
  };

  return (
    <div className="recipe-form-container compact">
      <h2 className="title">Create Your Recipe</h2>
      <form onSubmit={handleSubmit} className="recipe-form">
        <input type="text" name="title" placeholder="Recipe Title" value={recipe.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Short Description" value={recipe.description} onChange={handleChange} />
        <input type="text" name="cookingTime" placeholder="Cooking Time (e.g., 30 minutes)" value={recipe.cookingTime} onChange={handleChange} />
        <input type="text" name="ingredients" placeholder="Ingredients (separate with commas)" value={recipe.ingredients} onChange={handleChange} />
        <textarea name="instructions" placeholder="Instructions" rows={4} value={recipe.instructions} onChange={handleChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" value={recipe.imageUrl} onChange={handleChange} />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
