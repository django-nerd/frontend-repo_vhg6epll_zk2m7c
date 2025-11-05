import React from 'react';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">See how it transforms your workflow</h2>
            <p className="mt-4 text-gray-600">Type a question like “What were last month’s top 5 products by margin?” and get a clear answer plus a ready-to-use DAX measure you can paste into Power BI. Explain mode teaches you exactly how it works.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Ask questions, refine prompts, and pin answers</li>
              <li>Generate and explain DAX with inline comments</li>
              <li>Copy snippets and export to share with your team</li>
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              alt="chat ui"
              className="rounded-xl shadow ring-1 ring-gray-200"
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
            <motion.img
              alt="dax code"
              className="rounded-xl shadow ring-1 ring-gray-200"
              src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
            <motion.img
              alt="analytics"
              className="rounded-xl shadow ring-1 ring-gray-200"
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
            <motion.img
              alt="team"
              className="rounded-xl shadow ring-1 ring-gray-200"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
