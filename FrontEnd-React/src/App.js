import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./product/Add";
import Edit from "./product/Edit";
import View from "./product/View";
import Delete from "./product/Delete";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/delete/:id" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
