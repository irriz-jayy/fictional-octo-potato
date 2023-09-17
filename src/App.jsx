import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FoodCard from "./components/FoodCard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/card" element={<FoodCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
