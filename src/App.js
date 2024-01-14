import React from "react";
import Products from "./component/Products";
import { Routes,Route } from "react-router-dom";
import Single_product from "./component/Single_product";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="single/:id" element={<Single_product/>}/>
      </Routes>
    </div>
  );
};

export default App;
