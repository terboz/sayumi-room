import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Price from './pages/Price';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-serif text-text-main bg-surface overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

