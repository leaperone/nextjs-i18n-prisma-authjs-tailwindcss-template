import { PrismaClient as PrismaTemplateClient } from '@/prisma/client_template';

// 全局类型声明
declare const globalThis: {
  prismaTemplateGlobal: ReturnType<typeof createTemplateClient>;
} & typeof global;

// 创建客户端单例
const createTemplateClient = () => new PrismaTemplateClient();

// 初始化客户端实例
export const templateDb = globalThis.prismaTemplateGlobal ?? createTemplateClient();

// 开发环境下保存全局实例
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaTemplateGlobal = templateDb;
}

export const prisma = templateDb;
