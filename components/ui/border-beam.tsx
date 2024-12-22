"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface BorderBeamProps {
  duration?: number;
  containerClassName?: string;
  pathClassName?: string;
}

/**
 * @name BorderBeam
 * @description A component that creates an animated border beam effect
 * @param duration - Animation duration in seconds
 * @param containerClassName - Additional classes for the container
 * @param pathClassName - Additional classes for the SVG path
 */
export function BorderBeam({
  duration = 2.5,
  containerClassName,
  pathClassName,
}: BorderBeamProps) {
  useEffect(() => {
    // If you need client-side only logic, keep it here
  }, []);

  return (
    <div className={cn("absolute inset-0 pointer-events-none", containerClassName)}>
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <svg className="w-full h-full">
            <motion.rect
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              strokeWidth={2}
              strokeDasharray="0 1"
              stroke="url(#gradient)"
              fill="none"
              className={cn("w-full h-full", pathClassName)}
            />
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="#FF0080" />
                <stop offset="50%" stopColor="#7928CA" />
                <stop offset="100%" stopColor="#FF4D4D" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 