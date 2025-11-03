'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '张总',
    company: '某电商平台创始人',
    content: '之前找传统软件公司报价要8万，RT团队只要3万就搞定了，质量还更好。开发过程透明，沟通顺畅，强烈推荐！',
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
    company: 'SaaS创业公司',
    content: '技术实力强，对我们的业务理解深入，提出了很多有价值的建议。系统稳定运行半年了，没出过问题。性价比太高了！',
    rating: 5,
    avatar: '🧑‍💻'
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
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
    <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
          <p className="text-xl text-gray-600">听听他们怎么说</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <Quote className="text-primary-200 mb-4" size={48} />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-3xl mr-4">
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonials[current].name}</div>
                  <div className="text-gray-600">{testimonials[current].company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ChevronLeft className="text-primary-600" size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
          >
            <ChevronRight className="text-primary-600" size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

