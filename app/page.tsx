import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";

export default function Home() {
  const count = siteContent.home.featuredProjectsCount;
  const featured = count === "all" ? siteContent.projects : siteContent.projects.slice(0, count);

  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4">
        {/* Intro (context-first) */}
        <section id="home" className="flex min-h-[60vh] flex-col justify-center gap-4 py-16">
          <Reveal>
            <div className="space-y-3 border p-6">
              <h1 className="text-3xl font-medium tracking-tight">
                {siteContent.meta.name}
              </h1>
              <p className="text-sm text-foreground/70">Full Stack Developer</p>
              <p className="text-sm text-foreground/70">
                I build interactive web apps focused on clean UI and performance.
              </p>
              <div className="flex flex-wrap items-center gap-2 border-t border-dashed pt-3 mt-2">
                {siteContent.about.skills.map((s) => (
                  <span key={s} className="border-dotted-custom px-2 py-0.5 text-xs text-foreground/70">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 border-dotted-custom p-4 text-sm">
              <Link href={siteContent.socials.github} className="text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">GitHub</Link>
              <Link href={siteContent.socials.linkedin} className="text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">LinkedIn</Link>
              <Link href={siteContent.socials.email} className="text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">Email</Link>
              <Link href={siteContent.meta.resumeUrl} className="text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">Resume</Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-2 border-dotted-custom px-4 py-2 text-xs text-foreground/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-foreground/60" />
              <span>Spotify — Now Playing (placeholder)</span>
            </div>
          </Reveal>
        </section>

        {/* Work */}
        <section id="work" className="space-y-4 py-12">
          <h2 className="text-xl font-medium">&gt; work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((p) => (
              <Reveal as="article" key={p.id} className="group border transition-all hover:border-foreground/40">
                <div className="relative aspect-[16/9] border-b overflow-hidden">
                  <Image src={p.image} alt={p.title} fill sizes="100vw" className="object-cover transition-transform group-hover:scale-[1.02]" />
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="text-base font-medium">{p.title}</h3>
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
              </Reveal>
            ))}
          </div>
          {count !== "all" && (
            <div className="pt-2">
              <Link href={siteContent.routes.projects} className="inline-flex border px-4 py-2 text-sm transition-all hover:bg-foreground hover:text-background hover:translate-x-1">
                view all projects →
              </Link>
            </div>
          )}
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-4 py-12">
          <h2 className="text-xl font-medium">&gt; experience</h2>
          <div className="space-y-3">
            {siteContent.experience.map((e) => (
              <Reveal key={e.company + e.role} className="border p-4 transition-all hover:border-foreground/40">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed pb-2">
                    <h3 className="text-base font-medium">{e.company}</h3>
                    <p className="text-xs text-foreground/60">{e.start}{e.end ? ` – ${e.end}` : " – Present"}</p>
                  </div>
                  <p className="text-sm text-foreground/80">{e.role}{e.location ? ` | ${e.location}` : ""}</p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-foreground/70">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-4 py-12">
          <h2 className="text-xl font-medium">&gt; about</h2>
          <div className="border p-4 space-y-3">
            <p className="text-sm text-foreground/70">{siteContent.about.bio}</p>
            <div className="flex flex-wrap gap-2 border-t border-dashed pt-3">
              {siteContent.about.skills.map((s) => (
                <span key={s} className="border-dotted-custom px-2 py-0.5 text-xs text-foreground/70">{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4 py-12">
          <h2 className="text-xl font-medium">&gt; contact</h2>
          <div className="flex flex-wrap gap-3 border-dotted-custom p-4">
            <Link href={siteContent.socials.github} className="text-sm text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">GitHub</Link>
            <Link href={siteContent.socials.linkedin} className="text-sm text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">LinkedIn</Link>
            <Link href={siteContent.socials.email} className="text-sm text-foreground/80 transition-all hover:text-foreground hover:translate-x-0.5">Email</Link>
          </div>
        </section>

        <footer className="border-t py-6 text-center text-xs text-foreground/60">© {new Date().getFullYear()} {siteContent.meta.name}</footer>
      </main>
    </div>
  );
}
