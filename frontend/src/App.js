import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Login from "./pages/eKYCLogin";
import ThirdParty from "./pages/ThirdParty";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import OrgDashboard from "./pages/orgs/OrgDashboard";
import Admin from "./pages/admin/Admin";

function App() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const role = localStorage.getItem("etinRole");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        {isUserSignedIn && role == 'Taxpayer' && <Route path="/form" element={<Form />} />}
        {isUserSignedIn && role == 'Taxpayer' && <Route path="/dashboard" element={<Dashboard />} />}

        {/* Admin */}
        {isUserSignedIn && role == 'Admin' && <Route path="/admin" element={<Admin />} />}

        {/* ThirdParty */}
        {isUserSignedIn && role == 'Organization' && <Route path="/organization" element={<OrgDashboard />} />}
        {isUserSignedIn && role == 'Organization' &&  <Route path="/thirdParty" element={<ThirdParty />} />}
      </Routes>
    </div>
  );
}

export default App;
