'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: '开发成本', us: '¥8,888 起', them: '¥20,000 起' },
  { feature: '响应速度', us: '2小时内', them: '1-2个工作日' },
  { feature: '项目周期', us: '15-30天', them: '30-60天' },
  { feature: '免费维护', us: '30天', them: '7-15天' },
  { feature: '售后响应', us: '24小时在线', them: '工作时间' },
  { feature: '二次开发', us: '优惠50%', them: '按新项目收费' },
  { feature: '源码交付', us: '✓ 完整交付', them: '部分交付' },
  { feature: '部署协助', us: '✓ 免费协助', them: '额外收费' },
];

export default function PriceComparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">为什么选择我们？</h2>
          <p className="text-xl text-gray-600">与传统软件公司的对比</p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
            <div className="text-center text-lg font-semibold">对比项目</div>
            <div className="text-center">
              <div className="text-2xl font-bold">RT团队</div>
              <div className="text-sm opacity-90">（我们）</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">传统公司</div>
              <div className="text-sm opacity-90">（他们）</div>
            </div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-3 p-6 ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } hover:bg-primary-50 transition-colors`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-gray-700 font-medium flex items-center">
                {item.feature}
              </div>
              <div className="text-center">
                <span className="inline-flex items-center justify-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                  {item.us.includes('✓') ? (
                    <><Check size={18} className="mr-1" /> {item.us.replace('✓ ', '')}</>
                  ) : (
                    item.us
                  )}
                </span>
              </div>
              <div className="text-center">
                <span className="inline-flex items-center justify-center bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
                  {item.them.includes('部分') || item.them.includes('额外') ? (
                    <><X size={18} className="mr-1" /> {item.them}</>
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
          <div className="inline-block bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-6">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              平均为客户节省 <span className="text-green-600">40%+</span> 开发成本
            </p>
            <p className="text-gray-600">同样的质量，更优的价格，更好的服务</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

