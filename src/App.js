import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} /> */}
    </Routes>
  );
}

export default App;
