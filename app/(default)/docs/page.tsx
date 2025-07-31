import { Card, CardBody, CardHeader } from '@heroui/react';
import { BookOpen, Code, Users, Settings } from 'lucide-react';

export default function DocsPage() {
  const docs = [
    {
      title: '快速开始',
      description: '了解如何快速上手项目',
      icon: BookOpen,
      href: '/docs/getting-started',
    },
    {
      title: 'API 文档',
      description: '查看完整的 API 参考',
      icon: Code,
      href: '/docs/api',
    },
    {
      title: '用户指南',
      description: '详细的使用说明和教程',
      icon: Users,
      href: '/docs/user-guide',
    },
    {
      title: '配置说明',
      description: '系统配置和自定义设置',
      icon: Settings,
      href: '/docs/configuration',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">文档</h1>
        <p className="text-muted-foreground">项目文档和指南</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => (
          <Card
            key={doc.title}
            className="transition-shadow hover:shadow-lg">
            <CardHeader className="flex gap-3">
              <doc.icon className="size-6 text-primary" />
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{doc.title}</p>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-muted-foreground">查看 {doc.title.toLowerCase()}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
