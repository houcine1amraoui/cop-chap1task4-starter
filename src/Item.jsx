function Item({ item }) {
  return (
    <li key={item.name}>
      <div className="container">
        <input
          type="checkbox"
          value={item.completed}
          checked={item.completed}
        />
        <p>{item.name}</p>
      </div>
      <div>
        <button className="remove-button">X</button>
      </div>
    </li>
  );
}

export default Item;
