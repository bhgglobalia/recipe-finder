import "./App.css";
import useRecipes from "./hooks/useRecipes.js";
import Controls from "./components/Controls.jsx";
import MealGrid from "./components/MealGrid.jsx";
import Watchlist from "./components/Watchlist.jsx";
import Modal from "./components/Modal.jsx";


export default function App() {
  const {
    filteredRecipes,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    openRecipe,
    selected,
    setSelected,
    isNonVeg,
  } = useRecipes();

  return (
    <div className="app-container">
      <h1>Recipe Finder</h1>

      {/* Filter Controls */}
      <Controls activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      {/* Loading & Error */}
      {loading && <div className="loading">Loading…</div>}
      {error && <div className="error">{error}</div>}

      {/* Recipe Grid */}
      <MealGrid
        filteredRecipes={filteredRecipes}
        loading={loading}
        isNonVeg={isNonVeg}
        openRecipe={openRecipe}
        addToWatchlist={addToWatchlist}
      />

      {/* Watchlist */}
      <Watchlist
        watchlist={watchlist}
        openRecipe={openRecipe}
        removeFromWatchlist={removeFromWatchlist}
      />

      {/* Modal */}
      {selected && <Modal selected={selected} setSelected={setSelected} />}
    </div>
  );
}
