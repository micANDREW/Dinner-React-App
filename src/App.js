import React, { useState } from 'react';
import './App.css';

const ingredients = {
  chicken: ['Grilled Chicken', 'Chicken Alfredo', 'Chicken Stir-Fry'],
  fish: ['Baked Salmon', 'Fish Tacos', 'Lemon Butter Trout'],
  steak: ['Grilled Steak', 'Steak Fajitas', 'Beef and Broccoli'],
  shrimp: ['Garlic Butter Shrimp', 'Shrimp Scampi', 'Shrimp Stir-Fry'],
};

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [suggestedDish, setSuggestedDish] = useState(null);

  const handleIngredientSelection = (ingredient) => {
    setSelectedIngredient(ingredient);
    const randomIndex = Math.floor(Math.random() * ingredients[ingredient].length);
    setSuggestedDish(ingredients[ingredient][randomIndex]);
  };

  return (
    <div className="App">
      <h1>What's For Dinner?</h1>
      <div className="ingredient-buttons">
        {Object.keys(ingredients).map((ingredient) => (
          <button key={ingredient} onClick={() => handleIngredientSelection(ingredient)}>
            {ingredient}
          </button>
        ))}
      </div>
      {selectedIngredient && (
        <div className="suggestion">
          <h2>Suggested Dish:</h2>
          <p>{suggestedDish}</p>
        </div>
      )}
    </div>
  );
}

export default App;
