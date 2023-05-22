import Contact from "./pages/Contact";
import Home from "./pages/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Task from "./pages/Task";
import Navbar from "./component/Navbar";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}
