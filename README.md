# 2SOMEone-web

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

### 配置

必读[配置教程](https://juejin.cn/post/7359203560166768650)

- 如何使用 czg 生成标准的 git commit message
- 如何使用 standard-version [生成 changelog 和 tag](https://juejin.cn/post/7359203560166768650#heading-40)

### Install dependencies

```bash
pnpm i
```

### Run the development server

```bash
pnpm dev

or

NODE_ENV=development pnpm dev 
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## 项目结构

```bash
src/
├── app/ # 页面和路由，API Route
├── components/ # 组件
├── actions/ # 服务端 actions
├── prisma/ # prisma 配置, prisma 起初始化脚本
├── db/ # 数据库方法
├── types/ # 类型定义
├── hooks/ # 自定义 hooks
├── stores/ # 全局状态管理
├── lib/ # 库, 自定义函数
├── utils/ # 工具函数
├── scripts/ # 脚本
├── public/ # 静态资源

```

## Dev Database

```bash
docker compose -f docker/docker-compose.yml down --volume
docker compose -f docker/docker-compose.yml up -d 2someone-db

# 初始化数据库
make dev
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
# nextjs-i18n-prisma-authjs-tailwindcss-template
