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
      
      {/* Quick Services - 极简卡片风格 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-black mb-4">核心服务</h2>
            <p className="text-xl text-gray-600">专业、高效、透明的软件开发服务</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Web 开发',
                description: '企业官网、电商平台、管理系统',
                price: '¥6,666',
                features: ['响应式设计', 'SEO优化', '后台管理']
              },
              {
                icon: Smartphone,
                title: 'App 开发',
                description: 'iOS / Android 原生或跨平台应用',
                price: '¥28,888',
                features: ['原生体验', '跨平台', '推送通知']
              },
              {
                icon: AppWindow,
                title: '小程序开发',
                description: '微信小程序、支付宝小程序',
                price: '¥15,888',
                features: ['快速开发', '易推广', '低成本']
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="text-white" size={36} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black text-black mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="text-4xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
                      {service.price} <span className="text-2xl">起</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      className="block text-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all"
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

      {/* CTA Section - 黑白灰 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6">准备开始您的项目了吗？</h2>
          <p className="text-xl mb-8 text-gray-600">
            立即联系我们，获取专业的技术咨询和精准的项目报价
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all"
            >
              免费咨询
            </Link>
            <Link
              href="/cases"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all"
            >
              查看案例
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

