export default function Modal({ selected, setSelected }) {
  return (
    <div className="modal-overlay" onClick={() => setSelected(null)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={() => setSelected(null)}>
          ×
        </button>
        <div className="modal-header">
          <img src={selected?.image} alt={selected?.name} />
          <div className="modal-title">
            <h2>{selected?.name}</h2>
          </div>
        </div>
        <div className="modal-content">
          <h3>Ingredients</h3>
          <ul>
            {selected?.ingredients?.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <ol>
            {selected?.instructions?.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
