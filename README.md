# RT团队官网

一个现代化、响应式的个人软件开发团队官网，使用 Next.js 14 + TypeScript + TailwindCSS 构建。

## ✨ 特性

- 🎨 **现代极简设计** - 参考 lyzeroone.com 风格，简约大气
- 📱 **完全响应式** - 完美适配各种设备
- ⚡ **高性能** - Next.js 14 App Router，优化的加载速度
- 🎭 **流畅动画** - Framer Motion 动画效果
- 💰 **实时计价器** - 智能计算项目报价
- 📊 **价格对比** - 与传统公司对比，突出性价比
- 📝 **案例管理** - 方便的案例添加和修改系统
- 🔒 **表单处理** - 内置联系表单和 API Routes

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
├── app/                    # Next.js 14 App Router
│   ├── page.tsx           # 首页
│   ├── services/          # 服务页
│   ├── cases/             # 案例页
│   ├── about/             # 关于页
│   ├── contact/           # 联系页
│   ├── admin/             # 案例管理后台
│   └── api/               # API Routes
├── components/            # React 组件
│   ├── Navbar.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   ├── HeroSection.tsx   # 英雄区
│   ├── ServiceFlow.tsx   # 服务流程
│   ├── TestimonialCarousel.tsx  # 客户评价
│   ├── PriceComparison.tsx      # 价格对比
│   ├── PriceCalculator.tsx      # 实时计价器
│   └── PricingCard.tsx          # 价格卡片
├── data/                  # 数据文件
│   └── cases.ts          # 案例数据
└── lib/                   # 工具函数
    └── utils.ts          # 通用工具

```

## 🎯 核心页面

### 首页 (/)
- 动态英雄区，展示团队口号
- 核心服务快速预览
- 服务流程图
- 价格对比模块
- 实时计价器
- 客户评价轮播

### 服务页 (/services)
- 6种服务类型展示
- 明码标价
- 技术栈展示
- 常见问题解答

### 案例页 (/cases)
- 案例网格布局
- 分类筛选
- 悬停效果
- 动态路由详情页

### 关于页 (/about)
- 团队故事
- 核心成员介绍
- 价值观展示
- 售后保障政策

### 联系页 (/contact)
- 联系方式展示
- 在线咨询表单
- API 表单处理
- 实时反馈

## 🛠️ 案例管理

访问 `/admin/cases` 进入案例管理后台：

1. **添加案例** - 点击"添加案例"按钮，填写表单
2. **编辑案例** - 点击案例卡片上的编辑图标
3. **删除案例** - 点击删除图标（需确认）
4. **导出数据** - 点击"导出数据"按钮，下载 `cases.ts` 文件
5. **更新数据** - 将导出的 `cases.ts` 文件替换到 `data/cases.ts`

### 案例数据格式

```typescript
{
  id: string;              // 案例ID
  title: string;           // 标题
  description: string;     // 简介
  category: 'web' | 'app' | 'miniprogram';  // 分类
  image: string;           // 图片URL
  technologies: string[];  // 技术栈
  clientFeedback: string;  // 客户评价
  features: string[];      // 项目亮点
  duration: string;        // 周期
  price: string;           // 费用
}
```

## 🎨 定制化

### 修改主色调

编辑 `tailwind.config.ts` 中的 `primary` 颜色：

```typescript
colors: {
  primary: {
    500: '#3b82f6',  // 修改为你的品牌色
    // ...
  }
}
```

### 修改团队信息

编辑各页面中的硬编码文本：
- 团队名称：搜索 "RT团队"
- 联系方式：`components/Footer.tsx` 和 `app/contact/page.tsx`
- 统计数据：各页面的 `stats` 数组

### 修改服务项目

编辑 `app/services/page.tsx` 中的 `services` 数组。

## 📦 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: TailwindCSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel (推荐)

## 🚀 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量（如需要）
4. 点击部署

Vercel 会自动检测 Next.js 项目并进行优化部署。

### 自定义域名

在 Vercel 项目设置中添加自定义域名，HTTPS 会自动配置。

## 📝 待办事项

- [ ] 添加博客功能
- [ ] 集成在线客服工具
- [ ] 添加多语言支持
- [ ] 添加后台数据库存储
- [ ] 添加邮件通知功能

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

- 邮箱: 852631621@qq.com
- 电话: IslandUstinian-
- 地址: 中国·北京

---

Made with ❤️ by RT团队

