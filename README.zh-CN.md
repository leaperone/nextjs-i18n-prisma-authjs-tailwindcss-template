# Next.js 15 全栈模板

一个全面的、生产就绪的 Next.js 模板，包含国际化、身份验证、数据库集成和现代 UI 组件。

[English Documentation](./README.md)

## ✨ 特色功能

- **🚀 Next.js 15** - 最新的 React 框架，支持 App Router
- **🌍 国际化** - 多语言支持（英文、中文、日文）
- **🔐 身份验证** - 使用 NextAuth.js v5 和 GitHub OAuth 的安全认证
- **🗄️ 数据库** - PostgreSQL 配合 Prisma ORM
- **🎨 现代 UI** - 精美组件，包含 Tailwind CSS、shadcn/ui 和 HeroUI
- **🌙 深色模式** - 内置主题切换
- **📱 响应式设计** - 移动端优先的设计
- **🎬 动画效果** - 使用 Framer Motion 的流畅动画
- **🔧 开发体验** - TypeScript、ESLint、Prettier、Husky
- **🐳 Docker 支持** - 开发和生产环境容器
- **📊 状态管理** - 使用 Zustand 管理客户端状态
- **🎯 表单处理** - React Hook Form 配合 Zod 验证

## 🛠️ 技术栈

