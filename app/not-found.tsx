import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-purple-50 px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          页面未找到
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在或已被移除。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            <Home size={20} />
            <span>返回首页</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all"
          >
            <ArrowLeft size={20} />
            <span>返回上页</span>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Link
            href="/services"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <h3 className="font-bold text-gray-900 mb-2">查看服务</h3>
            <p className="text-gray-600 text-sm">了解我们的服务项目</p>
          </Link>
          
          <Link
            href="/cases"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <h3 className="font-bold text-gray-900 mb-2">成功案例</h3>
            <p className="text-gray-600 text-sm">查看我们的作品</p>
          </Link>
          
          <Link
            href="/contact"
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <h3 className="font-bold text-gray-900 mb-2">联系我们</h3>
            <p className="text-gray-600 text-sm">获取专业咨询</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

