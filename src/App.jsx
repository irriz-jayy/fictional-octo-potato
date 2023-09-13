import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Create from "./pages/Create";
import Saved from "./pages/Saved";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
