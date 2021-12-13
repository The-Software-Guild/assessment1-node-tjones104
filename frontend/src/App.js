import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import PostRecyclables from './pages/postRecyclables';
import GetRecyclables from './pages/getRecyclables';
import PutRecyclables from './pages/putRecyclables';
import DeleteRecyclables from './pages/deleteRecyclables';
import NotFound from './pages/NotFound';
import './App.css';

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
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;