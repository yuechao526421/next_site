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
  iconBg?: string;
  icon?: any;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  iconBg,
  icon: Icon,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl ${
        popular ? 'shadow-xl' : 'shadow-md'
      } bg-white overflow-hidden hover:shadow-lg transition-all duration-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {popular && (
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          最受欢迎
        </div>
      )}

      <div className="p-8">
        {Icon && (
          <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6`}>
            <Icon className="text-white" size={32} strokeWidth={2} />
          </div>
        )}
        
        <h3 className="text-2xl font-black text-black mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-5xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {price}
          </span>
          {price !== '联系报价' && <span className="text-gray-500 ml-2">起</span>}
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-black mr-3 flex-shrink-0 mt-1" size={20} strokeWidth={3} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`block text-center px-6 py-3 rounded-full font-semibold transition-all ${
            popular
              ? 'bg-black text-white hover:bg-gray-800'
              : 'border-2 border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          立即咨询
        </Link>
      </div>
    </motion.div>
  );
}

