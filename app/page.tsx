export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#1e3a8a_0%,#0f172a_35%,#000_100%)] text-white overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#22d3ee22,transparent_60%)] blur-3xl" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-400">
            Finova • MIT Manipal
          </p>

          <h1 className="mb-6 text-6xl font-black leading-none md:text-8xl">
            SoftLaunch 2.0
          </h1>

          <p className="mb-3 text-xl text-cyan-200 md:text-2xl">
            April 16–19, 2026
          </p>

          <p className="mb-10 text-lg text-slate-300 md:text-xl">
            Innovation Centre, AB3, MIT Manipal
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-2xl border border-cyan-400 bg-cyan-500/20 px-8 py-4 text-lg font-semibold text-cyan-200 backdrop-blur-xl transition hover:scale-105 hover:bg-cyan-400/30">
              Register Now
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition hover:scale-105 hover:bg-white/20">
              Learn More
            </button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h3 className="mb-3 text-xl font-bold text-cyan-300">Flagship Hackathon</h3>
              <p className="text-slate-300">
                Build fintech and startup solutions in teams of 3–5 and pitch on the final day.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h3 className="mb-3 text-xl font-bold text-cyan-300">Workshop Tracks</h3>
              <p className="text-slate-300">
                Trading Systems, Blockchain Infrastructure, OSINT, and Digital Payments.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h3 className="mb-3 text-xl font-bold text-cyan-300">Breakout Room</h3>
              <p className="text-slate-300">
                Fast-paced networking, mini-events, founder conversations, and startup culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
