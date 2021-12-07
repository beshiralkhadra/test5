import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mywork from "./components/Mywork";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/myWork">
        <Mywork />
      </Route>
      <Route path="/contactMe">
        <Contactme />
      </Route>

      <Footer />
    </Router>
  );
}

export default App;
