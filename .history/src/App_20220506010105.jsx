import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Provider from "react-redux";
import { store } from "./redux/rootReducer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.app}>
          <Header />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
