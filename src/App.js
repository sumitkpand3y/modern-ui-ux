import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
