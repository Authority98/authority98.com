"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const [particles, setParticles] = useState<Array<{ x: number, y: number }>>([]);

  useEffect(() => {
    // Initialize particles only on client side
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: 100
      }))
    );
  }, []);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
              animate={{
                y: ["100%", "-20%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Let's build something extraordinary together. Our team is ready to turn your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span className="relative z-10">Schedule a Call</span>
          </Button>
        </div>
      </div>
    </section>
  );
}