### 核心技术
- **[Next.js 15](https://nextjs.org/)** - 支持 App Router 的 React 框架
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的 JavaScript
- **[React 19](https://react.dev/)** - 最新的 React 并发特性

### 样式和 UI
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用工具优先的 CSS 框架
- **[shadcn/ui](https://ui.shadcn.com/)** - 高质量的 React 组件
- **[HeroUI](https://heroui.net/)** - 现代 UI 组件库
- **[Framer Motion](https://www.framer.com/motion/)** - 生产就绪的动画库
- **[Lucide React](https://lucide.dev/)** - 美观一致的图标

### 身份验证和数据库
- **[NextAuth.js v5](https://authjs.dev/)** - 完整的身份验证解决方案
- **[Prisma](https://www.prisma.io/)** - 下一代 ORM
- **[PostgreSQL](https://www.postgresql.org/)** - 高级开源数据库

### 国际化
- **[i18next](https://www.i18next.com/)** - 国际化框架
- **[react-i18next](https://react.i18next.com/)** - i18next 的 React 集成

### 开发工具
- **[ESLint](https://eslint.org/)** - 代码检查
- **[Prettier](https://prettier.io/)** - 代码格式化
- **[Husky](https://typicode.github.io/husky/)** - Git 钩子
- **[Commitlint](https://commitlint.js.org/)** - 规范化提交

## 🚀 快速开始

### 前置要求

- **Node.js 18+** - [下载](https://nodejs.org/)
- **pnpm** - `npm install -g pnpm`
- **PostgreSQL** - 数据库（或使用 Docker）

### 1. 克隆和安装

```bash
git clone <your-repo-url>
cd nextjs-i18n-prisma-authjs-tailwindcss-template
pnpm install
```

### 2. 环境配置

创建 `.env.local` 文件：

```env
# 数据库
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth（身份验证必需）
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"
```

### 3. 数据库配置

#### 选项 A：使用 Docker（推荐）
```bash
docker compose -f docker/docker-compose.yml up -d
```

#### 选项 B：本地 PostgreSQL
确保 PostgreSQL 正在运行并创建数据库，然后更新 `DATABASE_URL`。

### 4. 初始化数据库

```bash
# 生成 Prisma 客户端
sh prisma/generate.sh

# 运行迁移（创建表）
sh prisma/migrate.sh
```

### 5. 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看您的应用！

## 📁 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── (default)/         # 默认布局组
│   ├── dashboard/         # 受保护的仪表板页面
│   ├── api/              # API 路由
│   └── signin/           # 身份验证页面
├── components/           # 可重用 UI 组件
│   ├── ui/              # shadcn/ui 组件
│   └── ...              # 自定义组件
├── i18n/                # 国际化
│   ├── locales/         # 翻译文件
│   └── settings.ts      # i18n 配置
├── lib/                 # 实用工具库
├── prisma/              # 数据库架构和迁移
├── actions/             # 服务器操作
├── hooks/               # 自定义 React 钩子
├── store/               # Zustand 状态管理
└── types/               # TypeScript 类型定义
```

## 🔧 配置

### 身份验证设置

1. **GitHub OAuth 设置：**
   - 转到 GitHub 设置 > 开发者设置 > OAuth Apps
   - 创建新的 OAuth 应用
   - 设置授权回调 URL：`http://localhost:3000/api/auth/callback/github`
   - 复制客户端 ID 和客户端密钥到 `.env.local`

2. **NextAuth.js 配置：**
   - 查看 `auth.ts` 了解身份验证设置
   - 根据需要添加其他提供商

### 数据库配置

1. **架构自定义：**
   - 修改 `prisma/schema_template.prisma`
   - 运行 `sh prisma/generate.sh` 重新生成客户端

2. **迁移：**
   - 开发环境：`sh prisma/migrate.sh`
   - 生产环境：`sh prisma/migrate_deploy.sh`

### 国际化

- **支持的语言：** 英文、中文（简体）、日文
- **添加新语言：**
  1. 在 `i18n/settings.ts` 中添加语言区域
  2. 在 `i18n/locales/[locale]/` 中创建翻译文件
  3. 更新语言切换器组件

## 📦 可用脚本

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器
pnpm lint         # 运行 ESLint
pnpm lint:fix     # 修复 ESLint 问题
pnpm type-check   # 运行 TypeScript 检查
```

## 🐳 Docker 支持

### 开发容器（推荐）

1. 安装 Docker 和带有 Remote-Containers 扩展的 VS Code
2. 在 VS Code 中打开项目
3. 按 `Ctrl+Shift+P` → "在容器中重新打开"
4. 等待容器设置完成

### 生产环境 Docker

```bash
docker build -f docker/Dockerfile -t my-app .
docker run -p 3000:3000 my-app
```

## 🚢 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 将仓库连接到 Vercel
3. 在 Vercel 仪表板中添加环境变量
4. 推送时自动部署

### 手动部署

```bash
pnpm build
pnpm start
```

## 🤝 贡献

1. Fork 该仓库
2. 创建您的功能分支：`git checkout -b feature/amazing-feature`
3. 提交您的更改：`git commit -m 'feat: 添加惊人功能'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 打开 Pull Request

### 提交规范

该项目使用 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` - 新功能
- `fix:` - 错误修复
- `docs:` - 文档更改
- `style:` - 代码样式更改
- `refactor:` - 代码重构
- `test:` - 测试添加/更改
- `chore:` - 构建过程或辅助工具更改

## 📚 了解更多

- **[Next.js 文档](https://nextjs.org/docs)** - 了解 Next.js 功能和 API
- **[NextAuth.js 指南](https://authjs.dev/)** - 完整的身份验证文档
- **[Prisma 文档](https://www.prisma.io/docs)** - 数据库和 ORM 文档
- **[Tailwind CSS](https://tailwindcss.com/docs)** - 实用工具优先的 CSS 框架
- **[shadcn/ui](https://ui.shadcn.com/)** - 使用 Radix UI 构建的可重用组件
- **[i18next](https://www.i18next.com/)** - 国际化框架

## 🆘 故障排除

### 常见问题

**数据库连接错误：**
```bash
# 检查 PostgreSQL 是否运行
docker compose -f docker/docker-compose.yml ps

# 重启容器
docker compose -f docker/docker-compose.yml restart
```

**Prisma 客户端问题：**
```bash
# 重新生成 Prisma 客户端
sh prisma/generate.sh

# 重置数据库（⚠️ 这将删除所有数据）
npx prisma db push --force-reset
```

**身份验证不工作：**
- 验证 `.env.local` 中的 GitHub OAuth 凭据
- 检查回调 URL 是否与您的 GitHub OAuth 应用设置匹配
- 确保设置了 `NEXTAUTH_SECRET`

## 📄 许可证

基于 [MIT 许可证](https://github.com/nextui-org/next-app-template/blob/main/LICENSE)。

---

**⭐ 如果这个仓库对您有帮助，请给它一个星标！**

使用 Next.js 15、TypeScript 和现代 Web 技术 ❤️ 构建。