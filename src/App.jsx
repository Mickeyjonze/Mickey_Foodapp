import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainr from "./Components/innerContainer";
import FoodDetails from "./Components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainr>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainr>
        <InnerContainr>
          <FoodDetails foodId={foodId} />
        </InnerContainr>
      </Container>
    </div>
  );
}

export default App;
