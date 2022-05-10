import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import { Provider } from "react-redux";
import { store } from "./redux/rootReducer";
import MainPage from "./components/main-page/main-page";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <MainPage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
