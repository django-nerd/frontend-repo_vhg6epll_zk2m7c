import React from 'react';

export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">See how it transforms your workflow</h2>
            <p className="mt-4 text-gray-600">Type a question like “What were last month’s top 5 products by margin?” and get a clear answer plus a ready-to-use DAX measure you can paste into Power BI. Explain mode teaches you exactly how it works.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Ask questions, refine prompts, and pin answers</li>
              <li>Generate and explain DAX with inline comments</li>
              <li>Copy snippets and export to share with your team</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img alt="chat ui" className="rounded-xl shadow ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=800&auto=format&fit=crop" />
            <img alt="dax code" className="rounded-xl shadow ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxkYXglMjBjb2RlfGVufDB8MHx8fDE3NjIzODU4NTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" />
            <img alt="analytics" className="rounded-xl shadow ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop" />
            <img alt="team" className="rounded-xl shadow ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" />
          </div>
        </div>
      </div>
    </section>
  );
}
