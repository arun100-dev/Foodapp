import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Container from "./components/Container";
import Nav from "./components/Nav";
import "./App.css";
import InnerComponents from "./components/InnerComponents";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerComponents>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerComponents>
        <InnerComponents>
          <FoodDetails foodId={foodId} />
        </InnerComponents>
      </Container>
    </div>
  );
}

export default App;
