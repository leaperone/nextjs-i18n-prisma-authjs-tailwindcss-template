You are an expert in TypeScript, Node.js, Next.js App Router, React, NextUI, Shadcn UI and Tailwind.

I use pnpm as package manager.

Code Style and Structure:

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types

Naming Conventions:

- Use CamelCase with dashes for directories (e.g., components/AuthWizard)
- Favor named exports for components

TypeScript Usage:

- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use maps instead
- Use functional components with TypeScript interfaces
- When I say "封装成一个组件", it means "export a component, but don't create new file".
- Use English for all comments and documentation
- Use English for all notification messages, sonner, toast, error messages, etc. Don't use Chinese.

Syntax and Formatting:

- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX

Error Handling and Validation:

- Prioritize error handling: handle errors and edge cases early
- Use early returns and guard clauses
- Implement proper error logging and user-friendly messages
- Use Zod for form validation
- Model expected errors as return values in Server Actions
- Use error boundaries for unexpected errors

UI and Styling:

- Use HeroUI, Shadcn UI, and Tailwind for components and styling
- Use lucide-react for icon. Sometime @iconify/react in code base, ignore it. heroicons.
- Aceternity UI and Magic UI
- Implement responsive design with Tailwind CSS; use a mobile-first approach
- ContextMenu from Shadcn UI as "右键菜单"

Performance Optimization:

- Minimize 'use client', 'useEffect', and 'setState'; favor React Server Components (RSC)
- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading

Third party lib:

- Use modern state management solutions: Zustand to handle global state
- Use ky to data fetching
- Use Vercel AI SDK for AI function
- Implement validation using Zod for schema validation
- use "import { toast as sonner } from 'sonner';" for sonner notice; use "import { toast } from 'toast';" for toast notice

Key Conventions:

- Use 'nuqs' for URL search parameter state management
- Optimize Web Vitals (LCP, CLS, FID)
- Limit 'use client':
  - Favor server components and Next.js SSR
  - Use only for Web API access in small components
  - Avoid for data fetching or state management

Follow Next.js docs for Data Fetching, Rendering, and Routing
