import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import PostRecyclables from "./components/postRecyclables";
import GetRecyclables from "./components/getRecyclables";
import PutRecyclables from "./components/putRecyclables";
import DeleteRecyclables from "./components/deleteRecyclables";
import UnknownPage from "./unknownpage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/GetRecyclables">
              <GetRecyclables />
            </Route>
            <Route path="/PostRecyclables">
              <PostRecyclables />
            </Route>
            <Route path="/PutRecyclables">
              <PutRecyclables />
            </Route>
            <Route path="/DeleteRecyclables">
              <DeleteRecyclables />
            </Route>
            <Route path="*">
              <UnknownPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
