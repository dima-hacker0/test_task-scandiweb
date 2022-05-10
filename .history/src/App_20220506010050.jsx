import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Provider from "react-redux";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className={classes.app}>
          <Header />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
