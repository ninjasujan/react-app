import "./App.css";

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
