import groceryCartImg from "./assets/grocery-cart.png";

function Header() {
  return (
    <div>
      <h4 className="success">You&apos;re Done</h4>
      <div className="header">
        <h1>Shopping List</h1>
        <img src={groceryCartImg} alt="" />
        <input
          type="text"
          placeholder="Add an Item"
          className="item-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Enter key pressed");
            }
          }}
        />
      </div>
    </div>
  );
}

export default Header;
