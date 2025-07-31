import { Card, CardBody, Avatar, Chip, Button } from '@heroui/react';
import { Users, Target, Heart, Award, Mail, Phone } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: '张三',
      role: '创始人 & CEO',
      avatar: '/api/placeholder/150/150',
      description: '拥有10年技术经验，专注于产品设计和用户体验',
    },
    {
      name: '李四',
      role: '技术总监',
      avatar: '/api/placeholder/150/150',
      description: '全栈开发专家，负责技术架构和团队管理',
    },
    {
      name: '王五',
      role: '产品经理',
      avatar: '/api/placeholder/150/150',
      description: '产品设计专家，专注于用户需求和产品规划',
    },
  ];

  const values = [
    {
      title: '用户至上',
      description: '我们始终将用户需求放在首位，提供最好的产品体验',
      icon: Heart,
      color: 'danger' as const,
    },
    {
      title: '创新驱动',
      description: '持续创新，不断突破技术边界，为用户创造价值',
      icon: Target,
      color: 'primary' as const,
    },
    {
      title: '团队协作',
      description: '相信团队的力量，通过协作创造更大的价值',
      icon: Users,
      color: 'success' as const,
    },
    {
      title: '品质保证',
      description: '追求卓越品质，为用户提供可靠的产品和服务',
      icon: Award,
      color: 'warning' as const,
    },
  ];

  return (
    <div className="container mx-auto space-y-12 px-4 py-8">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Chip
              size="lg"
              variant="flat"
              color="primary"
              className="mb-4">
              关于我们
            </Chip>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              用技术创新
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">改变世界</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              我们致力于为用户提供最好的产品和服务，通过技术创新和用户导向的设计，为用户创造真正的价值。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                color="primary"
                startContent={<Mail className="size-4" />}
                className="min-w-32">
                联系我们
              </Button>
              <Button
                size="lg"
                variant="flat"
                startContent={<Phone className="size-4" />}
                className="min-w-32">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 使命和愿景 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="border shadow-none">
          <CardBody className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Target className="size-6 text-primary" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold">我们的使命</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  通过技术创新和用户导向的设计，为用户提供简单、高效、可靠的产品和服务，帮助用户实现目标，创造更大的价值。
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="border shadow-none">
          <CardBody className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Award className="size-6 text-primary" />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold">我们的愿景</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  成为用户最信赖的技术伙伴，通过持续创新和优质服务，在行业内树立标杆，影响和改变更多人的生活。
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* 核心价值观 */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">核心价值观</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {values.map((value) => (
            <Card
              key={value.title}
              className="border shadow-none">
              <CardBody className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="size-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* 团队成员 */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">核心团队</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="border shadow-none">
              <CardBody className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={member.avatar}
                      name={member.name}
                      className="size-16 shrink-0"
                    />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <Chip
                        color="primary"
                        variant="flat"
                        size="sm">
                        {member.role}
                      </Chip>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.description}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
