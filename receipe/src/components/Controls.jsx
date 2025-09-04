export default function Controls({ activeFilter, setActiveFilter }) {
  return (
    <div className="controls">
      <button
        className={`pill ${activeFilter === "veg" ? "active veg-btn" : "veg-btn"}`}
        onClick={() => setActiveFilter("veg")}
      >
        Veg
      </button>
      <button
        className={`pill ${activeFilter === "nonveg" ? "active nonveg-btn" : "nonveg-btn"}`}
        onClick={() => setActiveFilter("nonveg")}
      >
        Non-Veg
      </button>
      <button
        className={`pill ${activeFilter === "all" ? "active all-btn" : "all-btn"}`}
        onClick={() => setActiveFilter("all")}
      >
        All
      </button>
    </div>
  );
}
