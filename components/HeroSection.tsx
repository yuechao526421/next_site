'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, Code, Zap, Heart, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* 创意流光背景 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 主流光效果 */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(59,130,246,0.3) 50%, transparent 100%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* 紫色光晕 */}
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 50%, transparent 100%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* 浮动装饰元素 */}
        <motion.div
          className="absolute top-20 right-20 text-yellow-400"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles size={40} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-10 text-pink-400"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Heart size={35} fill="currentColor" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 text-purple-400"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Star size={30} fill="currentColor" />
        </motion.div>

        <div className="text-center">
          {/* 主标题 - 超有创意的排版 */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2
              }}
              className="inline-block"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-2">
                <span className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  用技术为您
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 12,
                delay: 0.4
              }}
              className="inline-block"
            >
              <h1 className="text-6xl md:text-9xl font-black">
                <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent" 
                      style={{ 
                        textShadow: '0 0 40px rgba(59,130,246,0.5)',
                      }}>
                  省钱
                </span>
              </h1>
            </motion.div>
          </div>

          {/* 标签 - 创意形状 */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.6
            }}
            className="inline-block mb-8"
          >
            <div className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <span className="relative text-white font-bold text-lg flex items-center gap-2">
                <Zap size={20} fill="currentColor" />
                专业·高效·性价比
                <Sparkles size={20} />
              </span>
            </div>
          </motion.div>

          {/* 描述文字 - 渐变效果 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              个人开发团队，专注中小企业软件开发
            </p>
            <p className="text-xl md:text-2xl">
              <span className="font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                明码标价 · 快速交付 · 终身维护
              </span>
            </p>
          </motion.div>

          {/* Key Features - 不规则卡片 */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { text: '价格透明，比传统公司省40%', color: 'from-green-400 to-emerald-600', icon: CheckCircle },
              { text: '30天免费维护保障', color: 'from-blue-400 to-cyan-600', icon: Code },
              { text: '平均15天快速交付', color: 'from-purple-400 to-pink-600', icon: Zap }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 1 + index * 0.15 
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {/* 发光效果 */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                  
                  {/* 卡片主体 - 斜切角 */}
                  <div className={`relative bg-gradient-to-r ${feature.color} px-6 py-4 text-white font-bold`}
                       style={{
                         clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                         transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`
                       }}>
                    <div className="flex items-center space-x-3">
                      <Icon size={24} strokeWidth={3} />
                      <span>{feature.text}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons - 超创意按钮 */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-2xl font-bold text-xl overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)',
                  boxShadow: '0 0 40px rgba(236,72,153,0.6)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center gap-3">
                  <Zap size={24} fill="currentColor" />
                  立即咨询
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/cases"
                className="relative px-10 py-5 bg-slate-800/80 backdrop-blur-sm text-white rounded-2xl font-bold text-xl border-2 border-cyan-400 overflow-hidden group"
                style={{
                  clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                  boxShadow: '0 0 30px rgba(34,211,238,0.4)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative flex items-center gap-3">
                  <Code size={24} />
                  查看案例
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats - 创意数据展示 */}
          <motion.div
            className="mt-20 flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            {[
              { number: '50+', label: '成功案例', gradient: 'from-yellow-400 to-orange-500', icon: '🚀' },
              { number: '98%', label: '客户满意度', gradient: 'from-pink-400 to-rose-500', icon: '❤️' },
              { number: '24h', label: '快速响应', gradient: 'from-blue-400 to-cyan-500', icon: '⚡' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  delay: 1.8 + index * 0.2,
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {/* 发光背景 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-2xl opacity-30 group-hover:opacity-60 transition-opacity rounded-3xl`}></div>
                
                {/* 主卡片 */}
                <div className="relative bg-slate-800/60 backdrop-blur-md border-2 border-slate-700 rounded-3xl p-8 min-w-[180px]"
                     style={{
                       transform: `rotate(${(index - 1) * 3}deg)`,
                     }}>
                  <div className="text-5xl mb-2">{stat.icon}</div>
                  <div className={`text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
                </div>
              </motion.div>
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

