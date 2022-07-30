import React from "react"
import "./app.scss"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
const App = () => {
  const user =true
  return (
    <Router>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register/>} />
      <Route path="/movies" element={user ?  <Home type="movie" />: <Register/>} />
      <Route path="/series" element={user ?  <Home type="series" />: <Register/>} />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={ <Register />} />
      <Route path="/watch" element={user ?  <Watch />: <Register/>} />   

    </Routes>
    </Router>);
  
};

export default App;