import { Card, CardBody, CardHeader } from '@heroui/react';
import { Calculator, Palette, FileText, Settings } from 'lucide-react';

export default function ToolsPage() {
  const tools = [
    {
      title: '计算器',
      description: '简单的计算器工具',
      icon: Calculator,
      href: '/tools/calculator',
    },
    {
      title: '颜色选择器',
      description: '颜色选择和调色工具',
      icon: Palette,
      href: '/tools/color-picker',
    },
    {
      title: '文本编辑器',
      description: '在线文本编辑工具',
      icon: FileText,
      href: '/tools/text-editor',
    },
    {
      title: '设置',
      description: '应用设置和配置',
      icon: Settings,
      href: '/tools/settings',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-foreground">工具</h1>
        <p className="text-muted-foreground">你最好的工具箱</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card
            key={tool.title}
            className="transition-shadow hover:shadow-lg">
            <CardHeader className="flex gap-3">
              <tool.icon className="size-6 text-primary" />
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{tool.title}</p>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-muted-foreground">点击进入 {tool.title.toLowerCase()}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
