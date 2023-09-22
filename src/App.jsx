import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Create from "./pages/Create";
import Saved from "./pages/Saved";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FoodCard from "./components/FoodCard";
import Recipes from "./pages/Recipes";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import RecipeDetails from "./pages/RecipeDetails";
import MyRecipes from "./pages/MyRecipes";
import { AuthProvider } from "./context/authContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/card" element={<FoodCard />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/my_recipes" element={<MyRecipes />} />
        </Routes>
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
