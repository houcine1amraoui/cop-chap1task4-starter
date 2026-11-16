import Item from "./Item";

function ItemList({ groceryItems }) {
  return (
    <ul>
      <Item item={groceryItems[0]} />
      <Item item={groceryItems[1]} />
    </ul>
  );
}

export default ItemList;
