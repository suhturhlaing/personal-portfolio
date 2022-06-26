import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProjectDisplay from "./pages/ProjectDisplay"

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience/>} />
        </Routes>
        <Footer />
     
    </div>
  );
}

export default App;
