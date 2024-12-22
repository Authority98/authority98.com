"use client";

import { motion } from 'framer-motion';
import { Zap, MessageCircle } from 'lucide-react';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Globe from '@/components/ui/globe';
import { useState } from 'react';
import ProjectDialog from '@/components/ui/project-dialog';

export default function Hero() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      
      <AnimatedGridPattern 
        width={50}
        height={50}
        className="opacity-40"
        maxOpacity={0.3}
        duration={3}
        numSquares={40}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.div 
          className="mb-8 inline-flex items-center bg-primary/10 rounded-full px-4 py-1.5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span 
            className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className="text-sm font-medium flex items-center gap-2">
            Full Stack Solo Developer
            <Zap className="h-4 w-4 text-red-500" />
          </span>
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Building Complete
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text inline-block ml-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Digital Solutions
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          From concept to deployment, I deliver end-to-end web solutions as a solo developer. 
          Specializing in modern full-stack development to bring your ideas to life with clean code and exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-4"
        >
          <RainbowButton 
            className="flex items-center gap-1.5 text-sm"
            onClick={() => setIsDialogOpen(true)}
          >
            Let's discuss about your project
            <MessageCircle className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </RainbowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative h-[500px] hidden md:flex items-start justify-center overflow-hidden"
        >
          <div className="absolute -bottom-1/2 flex items-center justify-center w-full">
            <Globe 
              className="opacity-80 scale-140 max-w-[800px]"
            />
          </div>
        </motion.div>
      </motion.div>

      <ProjectDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}