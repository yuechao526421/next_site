'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: '开发成本', us: '¥6,666 起', them: '¥20,000 起' },
  { feature: '响应速度', us: '2小时内', them: '1-2个工作日' },
  { feature: '项目周期', us: '15-45天', them: '30-60天' },
  { feature: '免费维护', us: '45天', them: '10-20天' },
  { feature: '售后响应', us: '24小时在线', them: '工作时间' },
  { feature: '二次开发', us: '优惠30%', them: '按新项目收费' },
  { feature: '源码交付', us: '✓ 完整交付', them: '部分交付' },
  { feature: '部署协助', us: '✓ 免费协助', them: '额外收费' },
];

export default function PriceComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-black mb-4">为什么选择我们？</h2>
          <p className="text-xl text-gray-600">与传统软件公司的对比</p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 bg-black text-white p-6">
            <div className="text-center font-bold">对比项目</div>
            <div className="text-center">
              <div className="text-xl font-black">Tech团队</div>
              <div className="text-sm text-gray-400">（我们）</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-black">传统公司</div>
              <div className="text-sm text-gray-400">（他们）</div>
            </div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-3 p-6 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-black font-semibold flex items-center">
                {item.feature}
              </div>
              <div className="text-center">
                <span className="inline-flex items-center justify-center bg-gray-100 text-black px-4 py-2 rounded-full font-bold text-sm">
                  {item.us.includes('✓') ? (
                    <><Check size={16} className="mr-1" strokeWidth={3} /> {item.us.replace('✓ ', '')}</>
                  ) : (
                    item.us
                  )}
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center justify-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full font-semibold text-sm">
                  {item.them.includes('部分') || item.them.includes('额外') ? (
                    <><X size={16} className="mr-1" strokeWidth={3} /> {item.them}</>
                  ) : (
                    item.them
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-md">
            <p className="text-3xl font-black text-black mb-2">
              平均为客户节省 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">40%+</span> 开发成本
            </p>
            <p className="text-gray-600">同样的质量，更优的价格，更好的服务</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

