export default function MealCard({ recipe, isNonVeg, openRecipe, addToWatchlist }) {
  const nonVeg = isNonVeg(recipe);

  return (
    <div className="meal-card" onClick={() => openRecipe(recipe.id)}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="card-body">
        <h3 className="title">{recipe.name}</h3>
        <div className="meta">
          <span><strong>Cuisine:</strong> {recipe.cuisine}</span>
          <span><strong>Difficulty:</strong> {recipe.difficulty}</span>
          <span><strong>Calories:</strong> {recipe.caloriesPerServing}</span>
        </div>
        <span className={`badge ${nonVeg ? "nonveg" : "veg"}`}>
          {nonVeg ? "Non-Veg" : "Veg"}
        </span>
      </div>
      <button
        className="watch-btn"
        onClick={(e) => {
          e.stopPropagation();
          addToWatchlist(recipe);
        }}
      >
        + Watchlist
      </button>
    </div>
  );
}
