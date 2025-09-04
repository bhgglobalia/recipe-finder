import { useEffect, useMemo, useState } from "react";

export default function useRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  const nonVegKeywords = useMemo(
    () => [
      "chicken", "beef", "pork", "lamb", "mutton", "fish",
      "egg", "shrimp", "prawn", "bacon", "ham", "turkey", "meat"
    ],
    []
  );

  const isNonVeg = (recipe) =>
    recipe?.ingredients?.some((ing) =>
      nonVegKeywords.some((kw) => ing.toLowerCase().includes(kw))
    ) ?? false;

  const getRecipes = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      if (!res.ok) throw new Error("Failed to fetch recipes");
      const data = await res.json();
      setRecipes(Array.isArray(data.recipes) ? data.recipes : []);
    } catch (err) {
      console.error(err);
      setError("Could not load recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredRecipes = useMemo(() => {
    if (activeFilter === "veg") return recipes.filter((r) => !isNonVeg(r));
    if (activeFilter === "nonveg") return recipes.filter((r) => isNonVeg(r));
    return recipes;
  }, [recipes, activeFilter]);

  const addToWatchlist = (recipe) => {
    if (!watchlist.find((r) => r.id === recipe.id)) {
      setWatchlist([...watchlist, recipe]);
    } else {
      alert("This recipe is already in your watchlist!");
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((r) => r.id !== id));
  };

  const openRecipe = async (id) => {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setSelected(data);
    } catch (e) {
      console.error(e);
      setError("Could not load recipe details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return {
    recipes,
    filteredRecipes,
    loading,
    error,
    activeFilter,
    setActiveFilter,
    selected,
    setSelected,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    openRecipe,
    isNonVeg,
  };
}
