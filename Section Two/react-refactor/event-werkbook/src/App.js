import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Change from "./components/change";
import Click from "./components/click";
import Keypress from "./components/keypress";
import Mousemove from "./components/mousemove";
import Submit from "./components/submit";
import UnknownPage from "./UnknownPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Change" element={<Change />}></Route>
            <Route path="/Click" element={<Click />}></Route>
            <Route path="/Keypress" element={<Keypress />}></Route>
            <Route path="/Mousemove" element={<Mousemove />}></Route>
            <Route path="/Submit" element={<Submit />}></Route>
            <Route path="*" element={<UnknownPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
