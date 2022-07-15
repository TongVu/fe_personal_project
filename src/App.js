import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllEbooks from "./components/AllEbooks";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import UnderConstructionMessage from "./components/UnderConstructionMessage";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/collections" element={<AllEbooks />} />
        <Route exact path="/fake" element={<UnderConstructionMessage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
