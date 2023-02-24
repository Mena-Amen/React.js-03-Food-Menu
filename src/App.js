import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardList from "./components/CardList";
import { items } from "./data";
function App() {
  const [itemsData, setItemsData] = useState(items);
  // Get All Cat Unique
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);
  // Filter by Category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  // Filter by Search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <CardList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
