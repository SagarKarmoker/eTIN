import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/eKYCLogin";
import ThirdParty from "./pages/ThirdParty";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {
  const isUserSignedIn = !!localStorage.getItem("token");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thirdParty" element={<ThirdParty />} />
        <Route path="/about" element={<About />} />
        {isUserSignedIn && <Route path="/form" element={<Form />} />}
        {isUserSignedIn && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
    </div>
  );
}

export default App;
