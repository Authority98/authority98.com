"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useState } from "react";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDialog({ open, onOpenChange }: ProjectDialogProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "",
    description: ""
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 space-y-6"
        >
          <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-lg border border-primary/20 !p-6">
              <div className="relative z-10 space-y-8">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-2xl">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                      Let's Discuss Your Project
                    </span>
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground pt-2">
                    Share your vision with us, and we'll help bring it to life.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Project Type</label>
                  <Input 
                    placeholder="e.g., Web Application, Mobile App, E-commerce"
                    value={formState.projectType}
                    onChange={(e) => setFormState(prev => ({ ...prev, projectType: e.target.value }))}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Project Description</label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    className="h-32"
                    value={formState.description}
                    onChange={(e) => setFormState(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button className="group" onClick={() => onOpenChange(false)}>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 