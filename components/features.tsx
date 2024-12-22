"use client";

import { motion } from 'framer-motion';
import { Database, Globe, Lock, Smartphone, Cpu, Cloud, Sparkles, GitBranch, Gauge } from 'lucide-react';

const features = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Scalable Architecture",
    description: "Build systems that grow with your business needs",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Deployment",
    description: "Deploy worldwide with optimal performance",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and best practices",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile-First Design",
    description: "Responsive solutions for all devices",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Integration",
    description: "Smart solutions powered by artificial intelligence",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Native",
    description: "Modern cloud infrastructure and services",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Modern UX",
    description: "Intuitive and engaging user experiences",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: <GitBranch className="h-8 w-8" />,
    title: "Version Control",
    description: "Professional code management and collaboration",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Performance Metrics",
    description: "Real-time monitoring and optimization",
    gradient: "from-amber-500 to-yellow-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Cutting-Edge Features
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage our comprehensive suite of features to build powerful, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-lg border bg-card relative overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className={`text-primary mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-r ${feature.gradient} group-hover:text-transparent group-hover:bg-clip-text`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r ${feature.gradient} group-hover:bg-clip-text transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}