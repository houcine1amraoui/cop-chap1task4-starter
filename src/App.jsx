import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ItemList from "./ItemList";

function App() {
  const [groceryItems, setGroceryItems] = useState([]);

  return (
    <main className="App">
      <div>
        <Header />
        <ItemList groceryItems={groceryItems} />
      </div>
    </main>
  );
}

export default App;
