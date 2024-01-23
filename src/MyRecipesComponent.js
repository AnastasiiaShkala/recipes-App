import React from 'react';


function MyRecipesComponent({ label, image, calories, ingredientLines, url }) {
  return (
    <div className="recipe-container">
      <div className="container">
        <h2>"{label}"</h2>
      </div>

      <div className="container">
        <img src={image} alt="products" />
      </div>

      <ul className="container list">
        {ingredientLines.map((ingredient, index) => (
          <li key={index}>
            ⭕{ingredient}
          </li>
        ))}
      </ul>

      <div className="container">
        <p>{calories.toFixed()} calories</p>
      </div>

      <div className="container">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>🍳Сooking</h3>
        </a>
      </div>

      <hr className="recipe-separator" />
    </div>
  );
}

export default MyRecipesComponent;