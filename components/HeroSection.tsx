'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden overflow-x-hidden bg-white">
      {/* 简洁几何装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 大圆形装饰 */}
        <motion.div
          className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full bg-gray-50"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* 小圆形装饰 */}
        <motion.div
          className="absolute bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gray-100"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* 方形装饰 */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-black rotate-12"
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 12, opacity: 0.05 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* 主标题 - 极简大字体 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">用服务为您</span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">省钱</span>
            </h1>
          </motion.div>

          {/* 副标题 - 简洁 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 bg-black text-white text-sm font-medium rounded-full mb-6">
              专业·高效·性价比
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              个人开发团队，专注中小企业软件开发
            </p>
            <p className="text-lg text-gray-500">
              明码标价 · 快速交付 · 后期维护
            </p>
          </motion.div>

          {/* Key Features - 简洁卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              '价格透明，比传统公司省40%',
              '30天免费维护保障',
              '平均15天快速交付'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl p-6 text-center group"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckCircle className="text-white" size={16} strokeWidth={3} />
                  </div>
                </div>
                <p className="text-gray-900 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons - 极简风格 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all"
            >
              立即咨询
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link
              href="/cases"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black text-black rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all"
            >
              查看案例
            </Link>
          </motion.div>

          {/* Stats - 极简数据展示 */}
          <motion.div
            className="mt-24 grid grid-cols-3 gap-4 md:gap-12 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { number: '50+', label: '成功案例' },
              { number: '98%', label: '客户满意度' },
              { number: '24h', label: '快速响应' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2 md:mb-3">
                  {stat.number}
                </div>
                <div className="text-xs md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

