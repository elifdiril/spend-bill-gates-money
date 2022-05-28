import Products from "./components/Products";
import Title from "./components/Title";
import "./App.css";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <Title />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
