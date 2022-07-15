import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllEbooks from "./components/AllEbooks";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import UnderconstructionPage from "./components/UnderconstructionPage";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/collections" element={<AllEbooks />} />
        <Route exact path="/fake" element={<UnderconstructionPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
