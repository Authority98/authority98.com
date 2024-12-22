"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1 group">
              <div className="flex items-center relative">
                <span className="text-primary font-mono text-lg mr-0.5">&gt;</span>
                <motion.span
                  className="text-primary font-mono text-lg"
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: [1, 0],
                    transition: {
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                >
                  _
                </motion.span>
              </div>
              <span className="font-bold text-xl">Authority98</span>
            </Link>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Authority98. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}