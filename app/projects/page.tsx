import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: `Projects — ${siteContent.meta.name}`,
  description: `All projects by ${siteContent.meta.name}. ${siteContent.meta.description}`,
};

export default function ProjectsPage() {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-xl font-medium">&gt; all projects</h1>
        <p className="mt-2 text-sm text-foreground/70">all projects that i&apos;ve worked on</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteContent.projects.map((p) => (
            <article key={p.id} className="group border transition-all hover:border-foreground/40">
              <div className="relative aspect-video border-b overflow-hidden">
                <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover transition-transform group-hover:scale-[1.02]" />
              </div>
              <div className="space-y-2 p-4">
                <h2 className="text-base font-medium">{p.title}</h2>
                <p className="text-sm text-foreground/70">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="border-dotted-custom px-2 py-0.5 text-xs text-foreground/70">{t}</span>
                  ))}
                </div>
                {(p.links?.demo || p.links?.repo) && (
                  <div className="flex gap-3 border-t border-dashed pt-2">
                    {p.links?.demo && (
                      <Link href={p.links.demo} className="text-xs text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">demo</Link>
                    )}
                    {p.links?.repo && (
                      <Link href={p.links.repo} className="text-xs text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">code</Link>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}


