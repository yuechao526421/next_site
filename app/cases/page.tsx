'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cases } from '@/data/cases';
import { Code, Smartphone, AppWindow, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', label: '全部案例', icon: null },
  { id: 'web', label: 'Web 开发', icon: Code },
  { id: 'app', label: 'App 开发', icon: Smartphone },
  { id: 'miniprogram', label: '小程序', icon: AppWindow },
];

export default function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCases = selectedCategory === 'all'
    ? cases
    : cases.filter(c => c.category === selectedCategory);

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section - 黑白灰 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-black text-black mb-6">成功案例</h1>
            <p className="text-xl text-gray-600">
              50+ 成功项目，涵盖多个行业
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - 黑白灰 */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-black text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {Icon && <Icon size={20} />}
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCases.map((caseItem, index) => (
                <motion.div
                  key={caseItem.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex"
                >
                  <Link
                    href={`/cases/${caseItem.id}`}
                    className="group flex flex-col w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="inline-block bg-white/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {caseItem.category === 'web' && 'Web 开发'}
                          {caseItem.category === 'app' && 'App 开发'}
                          {caseItem.category === 'miniprogram' && '小程序'}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-black transition-colors">
                        {caseItem.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {caseItem.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {caseItem.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {caseItem.technologies.length > 3 && (
                          <span className="text-gray-600 text-xs px-2 py-1">
                            +{caseItem.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mb-4 flex-1">
                        <div>
                          <div className="text-sm text-gray-500">项目周期</div>
                          <div className="font-semibold text-gray-900">{caseItem.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">项目费用</div>
                          <div className="font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">{caseItem.price}</div>
                        </div>
                      </div>

                      <div className="flex items-center text-black font-semibold group-hover:gap-2 transition-all mt-auto">
                        <span>查看详情</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">暂无该分类下的案例</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-black mb-6">
              看到心仪的案例了吗？
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              我们可以为您打造类似或更好的产品
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all"
            >
              开始您的项目
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

