# nextjs-i18n-prisma-authjs-tailwindcss-template

[中文文档](./README.zh-CN.md)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Tailwind Variants](https://tailwind-variants.org) - Tailwind Component Variants
- [TypeScript](https://www.typescriptlang.org/) - JavaScript Superset
- [auth.js](https://authjs.dev/) - Authentication Solution
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme Switching
- [prisma](https://www.prisma.io/) - Database ORM
- [heroui](https://heroui.net/) - UI Components
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [lucide-react](https://lucide.dev/) - Icon Library

## Getting Started

### Configuration

Required reading: [Configuration Tutorial](https://juejin.cn/post/7359203560166768650)

- How to use czg to generate standardized git commit messages
- How to use standard-version to [generate changelog and tags](https://juejin.cn/post/7359203560166768650#heading-40)

### Development Environment Setup

#### Using Dev Container (Recommended)

1. Modify the template name in .devcontainer/devcontainer.json (including postCreateCommand), you can add custom VSCode extensions
2. If you modified workspaceFolder in .devcontainer/devcontainer.json, update the working directory in .devcontainer/Dockerfile accordingly
3. Commit and push these changes, then reopen in container using VSCode's Remote-Containers extension (@command:remote-containers.reopenInContainer)
4. Wait for the development container setup to complete
   * If your repository is private, activate git agent using `git add` before opening the dev container
5. Run `pnpm dev` to check if the website runs properly

#### Manual Setup

```bash
pnpm i
sh prisma/generate.sh
```

Run the development server:

```bash
pnpm dev

# Or specify environment
NODE_ENV=development pnpm dev
```

#### pnpm Configuration (Optional)

If using pnpm, add to .npmrc file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

Run `pnpm install` again after modification.

### Auth.js Setup

For beginners, please check https://authjs.dev/

1. Check the auth.ts file
2. Configure keys in .env.local following the [Github Provider Setup Guide](https://authjs.dev/getting-started/authentication/oauth?framework=next-js)

### Prisma Setup

For beginners, please check https://www.prisma.io/docs

1. All Prisma files are in the ./prisma directory
2. Rename prisma schema if needed (update lib/db.ts and action/* accordingly)
3. Set database connection in .env and .env.local

### Development Database

```bash
docker compose -f docker/docker-compose.yml down --volume
docker compose -f docker/docker-compose.yml up -d
```

### Vercel Deployment

1. Check .github/workflows/deploy.yml ([Reference](https://github.com/amondnet/vercel-action?tab=readme-ov-file#how-to-use))
2. Set necessary secrets in Github repository's Actions secrets

## Project Structure

```bash
src/
├── app/ # Pages and routes, API Routes
├── components/ # Components
├── actions/ # Server actions
├── prisma/ # Prisma config, initialization scripts
├── types/ # Type definitions
├── hooks/ # Custom hooks
├── stores/ # Global state management
├── lib/ # Libraries, custom functions
├── utils/ # Utility functions
├── scripts/ # Scripts
├── public/ # Static assets
```

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).
