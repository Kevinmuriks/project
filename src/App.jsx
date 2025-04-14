import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className="bg-neutral-900 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
