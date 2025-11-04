'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '张总',
    company: '插件开发工作室创始人',
    content: '之前找传统软件公司报价要8万，Tech团队只要3万就搞定了，质量还更好。开发过程透明，沟通顺畅，强烈推荐！',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    id: 2,
    name: '李经理',
    company: '制造业企业',
    content: '官网重构项目从需求到上线只用了18天，比预期快了很多。设计简约大气，SEO优化做得很专业，咨询量提升了40%。',
    rating: 5,
    avatar: '👔'
  },
  {
    id: 3,
    name: '王女士',
    company: '健身连锁店老板',
    content: '小程序开发非常满意！功能完善，用户体验好，会员活跃度提升明显。售后服务也很及时，有问题马上就解决。',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    id: 4,
    name: '刘总',
    company: '桌面软件创业公司',
    content: '技术实力强，对我们的业务理解深入，提出了很多有价值的建议。系统稳定运行半年了，没出过问题。性价比太高了！',
    rating: 5,
    avatar: '🧑‍💻'
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 0.98
    },
    center: {
      zIndex: 1,
      opacity: 1,
      scale: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      scale: 0.98
    }
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-black mb-4">客户评价</h2>
          <p className="text-xl text-gray-600">听听他们怎么说</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-16 md:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <Quote className="text-gray-200 mb-6" size={56} strokeWidth={1.5} />
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current mx-0.5" size={22} />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed text-center">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-4xl mr-4 shadow-sm">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-black text-lg mb-1">{testimonials[current].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[current].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons - 优化位置 */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110"
            aria-label="上一条评价"
          >
            <ChevronLeft className="text-current" size={28} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-all hover:scale-110"
            aria-label="下一条评价"
          >
            <ChevronRight className="text-current" size={28} strokeWidth={2.5} />
          </button>

          {/* Dots - 优化样式 */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current 
                    ? 'bg-black w-10' 
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`跳转到评价 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

