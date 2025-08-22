import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink, Github, Triangle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "concept" | "revamp";
  quality?: 1 | 2 | 3 | 4 | 5;
  image?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "The Barber Shop",
    description:
      "Berberler için tasarlanmış modern randevu yönetim sistemi. Müşteriler online randevu alabilir, berberler tüm randevularını kolayca yönetebilir.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Prisma",
      "Supabase Auth",
      "Tailwind CSS",
      "Shadcn/ui",
      "Zod",
      "Zustand",
    ],
    githubUrl: "https://github.com/bugrabasbostanci/barber-app",
    liveUrl: "https://the-barbershop.vercel.app/",
    status: "revamp",
    quality: 4,
  },

  {
    id: "2",
    title: "Funny Yellow",
    description:
      "A high-quality sticker platform built with Next.js, focusing on providing free stickers for WhatsApp and other messaging platforms.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Shadcn/ui",
      "React Context",
    ],
    githubUrl: "https://github.com/bugrabasbostanci/funny-yellow",
    status: "in-progress",
    quality: 3,
  },
  {
    id: "3",
    title: "Tablio",
    description:
      "Tablio, web sayfalarındaki tabloları kolayca Excel, CSV, PDF, JSON ve Markdown formatlarına dönüştürmenizi sağlayan kullanıcı dostu bir araçtır.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "XLSX",
      "jsPDF",
      "Papa Parse",
    ],
    githubUrl: "https://github.com/bugrabasbostanci/tablio?tab=readme-ov-file",
    liveUrl: "https://tablio-deu.pages.dev/",
    status: "completed",
    quality: 2,
  },
  {
    id: "4",
    title: "Tatar Oto Kaporta Landing Page",
    description:
      "Tatar Oto Kaporta'nın resmi web sitesi. Next.js ve TailwindCSS ile geliştirilmiş modern ve hızlı bir web uygulaması. Kullanıcı dostu arayüzü ve gelişmiş performansıyla müşterilerimize en iyi hizmeti sunmayı hedefliyoruz.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/bugrabasbostanci/tatar-oto-kaporta",
    liveUrl: "https://www.tatarotokaporta.com/",
    status: "completed",
    quality: 1,
  },
];

const statusStyles = {
  completed:
    "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
  "in-progress":
    "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
  concept:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  revamp:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
};

const qualityColors = {
  1: "text-gray-400",
  2: "text-blue-400",
  3: "text-yellow-400",
  4: "text-red-400",
  5: "text-indigo-400 ",
};

const statusLabels = {
  completed: "Completed",
  "in-progress": "In Progress",
  concept: "Concept",
  revamp: "Revamping",
};

const renderQualityIcon = (quality: number) => {
  return (
    <Triangle
      size={16}
      className={`${
        qualityColors[quality as keyof typeof qualityColors]
      } fill-current`}
    />
  );
};

export function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="group hover:shadow-lg transition-all duration-300"
        >
          <CardContent className="p-6">
            <CardHeader className="p-0 mb-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-primary group-hover:text-ring transition-colors">
                    {project.title}
                  </h3>
                  <Badge
                    variant="secondary"
                    className={`text-xs px-2 py-1 ${
                      statusStyles[project.status]
                    }`}
                  >
                    {statusLabels[project.status]}
                  </Badge>
                </div>
                {project.quality && renderQualityIcon(project.quality)}
              </div>
            </CardHeader>

            <p className="text-secondary text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs px-2 py-1 text-muted-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
