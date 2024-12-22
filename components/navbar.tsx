"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ShineBorder from '@/components/ui/shine-border';
import StoryDialog from '@/components/ui/story-dialog';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
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
                
                {/* Spinning "x" connecting element */}
                <div className="ml-4 flex items-center">
                  <motion.div
                    className="relative w-3 h-3 flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      rotate: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.span 
                      className="absolute w-3 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full"
                      style={{ rotate: 45 }}
                    />
                    <motion.span 
                      className="absolute w-3 h-0.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full"
                      style={{ rotate: -45 }}
                    />
                  </motion.div>
                </div>
                
                {/* Enhanced Creative signature */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  className="text-[10px] font-light tracking-wider bg-primary/5 px-3 py-1 rounded-full ml-4"
                >
                  <motion.span
                    className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    By Usama ❤️
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsStoryOpen(true)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                My Journey
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom border only */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
          <ShineBorder
            borderRadius={0}
            borderWidth={1}
            duration={10}
            color={["#FF0080", "#7928CA", "#FF4D4D"]}
            className="w-full min-w-full bg-transparent"
          >
            <div />
          </ShineBorder>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <button
              className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              onClick={() => {
                setIsStoryOpen(true);
                setIsOpen(false);
              }}
            >
              My Journey
            </button>
          </div>
        </div>
      )}

      {/* Add Story Dialog */}
      <StoryDialog 
        open={isStoryOpen}
        onOpenChange={setIsStoryOpen}
      />
    </nav>
  );
}