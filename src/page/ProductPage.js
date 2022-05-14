import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("dddd", query.get("q"));
  return (
    <div>
      <p1>Show all Products!!!</p1>
    </div>
  );
};

export default ProductPage;
