import Item from "./Item";

function ItemList({ groceryItems }) {
  return (
    <ul>
      {groceryItems.map((item) => {
        return <Item item={item} />;
      })}
    </ul>
  );
}

export default ItemList;
