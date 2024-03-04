import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import EmployeeList from "./components/Employee";
import Home from "./components/Home";
import MainBar from "./components/MainBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <MainBar />
        <div className="screen-container">
          <Router>
            <Routes>
              {/* <Route index element={<HomeScreen />} /> */}
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/employees" element={<EmployeeList/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
