# nextjs-i18n-prisma-authjs-tailwindcss-template

## 使用的技术

- [Next.js 14](https://nextjs.org/docs/getting-started) - React 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Tailwind Variants](https://tailwind-variants.org) - Tailwind 组件变体管理
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [auth.js](https://authjs.dev/) - 认证解决方案
- [next-themes](https://github.com/pacocoursey/next-themes) - 主题切换
- [prisma](https://www.prisma.io/) - 数据库 ORM
- [heroui](https://heroui.net/) - UI 组件库
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [lucide-react](https://lucide.dev/) - 图标库

## 如何使用

### 配置

必读[配置教程](https://juejin.cn/post/7359203560166768650)

- 如何使用 czg 生成标准的 git commit message
- 如何使用 standard-version [生成 changelog 和 tag](https://juejin.cn/post/7359203560166768650#heading-40)

### 开发环境设置

#### 使用 Dev Container (推荐)

1. 修改 .devcontainer/devcontainer.json 中的模板名称(包括 postCreateCommand),可以添加自定义的 VSCode 扩展
2. 如果修改了 .devcontainer/devcontainer.json 中的 workspaceFolder,需要同步修改 .devcontainer/Dockerfile 中的工作目录
3. 提交并推送这些更改,然后使用 VSCode 的 Remote-Containers 扩展(@command:remote-containers.reopenInContainer)重新在容器中打开
4. 等待开发容器设置完成
   * 如果你的仓库是私有的,请在打开开发容器前使用 `git add` 激活 git agent
5. 使用 `pnpm dev` 检查网站是否正常运行

#### 手动设置

```bash
pnpm i
sh prisma/generate.sh
```

运行开发服务器:

```bash
pnpm dev

# 或者指定环境
NODE_ENV=development pnpm dev
```

#### pnpm 配置 (可选)

如果使用 pnpm,需要在 .npmrc 文件中添加:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

修改后重新运行 `pnpm install`。

### Auth.js 设置

如果你是初学者,请查看 https://authjs.dev/

1. 检查 auth.ts 文件
2. 按照 [Github Provider 设置指南](https://authjs.dev/getting-started/authentication/oauth?framework=next-js) 在 .env.local 中配置密钥

### Prisma 设置

如果你是初学者,请查看 https://www.prisma.io/docs

1. 所有 Prisma 文件都在 ./prisma 目录下
2. 如需要可以重命名 prisma schema (同时更新 lib/db.ts 和 action/*)
3. 在 .env 和 .env.local 中设置数据库连接

### 开发数据库

```bash
docker compose -f docker/docker-compose.yml down --volume
docker compose -f docker/docker-compose.yml up -d
```

### Vercel 部署

1. 检查 .github/workflows/deploy.yml ([参考文档](https://github.com/amondnet/vercel-action?tab=readme-ov-file#how-to-use))
2. 在 Github 仓库的 Actions secrets 中设置必要的密钥

## 项目结构

```bash
src/
├── app/ # 页面和路由，API Route
├── components/ # 组件
├── actions/ # 服务端 actions
├── prisma/ # prisma 配置, prisma 起初始化脚本
├── types/ # 类型定义
├── hooks/ # 自定义 hooks
├── stores/ # 全局状态管理
├── lib/ # 库, 自定义函数
├── utils/ # 工具函数
├── scripts/ # 脚本
├── public/ # 静态资源
```

## 许可证

基于 [MIT 许可证](https://github.com/nextui-org/next-app-template/blob/main/LICENSE)。 