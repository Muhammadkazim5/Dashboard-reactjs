import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Inputs from "./components/Inputs";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Student from "./pages/Student";
import Instructor from "./pages/Instructor";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/instructor" element={<Instructor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
