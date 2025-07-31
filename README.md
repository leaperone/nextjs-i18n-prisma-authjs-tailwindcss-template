# Next.js 15 Full-Stack Template

A comprehensive, production-ready Next.js template with internationalization, authentication, database integration, and modern UI components.

[中文文档](./README.zh-CN.md)

## ✨ Features

- **🚀 Next.js 15** - Latest React framework with App Router
- **🌍 Internationalization** - Multi-language support (English, Chinese, Japanese)
- **🔐 Authentication** - Secure auth with NextAuth.js v5 and GitHub OAuth
- **🗄️ Database** - PostgreSQL with Prisma ORM
- **🎨 Modern UI** - Beautiful components with Tailwind CSS, shadcn/ui, and HeroUI
- **🌙 Dark Mode** - Built-in theme switching
- **📱 Responsive** - Mobile-first design
- **🎬 Animations** - Smooth animations with Framer Motion
- **🔧 Developer Experience** - TypeScript, ESLint, Prettier, Husky
- **🐳 Docker Support** - Development and production containers
- **📊 State Management** - Zustand for client state
- **🎯 Form Handling** - React Hook Form with Zod validation

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 19](https://react.dev/)** - Latest React with concurrent features

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality React components
- **[HeroUI](https://heroui.net/)** - Modern UI component library
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

### Authentication & Database
- **[NextAuth.js v5](https://authjs.dev/)** - Complete authentication solution
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open source database

### Internationalization
- **[i18next](https://www.i18next.com/)** - Internationalization framework
- **[react-i18next](https://react.i18next.com/)** - React integration for i18next

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[Commitlint](https://commitlint.js.org/)** - Conventional commits

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **pnpm** - `npm install -g pnpm`
- **PostgreSQL** - For database (or use Docker)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd nextjs-i18n-prisma-authjs-tailwindcss-template
pnpm install
```

### 2. Environment Setup

Create `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mydb"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth (required for auth)
AUTH_GITHUB_ID="your-github-client-id"
AUTH_GITHUB_SECRET="your-github-client-secret"
```

### 3. Database Setup

#### Option A: Using Docker (Recommended)
```bash
docker compose -f docker/docker-compose.yml up -d
```

#### Option B: Local PostgreSQL
Ensure PostgreSQL is running and create a database, then update `DATABASE_URL`.

### 4. Initialize Database

```bash
# Generate Prisma client
sh prisma/generate.sh

# Run migrations (creates tables)
sh prisma/migrate.sh
```

### 5. Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application!

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (default)/         # Default layout group
│   ├── dashboard/         # Protected dashboard pages
│   ├── api/              # API routes
│   └── signin/           # Authentication pages
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── ...              # Custom components
├── i18n/                # Internationalization
│   ├── locales/         # Translation files
│   └── settings.ts      # i18n configuration
├── lib/                 # Utility libraries
├── prisma/              # Database schema & migrations
├── actions/             # Server actions
├── hooks/               # Custom React hooks
├── store/               # Zustand state management
└── types/               # TypeScript type definitions
```

## 🔧 Configuration

### Authentication Setup

1. **GitHub OAuth Setup:**
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Create a new OAuth app
   - Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
   - Copy Client ID and Client Secret to `.env.local`

2. **NextAuth.js Configuration:**
   - Review `auth.ts` for authentication settings
   - Add additional providers as needed

### Database Configuration

1. **Schema Customization:**
   - Modify `prisma/schema_template.prisma`
   - Run `sh prisma/generate.sh` to regenerate client

2. **Migrations:**
   - Development: `sh prisma/migrate.sh`
   - Production: `sh prisma/migrate_deploy.sh`

### Internationalization

- **Supported Languages:** English, Chinese (Simplified), Japanese
- **Add New Language:**
  1. Add locale to `i18n/settings.ts`
  2. Create translation files in `i18n/locales/[locale]/`
  3. Update language switcher component

## 📦 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm type-check   # Run TypeScript check
```

## 🐳 Docker Support

### Development Container (Recommended)

1. Install Docker and VS Code with Remote-Containers extension
2. Open project in VS Code
3. Press `Ctrl+Shift+P` → "Reopen in Container"
4. Wait for container setup to complete

### Production Docker

```bash
docker build -f docker/Dockerfile -t my-app .
docker run -p 3000:3000 my-app
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Build process or auxiliary tool changes

## 📚 Learn More

- **[Next.js Documentation](https://nextjs.org/docs)** - Learn about Next.js features and API
- **[NextAuth.js Guide](https://authjs.dev/)** - Complete authentication documentation
- **[Prisma Docs](https://www.prisma.io/docs)** - Database and ORM documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[i18next](https://www.i18next.com/)** - Internationalization framework

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error:**
```bash
# Check if PostgreSQL is running
docker compose -f docker/docker-compose.yml ps

# Restart containers
docker compose -f docker/docker-compose.yml restart
```

**Prisma Client Issues:**
```bash
# Regenerate Prisma client
sh prisma/generate.sh

# Reset database (⚠️ This will delete all data)
npx prisma db push --force-reset
```

**Authentication Not Working:**
- Verify GitHub OAuth credentials in `.env.local`
- Check callback URL matches your GitHub OAuth app settings
- Ensure `NEXTAUTH_SECRET` is set

## 📄 License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

---

**⭐ Star this repository if you found it helpful!**

Built with ❤️ using Next.js 15, TypeScript, and modern web technologies.
