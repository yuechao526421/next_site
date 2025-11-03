'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Smartphone, AppWindow, Database, Cloud, Shield, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Web 开发',
    price: '¥6,666',
    description: '企业官网、电商平台、管理系统',
    features: [
      '响应式设计，完美适配各种设备',
      'SEO 优化，提升搜索排名',
      '现代化 UI/UX 设计',
      '后台管理系统',
      '数据统计分析',
      '源码完整交付',
      '30天免费维护'
    ],
    icon: Code
  },
  {
    title: '小程序开发',
    price: '¥15,888',
    description: '微信 / 支付宝 / 抖音小程序',
    features: [
      '多端小程序开发',
      '用户授权登录',
      '支付功能集成',
      '消息推送',
      '数据统计',
      '后台管理系统',
      '快速审核上线',
      '30天免费维护'
    ],
    popular: true,
    icon: AppWindow
  },
  {
    title: 'App 开发',
    price: '¥28,888',
    description: 'iOS / Android 原生或跨平台应用',
    features: [
      'iOS + Android 双端开发',
      '原生性能体验',
      '推送通知',
      '地图定位',
      '第三方登录',
      '应用商店上架',
      '后台管理系统',
      '30天免费维护'
    ],
    icon: Smartphone
  },
  {
    title: 'SaaS 系统',
    price: '¥35,888',
    description: '企业级管理系统、协作平台',
    features: [
      '多租户架构',
      '权限管理系统',
      '数据可视化',
      '实时通信',
      '文件管理',
      '工作流引擎',
      'API 接口',
      '终身技术支持'
    ],
    icon: Database
  },
  {
    title: '电商平台',
    price: '¥42,888',
    description: 'B2C / B2B 电商解决方案',
    features: [
      '商品管理系统',
      '订单管理',
      '支付集成',
      '物流对接',
      '营销工具',
      '数据分析',
      '多端支持',
      '终身技术支持'
    ],
    icon: Cloud
  },
  {
    title: '定制开发',
    price: '联系报价',
    description: '根据您的需求量身定制',
    features: [
      '需求深度分析',
      '技术方案设计',
      '原型设计',
      '敏捷开发',
      '测试部署',
      '培训支持',
      '源码交付',
      '长期技术支持'
    ],
    icon: Shield
  }
];

const techStack = [
  { name: 'React / Next.js', icon: Code },
  { name: 'React Native', icon: Smartphone },
  { name: 'Node.js', icon: Database },
  { name: 'TypeScript', icon: Code },
  { name: 'TailwindCSS', icon: AppWindow },
  { name: 'PostgreSQL / MongoDB', icon: Database },
  { name: 'AWS / 阿里云', icon: Cloud },
  { name: 'Docker / K8s', icon: Shield }
];

export default function ServicesPage() {
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
            <h1 className="text-6xl md:text-7xl font-black text-black mb-6">服务项目</h1>
            <p className="text-xl text-gray-600">
              明码标价 · 透明开发 · 按时交付
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards - 黑白灰卡片 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-black mb-4">价格套餐</h2>
            <p className="text-xl text-gray-600">
              所有价格均为起步价，具体费用根据需求评估
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-black" size={36} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    {service.price === '联系报价' ? (
                      <div className="text-3xl font-black text-black mb-6">
                        联系报价
                      </div>
                    ) : (
                      <div className="text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                        {service.price} <span className="text-2xl">起</span>
                      </div>
                    )}
                    
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircle className="text-black mr-2 flex-shrink-0 mt-0.5" size={18} strokeWidth={3} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/contact"
                      className="block text-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all mt-auto"
                    >
                      立即咨询
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 text-center bg-gray-50 rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-black mb-6">特别优惠</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h4 className="font-bold text-black mb-1">快速启动</h4>
                <p className="text-gray-600 text-sm">7天内启动项目，额外优惠5%</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <h4 className="font-bold text-black mb-1">推荐有礼</h4>
                <p className="text-gray-600 text-sm">推荐新客户，双方各得10%优惠</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h4 className="font-bold text-black mb-1">长期合作</h4>
                <p className="text-gray-600 text-sm">签订年度维护，优惠20%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack - 黑白灰 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-black mb-4">技术栈</h2>
            <p className="text-xl text-gray-600">
              使用业界最前沿的技术，为您打造高性能应用
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center">
                    <Icon className="text-black" size={28} />
                  </div>
                  <div className="font-semibold text-black text-sm">{tech.name}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ - 黑白灰 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-black mb-4">常见问题</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: '项目开发周期是多久？',
                a: '根据项目复杂度，简单官网 7-20 天，复杂系统 30-90 天。我们会在需求评估后给出准确的时间表。'
              },
              {
                q: '如何保证项目质量？',
                a: '我们采用敏捷开发模式，每周同步进度，客户可随时查看。上线前经过严格测试，确保无重大 bug。'
              },
              {
                q: '售后服务如何？',
                a: '项目交付后提供 30 天免费维护，包括 bug 修复和小调整。此后可选择按需付费或签订年度维护合同。'
              },
              {
                q: '能否看到开发进度？',
                a: '当然！我们会为您汇报工作进度，您可以实时了解开发进度、任务完成情况，确保项目透明可控。'
              },
              {
                q: '源码会交付吗？',
                a: '是的，项目完成后会完整交付源码，您拥有完全的所有权和使用权。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-black mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

