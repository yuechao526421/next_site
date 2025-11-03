'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: '首页' },
  { href: '/services', label: '服务' },
  { href: '/cases', label: '案例' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-purple-500/20 border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - 更有创意的设计 */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300"
                 style={{ boxShadow: '0 0 20px rgba(168,85,247,0.5)' }}>
              <span className="text-white font-bold text-xl relative z-10">T</span>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tech团队
            </span>
          </Link>

          {/* Desktop Navigation - 创意样式 */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">立即咨询</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </div>

          {/* Mobile menu button - 更有设计感 */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500 transition-colors text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - 深色风格 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:bg-purple-500/20 hover:text-white rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2 rounded-full"
              >
                立即咨询
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

