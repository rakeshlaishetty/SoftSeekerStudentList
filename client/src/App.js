import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages";
import Students from "./pages/Students";
import Student from "./pages/Student";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/students" element={<Students />} />
        <Route exact path="/student/:id" element={<Student />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
