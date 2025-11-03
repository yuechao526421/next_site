'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '需求沟通',
    description: '详细了解您的需求，提供专业建议'
  },
  {
    icon: Lightbulb,
    title: '方案设计',
    description: '制定最优技术方案，明确报价'
  },
  {
    icon: Code,
    title: '开发实施',
    description: '敏捷开发，每周同步进度'
  },
  {
    icon: Rocket,
    title: '测试上线',
    description: '严格测试，协助部署上线'
  },
  {
    icon: HeadphonesIcon,
    title: '售后维护',
    description: '30天免费维护，终身技术支持'
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
          <h2 className="text-5xl font-black text-black mb-4">服务流程</h2>
          <p className="text-xl text-gray-600">5步走，让项目开发更透明</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-black flex items-center justify-center">
                  <Icon className="text-white" size={36} strokeWidth={2} />
                </div>
                <div className="text-sm text-gray-500 mb-2">步骤 {index + 1}</div>
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

