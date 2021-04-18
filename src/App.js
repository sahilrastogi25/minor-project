import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
