'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '需求沟通',
    description: '详细了解您的需求，提供专业建议',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lightbulb,
    title: '方案设计',
    description: '制定最优技术方案，明确报价',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Code,
    title: '开发实施',
    description: '敏捷开发，每周同步进度',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Rocket,
    title: '测试上线',
    description: '严格测试，协助部署上线',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: HeadphonesIcon,
    title: '售后维护',
    description: '30天免费维护，终身技术支持',
    color: 'from-red-500 to-red-600'
  }
];

export default function ServiceFlow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">服务流程</h2>
          <p className="text-xl text-gray-600">5步走，让项目开发更透明</p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-red-200 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-2">步骤 {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

