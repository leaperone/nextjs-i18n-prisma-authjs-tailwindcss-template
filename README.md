# Next.js 16 Full-Stack Template

A comprehensive, production-ready Next.js template with internationalization, authentication, database integration, and modern UI components.

[中文文档](./README.zh-CN.md)

## ✨ Features

- **🚀 Next.js 16** - Latest React framework with App Router and Turbopack
- **🌍 Internationalization** - Multi-language support (English, Chinese, Japanese)
- **🔐 Authentication** - Secure auth with NextAuth.js v5 and GitHub OAuth
- **🗄️ Database** - PostgreSQL with Drizzle ORM
- **🎨 Modern UI** - Beautiful components with Tailwind CSS, shadcn/ui, and HeroUI
- **🌙 Dark Mode** - Built-in theme switching
- **📱 Responsive** - Mobile-first design
- **🎬 Animations** - Smooth animations with Framer Motion
- **🔧 Developer Experience** - TypeScript, Biome, Husky
- **🐳 Docker Support** - Development and production containers
- **📊 State Management** - Zustand for client state
- **🎯 Form Handling** - React Hook Form with Zod validation

## 🛠️ Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router and Turbopack
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
- **[Drizzle ORM](https://orm.drizzle.team/)** - Lightweight and type-safe ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Advanced open source database

### Internationalization
- **[i18next](https://www.i18next.com/)** - Internationalization framework
- **[react-i18next](https://react.i18next.com/)** - React integration for i18next

### Development Tools
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
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
TEMPLATE_DATABASE_URL="postgresql://leaperone:password@localhost:5432/template_db"

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
docker compose -f docker/docker-compose-dev-db.yml up -d
```

#### Option B: Local PostgreSQL
Ensure PostgreSQL is running and create a database, then update `TEMPLATE_DATABASE_URL`.

### 4. Initialize Database

```bash
# Push schema to database (creates tables)
pnpm db:push
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
│   ├── schema.ts        # Drizzle ORM table definitions
│   └── db.ts            # Database client
├── drizzle/             # Database migrations
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
   - Modify `lib/schema.ts` to add or change table definitions
   - Run `pnpm db:push` to apply changes in development

2. **Migrations:**
   - Generate migration: `pnpm db:generate`
   - Apply migration: `pnpm db:migrate`
   - Visual browser: `pnpm db:studio`

### Internationalization

- **Supported Languages:** English, Chinese (Simplified), Japanese
- **Add New Language:**
  1. Add locale to `i18n/settings.ts`
  2. Create translation files in `i18n/locales/[locale]/`
  3. Update language switcher component

## 📦 Available Scripts

```bash
pnpm dev          # Start development server (Turbopack)
pnpm build        # Build for production (Turbopack)
pnpm start        # Start production server
pnpm check        # Run Biome lint check
pnpm fix          # Auto-fix Biome issues
pnpm format       # Format code with Biome
pnpm db:push      # Push schema to database (dev)
pnpm db:generate  # Generate migration files
pnpm db:migrate   # Apply migrations (production)
pnpm db:pull      # Introspect database to schema
pnpm db:studio    # Open Drizzle Studio
```

## 🐳 Docker Support

### Development Database

```bash
docker compose -f docker/docker-compose-dev-db.yml up -d
```

### Development Container

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
- **[Drizzle ORM Docs](https://orm.drizzle.team/docs/overview)** - Database and ORM documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI
- **[i18next](https://www.i18next.com/)** - Internationalization framework

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error:**
```bash
# Check if PostgreSQL is running
docker compose -f docker/docker-compose-dev-db.yml ps

# Restart container
docker compose -f docker/docker-compose-dev-db.yml restart
```

**Database Schema Issues:**
```bash
# Introspect existing database
pnpm db:pull

# Re-push schema (⚠️ May alter tables)
pnpm db:push

# Open visual browser to inspect data
pnpm db:studio
```

**Authentication Not Working:**
- Verify GitHub OAuth credentials in `.env.local`
- Check callback URL matches your GitHub OAuth app settings
- Ensure `NEXTAUTH_SECRET` is set

## 📄 License

Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

---

**⭐ Star this repository if you found it helpful!**

Built with ❤️ using Next.js 16, TypeScript, and modern web technologies.
