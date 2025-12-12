export default function AccreditationSection() {
  const accreditations = [
    { name: "AACSB", logo: "AAA" },
    { name: "ACBSP", logo: "ACB" },
    { name: "AACTE", logo: "AAC" },
    { name: "NAAC", logo: "NAA" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Accreditations & Recognition</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Internationally recognized and accredited by leading educational bodies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {accreditations.map((acc, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 border border-border rounded-xl hover:border-accent/50 hover:shadow-lg transition-all duration-300 group cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-accent font-bold text-sm">{acc.logo}</span>
              </div>
              <p className="font-semibold text-foreground text-center">{acc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
