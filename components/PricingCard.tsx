'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  gradient: string;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  gradient,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl ${
        popular ? 'shadow-2xl scale-105 z-10' : 'shadow-lg'
      } bg-white overflow-hidden hover:-translate-y-2 transition-all duration-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 text-sm font-bold">
          最受欢迎
        </div>
      )}

      <div className={`h-2 bg-gradient-to-r ${gradient}`} />

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            {price}
          </span>
          {price !== '联系报价' && <span className="text-gray-500 ml-2">起</span>}
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`block text-center px-6 py-3 rounded-full font-semibold transition-all ${
            popular
              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg'
              : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
          }`}
        >
          立即咨询
        </Link>
      </div>
    </motion.div>
  );
}

