import Image from "next/image";
import Link from "next/link";
import { Twitter, Github, Mail, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16 md:py-24 relative">
      {/* Mode toggle for mobile - fixed at top right */}
      <div className="absolute top-4 right-4 md:hidden">
        <ThemeToggle />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
        <Image
          src="/avatar.webp"
          alt="Profile picture"
          width={96}
          height={96}
          className="rounded-lg border border-border"
        />
        <div>
          <h1 className="text-3xl font-normal text-primary">
            Buğra Başbostancı
          </h1>
          <div className="flex items-center gap-2 mt-0.5">
            <p className="text-sm text-secondary">Web Develooper</p>
            <Badge
              variant="badge"
              className="text-sm px-2 py-0.5 rounded-full font-bold"
            >
              ᓚᘏᗢ
            </Badge>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <Link
              href="https://x.com/0143bbsbw"
              target="_blank"
              aria-label="Twitter"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="https://github.com/bugrabasbostanci"
              target="_blank"
              aria-label="GitHub"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bugrabasbostanci/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="mailto:bb0143sbw@gmail.com"
              aria-label="Email"
              className="text-secondary hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>

        {/* Mode toggle for desktop - integrated with header */}
        <div className="hidden md:block ml-auto">
          <ThemeToggle />
        </div>
      </div>

      <p className="text-secondary mb-16">
        I believe coding is the ultimate tool to turn ideas into reality.
        Focusing on solving real-world problems through tech with clean and
        modern solutions.
      </p>

      <section className="mb-16">
        <h2 className="text-lg font-medium mb-6 text-primary">Projects</h2>
        <Projects />
      </section>

      {/* Yazdığım yazılar */}
      {/* <section className="mb-16">
        <h2 className="text-sm font-medium mb-6 text-primary">yazdığım yazılar</h2>
        <p className="text-secondary">Bu bölümde yazdığım yazılar listelenecek.</p>
      </section> */}

      {/* Öne çıkan içerikler */}
      {/* <section className="mb-16">
        <h2 className="text-sm font-medium mb-6 text-primary">öne çıkan</h2>
        <p className="text-secondary">Bu bölümde öne çıkan içerikler yer alacak.</p>
      </section> */}
    </main>
  );
}
