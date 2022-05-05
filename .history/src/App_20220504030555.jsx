import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
