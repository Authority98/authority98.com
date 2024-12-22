"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface StoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function StoryDialog({ open, onOpenChange }: StoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-lg border border-primary/20">
        <div className="relative z-10">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                My Journey
              </span>
            </DialogTitle>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 space-y-6 text-muted-foreground"
          >
            <p>
              With over 9 years of experience in full-stack development, I've dedicated myself to mastering the art of building complete digital solutions. My journey began with a passion for problem-solving and has evolved into a comprehensive skill set that allows me to handle every aspect of web development.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Technical Expertise</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Frontend: Next.js, React, TypeScript, TailwindCSS</li>
                <li>Backend & Database: Firebase, MongoDB, RESTful APIs</li>
                <li>State Management: Redux, Context API, Zustand</li>
                <li>Authentication: NextAuth.js, Firebase Auth</li>
                <li>Cloud Services: Vercel, Firebase Cloud Functions</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Work Philosophy</h3>
              <p>
                As a solo developer, I take pride in delivering end-to-end solutions that combine clean code, exceptional user experience, and scalable architecture. Every project is an opportunity to create something meaningful and impactful.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Recent Achievements</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Successfully delivered 250+ full-stack projects</li>
                <li>Maintained 100% client satisfaction rate</li>
                <li>Specialized in performance optimization and scalable solutions</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 