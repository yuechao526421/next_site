'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CalculatorState {
  projectType: 'web' | 'app' | 'miniprogram' | 'saas' | 'ecommerce';
  pages: number;
  features: string[];
  design: 'basic' | 'standard' | 'premium';
  timeline: 'normal' | 'urgent';
}

const projectTypes = [
  { id: 'web', label: 'Web 网站', basePrice: 8888 },
  { id: 'app', label: 'App 应用', basePrice: 28888 },
  { id: 'miniprogram', label: '小程序', basePrice: 15888 },
  { id: 'saas', label: 'SaaS 系统', basePrice: 35888 },
  { id: 'ecommerce', label: '电商平台', basePrice: 42888 },
];

const featuresList = [
  { id: 'user-auth', label: '用户登录注册', price: 2000 },
  { id: 'payment', label: '支付功能', price: 3000 },
  { id: 'admin', label: '后台管理', price: 5000 },
  { id: 'search', label: '搜索功能', price: 2000 },
  { id: 'notification', label: '消息推送', price: 2500 },
  { id: 'map', label: '地图定位', price: 3000 },
  { id: 'social', label: '社交分享', price: 1500 },
  { id: 'analytics', label: '数据统计', price: 3000 },
  { id: 'api', label: 'API 接口', price: 4000 },
  { id: 'multilang', label: '多语言支持', price: 3500 },
];

const designLevels = [
  { id: 'basic', label: '基础设计', multiplier: 1 },
  { id: 'standard', label: '标准设计', multiplier: 1.2 },
  { id: 'premium', label: '高级定制', multiplier: 1.5 },
];

export default function PriceCalculator() {
  const [state, setState] = useState<CalculatorState>({
    projectType: 'web',
    pages: 5,
    features: [],
    design: 'standard',
    timeline: 'normal'
  });

  const calculatePrice = () => {
    const basePrice = projectTypes.find(t => t.id === state.projectType)?.basePrice || 0;
    const pagePrice = state.pages * 1000;
    const featuresPrice = state.features.reduce((sum, featureId) => {
      const feature = featuresList.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);
    
    const designMultiplier = designLevels.find(d => d.id === state.design)?.multiplier || 1;
    const urgentMultiplier = state.timeline === 'urgent' ? 1.3 : 1;

    const subtotal = (basePrice + pagePrice + featuresPrice) * designMultiplier;
    const total = Math.round(subtotal * urgentMultiplier);

    return {
      basePrice,
      pagePrice,
      featuresPrice,
      designMultiplier,
      urgentMultiplier,
      subtotal: Math.round(subtotal),
      total
    };
  };

  const price = calculatePrice();
  const estimatedDays = Math.ceil(15 + state.pages * 1.5 + state.features.length * 2);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Calculator size={20} />
            <span className="font-semibold">智能计价器</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">实时计算项目报价</h2>
          <p className="text-xl text-gray-600">
            选择您的项目需求，立即获取预估报价
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Type */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. 项目类型</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setState({ ...state, projectType: type.id as any })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      state.projectType === type.id
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{type.label}</div>
                    <div className="text-sm text-gray-500 mt-1">¥{type.basePrice.toLocaleString()}</div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Pages */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                2. 页面数量: {state.pages} 个
              </h3>
              <input
                type="range"
                min="1"
                max="30"
                value={state.pages}
                onChange={(e) => setState({ ...state, pages: parseInt(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>1 页</span>
                <span>30 页</span>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. 功能模块</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {featuresList.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => {
                      const newFeatures = state.features.includes(feature.id)
                        ? state.features.filter(f => f !== feature.id)
                        : [...state.features, feature.id];
                      setState({ ...state, features: newFeatures });
                    }}
                    className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                      state.features.includes(feature.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                        state.features.includes(feature.id)
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-gray-300'
                      }`}>
                        {state.features.includes(feature.id) && (
                          <CheckCircle className="text-white" size={16} />
                        )}
                      </div>
                      <span className="font-medium">{feature.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">+¥{feature.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Design Level */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. 设计等级</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {designLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setState({ ...state, design: level.id as any })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      state.design === level.id
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{level.label}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {level.multiplier === 1 ? '标准' : `× ${level.multiplier}`}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">5. 项目周期</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  onClick={() => setState({ ...state, timeline: 'normal' })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    state.timeline === 'normal'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">正常周期</div>
                  <div className="text-sm text-gray-500 mt-1">标准价格</div>
                </button>
                <button
                  onClick={() => setState({ ...state, timeline: 'urgent' })}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    state.timeline === 'urgent'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold">加急开发</div>
                  <div className="text-sm text-gray-500 mt-1">+30% 费用</div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-2xl sticky top-24"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">报价预估</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>基础费用</span>
                  <span>¥{price.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>页面费用</span>
                  <span>¥{price.pagePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>功能费用</span>
                  <span>¥{price.featuresPrice.toLocaleString()}</span>
                </div>
                {price.designMultiplier !== 1 && (
                  <div className="flex justify-between text-gray-600">
                    <span>设计增值</span>
                    <span>× {price.designMultiplier}</span>
                  </div>
                )}
                {price.urgentMultiplier !== 1 && (
                  <div className="flex justify-between text-gray-600">
                    <span>加急费用</span>
                    <span>× {price.urgentMultiplier}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">预估总价</span>
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                    ¥{price.total.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-500 text-right">
                  预计 {estimatedDays} 天完成
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  💡 以上为系统自动预估价格，实际报价需根据详细需求评估后确定，上下浮动不超过20%
                </p>
              </div>

              <Link
                href="/contact"
                className="block text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all group"
              >
                <span className="flex items-center justify-center">
                  获取精准报价
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>

              <p className="text-xs text-gray-500 text-center mt-4">
                联系我们获取详细方案和精准报价
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

