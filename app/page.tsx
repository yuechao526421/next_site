import HeroSection from '@/components/HeroSection';
import ServiceFlow from '@/components/ServiceFlow';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PriceComparison from '@/components/PriceComparison';
import PriceCalculator from '@/components/PriceCalculator';
import Link from 'next/link';
import { Code, Smartphone, AppWindow } from 'lucide-react';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Quick Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心服务</h2>
            <p className="text-xl text-gray-600">专业、高效、透明的软件开发服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Web 开发',
                description: '企业官网、电商平台、管理系统',
                price: '¥8,888 起',
                features: ['响应式设计', 'SEO优化', '后台管理'],
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Smartphone,
                title: 'App 开发',
                description: 'iOS / Android 原生或跨平台应用',
                price: '¥28,888 起',
                features: ['原生体验', '跨平台', '推送通知'],
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: AppWindow,
                title: '小程序开发',
                description: '微信小程序、支付宝小程序',
                price: '¥15,888 起',
                features: ['快速开发', '易推广', '低成本'],
                gradient: 'from-green-500 to-green-600'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-4">
                      {service.price}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      className="block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      了解详情
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceFlow />
      <PriceComparison />
      <PriceCalculator />
      <TestimonialCarousel />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">准备开始您的项目了吗？</h2>
          <p className="text-xl mb-8 opacity-90">
            立即联系我们，获取专业的技术咨询和精准的项目报价
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105"
            >
              免费咨询
            </Link>
            <Link
              href="/cases"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all"
            >
              查看案例
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

