import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
