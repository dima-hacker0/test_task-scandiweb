import classes from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import MainPage from "./components/main-page/main_page";
import ProductPage from "./components/productPage/product_page";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<ProductPage />} path="/product-page" />
        <Route element={<MainPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
