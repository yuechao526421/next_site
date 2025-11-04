# 快速启动指南 🚀

## 5分钟快速上手

### 1. 安装依赖

```bash
cd /Users/yuechao/Downloads/front/test/next/next-software
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

浏览器访问: [http://localhost:3000](http://localhost:3000)

就这么简单！网站已经运行起来了。

## 常见任务

### 📝 修改案例数据

**方式一：使用管理后台（推荐）**

1. 访问 [http://localhost:3000/admin/cases](http://localhost:3000/admin/cases)
2. 点击"添加案例"或"编辑"按钮
3. 填写表单
4. 点击"导出数据"下载 `cases.ts`
5. 替换 `data/cases.ts` 文件

**方式二：直接编辑文件**

编辑 `data/cases.ts`，按照现有格式添加或修改案例。

### 🎨 修改网站颜色

编辑 `tailwind.config.ts`：

```typescript
colors: {
  primary: {
    500: '#3b82f6',  // 改为你的品牌色
    600: '#2563eb',
    // ...
  }
}
```

### 📞 修改联系方式

编辑以下文件中的联系信息：

- `components/Footer.tsx` - 页脚联系方式
- `app/contact/page.tsx` - 联系页面

搜索并替换：
- `852631621@qq.com` → 你的邮箱
- `IslandUstinian-` → 你的电话
- `RT团队` → 你的团队名称

### 🖼️ 修改 Logo

1. 编辑 `components/Navbar.tsx`
2. 找到 Logo 部分
3. 替换为你的 Logo 图片或修改文字

### 📊 修改服务价格

编辑 `app/services/page.tsx` 中的 `services` 数组：

```typescript
const services = [
  {
    title: 'Web 开发',
    price: '¥6,666',  // 修改价格
    // ...
  }
];
```

### 👥 修改团队成员

编辑 `app/about/page.tsx` 中的 `teamMembers` 数组。

## 项目结构速览

```
├── app/
│   ├── page.tsx              # 🏠 首页
│   ├── services/page.tsx     # 💼 服务页
│   ├── cases/page.tsx        # 📱 案例页
│   ├── about/page.tsx        # 👥 关于页
│   ├── contact/page.tsx      # 📧 联系页
│   └── admin/cases/page.tsx  # ⚙️ 案例管理
├── components/               # 🧩 可复用组件
├── data/cases.ts            # 📊 案例数据
└── tailwind.config.ts       # 🎨 样式配置
```

## 核心功能一览

✅ 响应式设计 - 完美适配移动端  
✅ 流畅动画 - Framer Motion  
✅ 价格对比 - 突出性价比  
✅ 实时计价器 - 智能报价  
✅ 案例展示 - 动态路由  
✅ 联系表单 - API处理  
✅ 案例管理 - 后台系统  
✅ SEO优化 - Next.js内置  

## 立即部署

### Vercel (1分钟部署)

1. 推送代码到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入项目，点击部署
4. 完成！🎉

详见 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 需要帮助？

- 📖 查看完整文档: [README.md](./README.md)
- 🚀 部署指南: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 📝 查看案例数据格式: `data/cases.ts`

## 下一步

1. ✏️ 修改团队信息和联系方式
2. 📸 替换案例图片和数据
3. 🎨 调整品牌颜色
4. 🚀 部署到 Vercel
5. 🌐 绑定自定义域名

开始打造您的专业团队官网吧！💪

