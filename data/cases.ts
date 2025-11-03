export interface Case {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'app' | 'miniprogram';
  image: string;
  technologies: string[];
  clientFeedback: string;
  features: string[];
  duration: string;
  price: string;
}

export const cases: Case[] = [
  {
    id: '1',
    title: '智能电商平台',
    description: '为某品牌打造的全栈电商解决方案，包含用户端、商家端和管理后台',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    clientFeedback: '开发效率高，交付质量超出预期，售后响应及时。性价比非常高！',
    features: [
      '响应式设计，完美适配移动端',
      '智能推荐算法，提升转化率30%',
      '完整的订单管理系统',
      '实时数据分析看板',
      '支付宝、微信支付集成'
    ],
    duration: '45天',
    price: '¥28,888'
  },
  {
    id: '2',
    title: '企业官网重构',
    description: '为传统制造企业打造的现代化官网，提升品牌形象',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    clientFeedback: '设计简约大气，页面加载速度快，SEO优化做得很好。',
    features: [
      '现代极简设计风格',
      '多语言支持（中英文）',
      'SEO优化，搜索排名提升',
      '动画效果流畅自然',
      '后台内容管理系统'
    ],
    duration: '20天',
    price: '¥8,888'
  },
  {
    id: '3',
    title: '健身预约小程序',
    description: '连锁健身房的会员管理和课程预约小程序',
    category: 'miniprogram',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    technologies: ['微信小程序', 'Taro', 'Node.js', 'MongoDB'],
    clientFeedback: '功能完善，用户体验好，帮助我们提升了会员活跃度。',
    features: [
      '在线预约课程',
      '会员积分系统',
      '教练评价功能',
      '消息推送提醒',
      '数据统计分析'
    ],
    duration: '30天',
    price: '¥18,888'
  },
  {
    id: '4',
    title: 'SaaS管理系统',
    description: '面向中小企业的项目管理和协作工具',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'WebSocket'],
    clientFeedback: '系统稳定可靠，功能强大，团队协作效率提升显著。',
    features: [
      '项目任务管理',
      '实时协作功能',
      '文件共享与版本控制',
      '权限管理系统',
      '数据可视化报表'
    ],
    duration: '60天',
    price: '¥45,888'
  },
  {
    id: '5',
    title: '外卖配送 App',
    description: '本地餐饮配送平台，包含用户端和骑手端',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop',
    technologies: ['React Native', 'Node.js', 'MongoDB', '高德地图', 'WebSocket'],
    clientFeedback: '跨平台开发节省成本，地图导航精准，实时订单推送稳定。',
    features: [
      'iOS和Android双端支持',
      '实时位置追踪',
      '智能路线规划',
      '在线支付集成',
      '推送通知系统'
    ],
    duration: '55天',
    price: '¥38,888'
  },
  {
    id: '6',
    title: '在线教育平台',
    description: '视频课程学习平台，支持直播和录播',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'React', 'Node.js', 'MySQL', '阿里云视频'],
    clientFeedback: '视频播放流畅，学员管理方便，售后服务响应快。',
    features: [
      '视频点播和直播',
      '课程进度追踪',
      '在线考试系统',
      '学员互动社区',
      '证书自动生成'
    ],
    duration: '50天',
    price: '¥42,888'
  }
];

export function getCaseById(id: string): Case | undefined {
  return cases.find(c => c.id === id);
}

export function getCasesByCategory(category: Case['category']): Case[] {
  return cases.filter(c => c.category === category);
}

