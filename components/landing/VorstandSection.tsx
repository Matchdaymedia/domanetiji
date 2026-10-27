const members = [
  'Ezgi Ciplak',
  'Eda Erdogan',
  'Melisa Aksünger',
  'Ugurcan Aksünger',
  'Yeliz Isik',
  'Christoph Rahmann',
]

export default function VorstandSection() {
  return (
    <section id="vorstand" className="section-padding bg-[#fff9f2]">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12">
          <figure data-reveal className="reveal overflow-hidden rounded-[22px] border border-border bg-white p-2 shadow-sm sm:p-3">
            <img
              src="/vorstand/vorstand.jpg"
              alt={`Der Vorstand von Domanê Tiji e.V., von links: ${members.join(', ')}`}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </figure>

          <div>
            <p className="text-sm uppercase tracking-[0.12em] text-text-secondary">Die Menschen hinter dem Verein</p>
            <h2 className="mt-2 text-2xl text-primary sm:text-3xl md:text-4xl">Unser Vorstand</h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              Auf dem Foto von links nach rechts:
            </p>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {members.map((name, i) => (
                <li
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text-primary sm:text-base"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  {name}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
