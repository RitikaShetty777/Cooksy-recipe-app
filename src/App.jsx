// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import CreateRecipe from './pages/CreateRecipe';
import SaveRecipe from './pages/SaveRecipe';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [recipes, setRecipes] = useState([]);

  const handleRecipeCreate = (newRecipe) => {
    const updated = [...recipes, newRecipe];
    setRecipes(updated);
    localStorage.setItem("recipes", JSON.stringify(updated));
};

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/createrecipe" element={<CreateRecipe onRecipeCreate={handleRecipeCreate} />} />
        <Route path="/saverecipe" element={<SaveRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;