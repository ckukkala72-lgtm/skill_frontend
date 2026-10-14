import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Programs from "./pages/Programs";
import Roadmaps from "./pages/Roadmaps";
import Projects from "./pages/Projects";
import JobReady from "./pages/JobReady";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

const App = () => (
  <div className="page-grid min-h-screen bg-[#07111f]">
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/job-ready" element={<JobReady />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;
