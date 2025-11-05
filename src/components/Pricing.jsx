import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: 'month',
    highlight: false,
    features: [
      '200 chat messages',
      '50 DAX generations',
      'Community support',
      'Clipboard export'
    ]
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'month',
    highlight: true,
    features: [
      'Unlimited chat',
      'Unlimited DAX generation',
      'Explain & refine mode',
      'Priority support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'SSO & RBAC',
      'Self-hosting options',
      'SOC2, GDPR ready',
      'Dedicated success manager'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Choose a plan that fits your team. Upgrade or cancel anytime.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 ${tier.highlight ? 'md:scale-[1.03] md:ring-emerald-300' : ''}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">Most popular</div>
              )}
              <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                {tier.period && <span className="text-gray-500">/{tier.period}</span>}
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="h-5 w-5 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors ${tier.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>Start free trial</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
