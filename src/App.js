import Home from "./component/home/Home";
import { Routes, Route } from "react-router-dom";
import Signin from "./component/Auth/Signin";
import ProductCategory from "./component/products/ProductCategory";
import ProductDetail from "./component/products/ProductDetail";
import Navheader from "./component/header/Navheader";
import AddProduct from "./component/header/AddProduct";
function App() {
  return (
    <div className="App">
      <Navheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="products/:cartItem" element={<ProductCategory />} />
        <Route path="/productdetails/:id" element={<ProductDetail />} />
        <Route path="/addItem" element={<AddProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
