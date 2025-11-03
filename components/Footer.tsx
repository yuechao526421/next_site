import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Twitter } from 'lucide-react';

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
                <span className="text-sm">contact@techteam.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} />
                <span className="text-sm">中国·北京</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter size={20} />
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

