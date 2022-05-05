import classes from "./App.module.css";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <div className={classes.app}>
      <Navigation />
    </div>
  );
}

export default App;
