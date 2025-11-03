'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, Code, Zap, Heart, TrendingUp } from 'lucide-react';

const teamMembers = [
  {
    name: '张伟',
    role: '全栈工程师 / 团队负责人',
    avatar: '👨‍💻',
    background: '前阿里巴巴高级开发工程师，8年全栈开发经验',
    skills: ['React', 'Node.js', 'System Architecture'],
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: '李明',
    role: '前端工程师',
    avatar: '👨‍🎨',
    background: '前腾讯前端开发，精通现代前端技术栈',
    skills: ['React', 'Vue', 'UI/UX Design'],
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    name: '王芳',
    role: '后端工程师',
    avatar: '👩‍💻',
    background: '前字节跳动后端开发，擅长高并发系统',
    skills: ['Node.js', 'Python', 'Database'],
    gradient: 'from-green-500 to-green-600'
  },
  {
    name: '刘洋',
    role: '移动端工程师',
    avatar: '📱',
    background: '前美团移动端开发，iOS/Android双端经验',
    skills: ['React Native', 'iOS', 'Android'],
    gradient: 'from-orange-500 to-orange-600'
  }
];

const values = [
  {
    icon: Shield,
    title: '质量保证',
    description: '严格的代码审查和测试流程，确保交付高质量产品',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: '按时交付',
    description: '合理的项目规划，从不延期，准时完成每个里程碑',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Award,
    title: '专业技术',
    description: '团队成员均来自一线互联网公司，技术过硬',
    gradient: 'from-green-500 to-green-600'
  },
  {
    icon: Users,
    title: '用户至上',
    description: '以用户体验为中心，打造真正好用的产品',
    gradient: 'from-orange-500 to-orange-600'
  }
];

const guarantees = [
  {
    icon: Code,
    title: '源码交付',
    description: '项目完成后完整交付源码，您拥有100%所有权',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: Shield,
    title: '30天免费维护',
    description: '交付后30天内免费修复bug和小调整，让您无后顾之忧',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    icon: Zap,
    title: '24小时响应',
    description: '任何问题24小时内响应，紧急问题2小时内处理',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    icon: TrendingUp,
    title: '终身技术支持',
    description: '即使免费维护期结束，仍提供终身技术咨询支持',
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  {
    icon: Heart,
    title: '免费培训',
    description: '提供系统使用培训，确保您的团队能熟练操作',
    color: 'text-pink-600',
    bg: 'bg-pink-50'
  },
  {
    icon: Award,
    title: '质量保证',
    description: '如有重大质量问题，承诺免费返工直到满意',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  }
];

const stats = [
  { number: '50+', label: '成功项目' },
  { number: '40+', label: '满意客户' },
  { number: '8年', label: '行业经验' },
  { number: '98%', label: '客户满意度' }
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">关于我们</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              一支来自一线互联网公司的精英团队
              <br />
              用技术和热情为您打造卓越产品
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">我们的故事</h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tech团队成立于2020年，由几位来自阿里、腾讯、字节等一线互联网公司的工程师共同创立。
                我们看到许多中小企业和创业者需要优质的软件开发服务，但传统外包公司价格昂贵、响应缓慢、质量参差不齐。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                于是我们决定做些改变。作为个人开发团队，我们没有高昂的运营成本，可以将节省下来的费用让利给客户。
                同时，我们都是实战经验丰富的技术专家，能够保证项目质量。
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                至今，我们已经成功交付了50+个项目，涵盖电商、教育、医疗、金融等多个行业。
                我们的客户满意度高达98%，许多客户成为了我们的长期合作伙伴。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-xl text-gray-600">
              一群热爱技术、追求卓越的工程师
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-5xl`}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-center mb-4 font-semibold">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {member.background}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">我们的价值观</h2>
            <p className="text-xl text-gray-600">
              这些原则指导着我们的每一个决策
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">售后保障</h2>
            <p className="text-xl text-gray-600">
              让您的每一笔投资都放心无忧
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              const Icon = guarantee.icon;
              return (
                <motion.div
                  key={index}
                  className={`${guarantee.bg} rounded-2xl p-6 hover:shadow-lg transition-all`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon className={`${guarantee.color} mb-3`} size={40} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-600">
                    {guarantee.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">我们的承诺</h3>
            <p className="text-lg opacity-90">
              如果您对我们的服务不满意，我们承诺全额退款。
              您的满意是我们最大的追求！
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

