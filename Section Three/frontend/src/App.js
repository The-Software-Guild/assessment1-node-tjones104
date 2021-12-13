import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/GetRecyclables" element={<GetRecyclables />}></Route>
            <Route
              path="/PostRecyclables"
              element={<PostRecyclables />}
            ></Route>
            <Route path="/PutRecyclables" element={<PutRecyclables />}></Route>
            <Route
              path="/DeleteRecyclables"
              element={<DeleteRecyclables />}
            ></Route>
            <Route path="*" element={<UnknownPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
