import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cases, getCaseById } from '@/data/cases';
import { ArrowLeft, Calendar, DollarSign, CheckCircle, Star } from 'lucide-react';

export async function generateStaticParams() {
  return cases.map((c) => ({
    id: c.id,
  }));
}

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const caseItem = getCaseById(params.id);

  if (!caseItem) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={caseItem.image}
          alt={caseItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <Link
              href="/cases"
              className="inline-flex items-center text-white mb-6 hover:text-primary-300 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              返回案例列表
            </Link>
            
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {caseItem.category === 'web' && 'Web 开发'}
              {caseItem.category === 'app' && 'App 开发'}
              {caseItem.category === 'miniprogram' && '小程序'}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {caseItem.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {caseItem.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                <Calendar className="text-primary-600" size={28} />
              </div>
              <div>
                <div className="text-sm text-gray-500">项目周期</div>
                <div className="text-xl font-bold text-gray-900">{caseItem.duration}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="text-green-600" size={28} />
              </div>
              <div>
                <div className="text-sm text-gray-500">项目费用</div>
                <div className="text-xl font-bold text-gray-900">{caseItem.price}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Star className="text-yellow-600 fill-current" size={28} />
              </div>
              <div>
                <div className="text-sm text-gray-500">客户满意度</div>
                <div className="text-xl font-bold text-gray-900">5.0 / 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">项目亮点</h2>
                <ul className="space-y-4">
                  {caseItem.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Feedback */}
              <div className="bg-gray-50 rounded-2xl p-8 shadow-md border border-gray-200">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 fill-current" size={24} />
                  <Star className="text-yellow-400 fill-current" size={24} />
                  <Star className="text-yellow-400 fill-current" size={24} />
                  <Star className="text-yellow-400 fill-current" size={24} />
                  <Star className="text-yellow-400 fill-current" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">客户评价</h3>
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "{caseItem.clientFeedback}"
                </p>
              </div>

              {/* Project Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-black mb-6">项目详情</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="mb-4">
                    本项目采用现代化的技术栈和设计理念，为客户打造了一个高性能、易维护的应用程序。
                    从需求分析到最终交付，我们始终保持与客户的密切沟通，确保每个功能都符合预期。
                  </p>
                  <p className="mb-4">
                    在开发过程中，我们采用敏捷开发模式，每周向客户展示最新进展，及时调整方向。
                    这种透明的开发方式不仅让客户放心，也确保了项目能够按时保质完成。
                  </p>
                  <p>
                    项目上线后，我们提供了完善的培训和文档，并承诺 30 天免费维护期。
                    客户对最终成果非常满意，应用运行稳定，达到了预期的商业目标。
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold text-black mb-6">技术栈</h3>
                <div className="flex flex-wrap gap-2">
                  {caseItem.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-black mb-4">项目信息</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>分类：</span>
                      <span className="font-semibold text-black">
                        {caseItem.category === 'web' && 'Web 开发'}
                        {caseItem.category === 'app' && 'App 开发'}
                        {caseItem.category === 'miniprogram' && '小程序'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>周期：</span>
                      <span className="font-semibold text-black">{caseItem.duration}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>费用：</span>
                      <span className="font-semibold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">{caseItem.price}</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="block mt-8 text-center bg-black text-white px-6 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all"
                >
                  开发类似项目
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-black text-black mb-12 text-center">相关案例</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases
              .filter(c => c.id !== caseItem.id && c.category === caseItem.category)
              .slice(0, 3)
              .map((relatedCase) => (
                <Link
                  key={relatedCase.id}
                  href={`/cases/${relatedCase.id}`}
                  className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedCase.image}
                      alt={relatedCase.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {relatedCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedCase.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

