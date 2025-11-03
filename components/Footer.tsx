import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-300 border-t border-purple-500/20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
                   style={{ boxShadow: '0 0 20px rgba(168,85,247,0.5)' }}>
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tech团队
              </span>
            </div>
            <p className="text-sm text-gray-400">
              专注于为中小企业提供高性价比的软件开发服务。用技术为您省钱，用专业让您放心。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary-400 transition-colors">
                  服务项目
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-primary-400 transition-colors">
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">服务内容</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">网站开发</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">App开发</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">小程序开发</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">系统定制</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary-400" />
                <span className="text-sm">contact@techteam.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary-400" />
                <span className="text-sm">400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-sm">中国·北京</span>
              </li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tech团队. 保留所有权利.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              隐私政策
            </Link>
            {' · '}
            <Link href="#" className="hover:text-purple-400 transition-colors">
              服务条款
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

