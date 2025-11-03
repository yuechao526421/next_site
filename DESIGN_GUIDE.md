# 设计规范指南

## 🎨 整体风格 - 极简黑白灰

参考 react

bits.dev 的设计理念，所有页面采用统一的极简风格。

### 配色方案

#### 主色调
- **黑色** `#000000` - 标题、重要文字
- **白色** `#FFFFFF` - 背景、卡片
- **灰色系** - 辅助文字、边框
  - `gray-50` - 浅背景
  - `gray-100` - 卡片背景
  - `gray-600` - 普通文字
  - `gray-700` - 次要标题

#### 彩色点缀（仅用于图标和强调）
- **蓝色** `bg-blue-500` - Web开发、主按钮
- **紫色** `bg-purple-500` - App开发
- **绿色** `bg-green-500` - 小程序开发
- **橙色** `bg-orange-500` - 运营服务
- **红色** `bg-red-500` - 售后服务

#### 金色渐变（数字/价格专用）
```css
bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600
```

---

## 📦 组件规范

### 1. 卡片设计
```tsx
<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
  {/* 顶部彩色条 */}
  <div className="h-1 bg-blue-500" />
  
  {/* 内容区 */}
  <div className="p-8">
    {/* 图标 */}
    <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center">
      <Icon className="text-white" size={36} />
    </div>
    
    {/* 标题 - 黑色粗体 */}
    <h3 className="text-2xl font-black text-black">标题</h3>
    
    {/* 描述 - 灰色 */}
    <p className="text-gray-600">描述文字</p>
    
    {/* 价格 - 金色渐变 */}
    <div className="text-4xl font-black bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
      ¥8,888 <span className="text-2xl">起</span>
    </div>
    
    {/* 列表 - 蓝色小圆点 */}
    <ul>
      <li className="flex items-center">
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
        <span className="text-gray-700">列表项</span>
      </li>
    </ul>
    
    {/* 按钮 - 蓝色圆角 */}
    <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600">
      了解详情
    </button>
  </div>
</div>
```

### 2. 图标容器
- **尺寸**: `w-20 h-20`
- **圆角**: `rounded-2xl`
- **颜色**: 彩色背景（blue/purple/green等）
- **图标**: 白色，`size={36}`，`strokeWidth={2}`

### 3. 标题层级
- **H1 超大标题**: `text-7xl md:text-9xl font-black text-black`
- **H2 大标题**: `text-5xl font-black text-black`
- **H3 卡片标题**: `text-2xl font-black text-black`
- **H4 小标题**: `text-xl font-bold text-black`

### 4. 文字颜色
- **重要文字**: `text-black font-bold`
- **普通文字**: `text-gray-700`
- **辅助文字**: `text-gray-600`
- **说明文字**: `text-gray-500 text-sm`

### 5. 按钮样式
```tsx
{/* 主按钮 - 蓝色 */}
<button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all">
  立即咨询
</button>

{/* 次按钮 - 黑色 */}
<button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all">
  查看详情
</button>

{/* 边框按钮 */}
<button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all">
  了解更多
</button>
```

### 6. 数字展示（价格/统计）
```tsx
{/* 金色渐变价格 */}
<div className="text-4xl font-black bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
  ¥28,888 <span className="text-2xl">起</span>
</div>

{/* 黑色统计数字 */}
<div className="text-6xl font-black text-black">
  50+
</div>
<div className="text-gray-600 font-medium">成功案例</div>
```

---

## 🎯 页面布局规范

### 背景配色
- **白色背景**: 主要内容区
- **浅灰背景**: `bg-gray-50` - 区块分隔

### 间距
- **Section 间距**: `py-20`
- **标题底部间距**: `mb-16`
- **卡片间距**: `gap-8`
- **内容间距**: `space-y-6`

### 圆角
- **卡片**: `rounded-2xl`
- **图标容器**: `rounded-2xl`
- **按钮**: `rounded-full`

### 阴影
- **默认**: `shadow-md`
- **Hover**: `shadow-xl`
- **表格/大卡片**: `shadow-lg`

---

## ✨ 动画效果

### Framer Motion 进场动画
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  内容
</motion.div>
```

### Hover 效果
- **卡片**: `hover:shadow-xl transition-all`
- **按钮**: `hover:bg-blue-600 transition-all`
- **图标**: `group-hover:scale-110 transition-transform`

---

## 📋 列表样式

### 带小圆点的列表
```tsx
<ul className="space-y-3">
  <li className="flex items-center text-gray-700">
    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" />
    列表项内容
  </li>
</ul>
```

### 带图标的列表
```tsx
<li className="flex items-center">
  <CheckCircle className="text-white" size={16} strokeWidth={3} />
  <span className="ml-2">列表项</span>
</li>
```

---

## 🎨 特殊效果

### 顶部彩色条
```tsx
<div className="h-1 bg-blue-500" />
```

### 渐变数字
```tsx
<span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
  40%+
</span>
```

### 标签/徽章
```tsx
<div className="inline-block px-6 py-2 bg-black text-white text-sm font-medium rounded-full">
  专业·高效·性价比
</div>
```

---

## 🚀 使用示例

查看以下文件获取完整实现：
- `components/HeroSection.tsx` - 首页Hero区
- `app/page.tsx` - 服务卡片
- `components/ServiceFlow.tsx` - 流程步骤
- `components/PriceComparison.tsx` - 对比表格
- `components/Navbar.tsx` - 导航栏
- `components/Footer.tsx` - 页脚

---

## 📝 注意事项

1. **保持一致性** - 所有页面使用相同的风格
2. **明暗对比** - 用黑白灰营造层次感
3. **彩色点缀** - 仅用于图标和强调元素
4. **金色价格** - 重要数字使用金色渐变
5. **圆角统一** - 卡片2xl，按钮full
6. **字体粗细** - 标题用black，正文用medium/normal
7. **微妙动画** - 过渡自然，不夸张

---

**设计原则**: Less is More - 极简、优雅、专业

