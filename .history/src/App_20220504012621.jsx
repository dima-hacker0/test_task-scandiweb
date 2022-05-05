import classes from "./App.module.css";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
