import React from "react";
import TodoList from "../../components/TodoList";
import ProductList from "../../components/ProductList";

const Home = () => {
  return (
    <div>
      <TodoList />
      <ProductList />
    </div>
  );
};

export default Home;
