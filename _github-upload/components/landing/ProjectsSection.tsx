import { MapPin } from 'lucide-react'
import { projects, type ProjectMedia } from '@/config/projects'

function MediaTile({ item, className = '' }: { item: ProjectMedia; className?: string }) {
  const base = `h-full w-full rounded-2xl object-cover ${className}`
  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        poster={item.poster}
        aria-label={item.alt}
        className={base}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    )
  }
  return <img src={item.src} alt={item.alt} loading="lazy" className={base} />
}

export default function ProjectsSection() {
  return (
    <section id="projekte" className="section-padding bg-[#fffaf5]">
      <div className="container-custom">
        <p className="text-center text-sm uppercase tracking-[0.12em] text-text-secondary">Aus unserer Arbeit</p>
        <h2 className="mt-2 text-center text-2xl text-primary sm:text-3xl md:text-4xl">Aktuelle Projekte</h2>

        <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-16">
          {projects.map((project, index) => {
            const flip = index % 2 === 1
            const [lead, ...rest] = project.media
            const hideLastOnMobile = rest.length > 2 && (rest.length - 2) % 2 === 1
            return (
              <article key={project.slug} data-reveal className={`reveal grid gap-6 lg:items-center lg:gap-10 ${flip ? 'lg:grid-cols-[1.1fr_1fr]' : 'lg:grid-cols-[1fr_1.1fr]'}`}>
                <div className={flip ? 'lg:order-2' : ''}>
                  <p className="inline-flex items-center gap-1.5 text-sm text-text-secondary">
                    <MapPin className="h-4 w-4 text-primary" />
                    {project.location}
                    {project.date ? ` · ${project.date}` : ''}
                  </p>
                  <h3 className="mt-2 text-xl text-primary sm:text-2xl md:text-3xl">{project.title}</h3>
                  {project.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
                      {p}
                    </p>
                  ))}
                  {project.donations && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.donations.map((d) => (
                        <li key={d} className="rounded-full border border-border bg-white px-3 py-1 text-sm text-text-primary">
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  {project.highlights && (
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-text-secondary sm:text-base">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {lead && (
                    <div className="row-span-2">
                      <MediaTile item={lead} />
                    </div>
                  )}
                  {rest.map((item, i) => (
                    <div
                      key={item.src}
                      className={`aspect-[3/4] ${hideLastOnMobile && i === rest.length - 1 ? 'hidden sm:block' : ''}`}
                    >
                      <MediaTile item={item} />
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
