import React from 'react';
import { MessageSquare, Terminal, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
    title: 'Ask in plain English',
    desc: 'Natural language chat grounded in your data model to answer business questions fast.'
  },
  {
    icon: <Terminal className="h-6 w-6 text-emerald-600" />,
    title: 'Auto DAX generation',
    desc: 'Instantly generate, explain, and refine DAX measures and calculated columns.'
  },
  {
    icon: <Shield className="h-6 w-6 text-emerald-600" />,
    title: 'Enterprise-grade privacy',
    desc: 'Your data stays yours. Role-level security awareness and audit trails included.'
  },
  {
    icon: <Zap className="h-6 w-6 text-emerald-600" />,
    title: 'One-click actions',
    desc: 'Copy to clipboard, export snippets, and share with your team in a click.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Everything you need to build DAX faster</h2>
          <p className="mt-4 text-gray-600">From ideation to production-grade measures—let the chatbot do the heavy lifting while you focus on insights.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, idx) => (
            <motion.div
              key={idx}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
