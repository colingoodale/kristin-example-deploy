import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/chat" render={(props) => <Chat {...props} /> } />

        </Switch>
   </Router>
    </div>
  );
}

export default App;
