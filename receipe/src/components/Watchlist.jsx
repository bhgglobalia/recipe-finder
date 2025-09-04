export default function Watchlist({ watchlist, openRecipe, removeFromWatchlist }) {
  return (
    <div className="watchlist">
      <h2>Watchlist</h2>
      {watchlist.length > 0 ? (
        <ul>
          {watchlist.map((item) => (
            <li key={item.id} className="watchlist-item">
              <span
                onClick={() => openRecipe(item.id)}
                className="clickable"
              >
                {item.name}
              </span>
              <button
                className="remove-btn"
                onClick={() => removeFromWatchlist(item.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">No recipes in watchlist yet!</p>
      )}
    </div>
  );
}
