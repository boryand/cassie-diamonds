import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/styles/style.css";
import Landing from "./components/landing";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Landing exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
