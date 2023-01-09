import { Route, Routes } from "react-router-dom";
// screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Profile from "./screens/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
