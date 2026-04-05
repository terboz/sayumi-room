import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-white/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-widest text-primary font-medium z-50">SAYUMI</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-sm tracking-widest text-secondary">
          <a href="/#method" className="hover:text-primary transition-colors">Awakening Method</a>
          <Link to="/price" className="hover:text-primary transition-colors">Price</Link>
          <a href="/#booking" className="hover:text-primary transition-colors">Booking</a>
        </div>
        
        {/*<div className="hidden md:block">
          <a href="/#booking" className="inline-block bg-gradient-to-r from-[#735C00] to-[#9A7B00] text-white px-6 py-2.5 rounded-full text-sm tracking-wider hover:opacity-90 transition-opacity">
            LINEから予約・相談
          </a>
        </div>*/}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <a href="/#method" onClick={() => setIsMenuOpen(false)} className="text-xl tracking-widest text-secondary hover:text-primary">Awakening Method</a>
            <Link to="/price" onClick={() => setIsMenuOpen(false)} className="text-xl tracking-widest text-secondary hover:text-primary">Price</Link>
            {/*<a href="/#booking" onClick={() => setIsMenuOpen(false)} className="text-xl tracking-widest text-secondary hover:text-primary">Booking</a>
            <a href="/#booking" onClick={() => setIsMenuOpen(false)} className="mt-8 inline-block bg-gradient-to-r from-[#735C00] to-[#9A7B00] text-white px-8 py-3 rounded-full tracking-wider">
              LINEから予約・相談
            </a>*/}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
