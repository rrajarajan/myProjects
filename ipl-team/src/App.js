import React from "react";
import Home from "./pages/Home";
import News from "./pages/News";
import Matches from "./pages/Matches";
import Pointstable from "./pages/PointsTable";
import Teams from "./pages/Teams";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/matches" component={Matches} />
          <Route path="/news" component={News} />
          <Route path="/pointstable" component={Pointstable} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
