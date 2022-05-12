import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import { Provider } from "react-redux";
import { store } from "./redux/root_reducer";
import MainPage from "./components/main-page/main_page";
import ProductPage from "./components/productPage/product_page";

function App() {
  return (
        <Header />
        <Routes>
          <Route element={<ProductPage />} path="/product-page" />
          <Route element={<MainPage />} path="/" />
        </Routes>
  );
}

export default App;
