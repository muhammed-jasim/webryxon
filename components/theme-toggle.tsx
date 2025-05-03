'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full w-10 h-10"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 30, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-300" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}