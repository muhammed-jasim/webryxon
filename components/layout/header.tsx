'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Code 
              size={32} 
              strokeWidth={2.5} 
              className="text-brand" 
            />
          </motion.div>
          <span className="font-bold text-xl tracking-tight">Webryxon</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
          <Button asChild size="sm" className="ml-4 bg-brand hover:bg-brand-dark">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className={cn('h-6 w-6', isMenuOpen ? 'hidden' : 'block')} />
            <X className={cn('h-6 w-6', isMenuOpen ? 'block' : 'hidden')} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background border-t"
          >
            <nav className="container py-5 flex flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-2 border-b border-border text-foreground hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild className="mt-5 bg-brand hover:bg-brand-dark">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Start a Project
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}