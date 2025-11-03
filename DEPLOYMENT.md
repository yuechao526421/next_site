# 部署指南

本文档介绍如何将 RT团队官网部署到生产环境。

## 部署到 Vercel（推荐）

Vercel 是 Next.js 的官方部署平台，提供最佳的性能和开发体验。

### 步骤 1: 准备代码

1. 确保代码已推送到 GitHub、GitLab 或 Bitbucket
2. 确保项目可以本地正常构建：

```bash
npm run build
```

### 步骤 2: 导入到 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 选择你的 Git 仓库
4. Vercel 会自动检测 Next.js 项目配置

### 步骤 3: 配置环境变量（可选）

在 Vercel 项目设置中添加环境变量：

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_EMAIL=your-email@domain.com
NEXT_PUBLIC_PHONE=400-xxx-xxxx
```

### 步骤 4: 部署

点击 "Deploy" 按钮，Vercel 会自动构建和部署你的网站。

### 步骤 5: 配置自定义域名

1. 在 Vercel 项目设置中，找到 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录
4. HTTPS 证书会自动配置

## 部署到其他平台

### Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 导入你的 Git 仓库
3. 构建命令：`npm run build`
4. 发布目录：`.next`

### 自托管（VPS/云服务器）

#### 使用 PM2

1. 构建项目：

```bash
npm run build
```

2. 安装 PM2：

```bash
npm install -g pm2
```

3. 启动应用：

```bash
pm2 start npm --name "tech-team" -- start
```

4. 设置开机自启：

```bash
pm2 startup
pm2 save
```

#### 使用 Docker

1. 创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

2. 构建镜像：

```bash
docker build -t tech-team-website .
```

3. 运行容器：

```bash
docker run -p 3000:3000 tech-team-website
```

### Nginx 反向代理配置

如果使用 Nginx 作为反向代理：

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 性能优化

### 1. 图片优化

使用 Next.js Image 组件自动优化图片：

```tsx
import Image from 'next/image';

<Image 
  src="/path/to/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority // 首屏图片使用
/>
```

### 2. 字体优化

在 `app/layout.tsx` 中已使用 Next.js 字体优化。

### 3. 缓存配置

在 `next.config.js` 中配置缓存：

```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## 监控和分析

### Google Analytics

1. 获取 GA 跟踪 ID
2. 添加到环境变量
3. 在 `app/layout.tsx` 中添加跟踪代码

### Vercel Analytics

在 Vercel 项目设置中启用 Analytics，自动追踪性能指标。

## 故障排查

### 构建失败

1. 检查 TypeScript 错误：`npm run build`
2. 检查 ESLint 错误：`npm run lint`
3. 清除缓存：`rm -rf .next && npm run build`

### 运行时错误

1. 检查浏览器控制台
2. 检查服务器日志
3. 确保所有环境变量已配置

## 备份策略

1. 定期备份案例数据：`data/cases.ts`
2. 备份环境变量配置
3. 使用 Git 进行版本控制

## 更新部署

### Vercel

推送代码到主分支，Vercel 会自动重新部署。

### 手动部署

```bash
git pull
npm install
npm run build
pm2 restart tech-team
```

## 安全建议

1. 使用 HTTPS（Vercel 自动配置）
2. 设置 CSP（内容安全策略）
3. 定期更新依赖：`npm audit fix`
4. 保护敏感环境变量
5. 启用 CORS 保护

## 支持

如有部署问题，请联系：
- 邮箱: contact@techteam.com
- 电话: 400-888-8888

