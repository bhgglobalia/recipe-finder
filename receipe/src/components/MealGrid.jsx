import MealCard from "./MealCard.jsx";

export default function MealGrid({ filteredRecipes, loading, isNonVeg, openRecipe, addToWatchlist }) {
  return (
    <div className="meal-grid">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <MealCard
            key={recipe.id}
            recipe={recipe}
            isNonVeg={isNonVeg}
            openRecipe={openRecipe}
            addToWatchlist={addToWatchlist}
          />
        ))
      ) : (
        !loading && <p className="empty">No recipes found. Try again!</p>
      )}
    </div>
  );
}
