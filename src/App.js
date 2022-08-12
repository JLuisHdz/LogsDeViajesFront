import NavBar from "./components/navbar/NavBar";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import Crear from "./pages/Crear/crear";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/register" element={user ? <Home /> : <Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/crear" element={user ? <Home /> : <Crear />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;