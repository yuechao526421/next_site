import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

// 抖音图标
const DouyinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

// 小红书图标
const XiaohongshuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.5 5h-3l-.102.007A.5.5 0 0 0 10.5 8h1v7.5l.007.102A.5.5 0 0 0 12.5 16l.102-.007A.5.5 0 0 0 13 15.5V8h1l.102-.007A.5.5 0 0 0 14 7zm-6 3h-1l-.102.007A.5.5 0 0 0 6.5 11h1v4.5l.007.102A.5.5 0 0 0 8.5 16l.102-.007A.5.5 0 0 0 9 15.5V11h1l.102-.007A.5.5 0 0 0 10 10zm11 0h-3l-.102.007A.5.5 0 0 0 14.5 11h1v4.5l.007.102a.5.5 0 0 0 .993-.102V11h1l.102-.007A.5.5 0 0 0 18 10z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-lg text-black">
                Tech团队
              </span>
            </div>
            <p className="text-sm text-gray-600">
              专注于为中小企业提供高性价比的软件开发服务。用技术为您省钱，用专业让您放心。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">快速链接</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                  服务项目
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-600 hover:text-black transition-colors">
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">服务内容</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-black transition-colors cursor-pointer">网站开发</li>
              <li className="text-gray-600 hover:text-black transition-colors cursor-pointer">App开发</li>
              <li className="text-gray-600 hover:text-black transition-colors cursor-pointer">小程序开发</li>
              <li className="text-gray-600 hover:text-black transition-colors cursor-pointer">系统定制</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">852631621@qq.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">IslandUstinian-</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">中国·北京</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors" title="抖音">
                <DouyinIcon />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors" title="小红书">
                <XiaohongshuIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Tech团队. 保留所有权利.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-black transition-colors">
              隐私政策
            </Link>
            {' · '}
            <Link href="#" className="hover:text-black transition-colors">
              服务条款
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

