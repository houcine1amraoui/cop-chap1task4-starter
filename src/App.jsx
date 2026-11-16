import "./App.css";
import Header from "./Header";
import ItemList from "./ItemList";

function App() {
  const groceryItems = [
    { id: 1, name: "bread", quantity: 1, completed: false },
    { id: 2, name: "meat", quantity: 1, completed: false },
  ];
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
