import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
              <span className="text-sm font-bold text-white">38</span>
            </div>
            <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Team 38</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">Features</a>
            <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">About</a>
            <a href="#contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">Contact</a>
            <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center py-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>AI Native Enterprise Lab
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            I can&apos;t wait til Friday
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Empower your enterprise with AI-native workflows. Streamline processes, automate tasks, and unlock new levels of productivity.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="flex h-12 items-center gap-2 rounded-full bg-indigo-600 px-8 text-white transition-colors hover:bg-indigo-700">
              <span>Start Building</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <button className="flex h-12 items-center gap-2 rounded-full border border-zinc-300 px-8 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">View Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Everything you need</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Powerful features to transform your enterprise workflow</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Built on Next.js for optimal performance and SEO" },
              { icon: "🤖", title: "AI-Powered", desc: "Seamlessly integrate AI capabilities into your workflow" },
              { icon: "🔒", title: "Secure by Default", desc: "Enterprise-grade security with role-based access control" },
              { icon: "🎨", title: "Beautiful UI", desc: "Modern, responsive design with Tailwind CSS" },
              { icon: "👥", title: "Team Collaboration", desc: "Work together with real-time updates and comments" },
              { icon: "📊", title: "Analytics", desc: "Track performance with built-in dashboards and reports" },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl dark:bg-indigo-950">{f.icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{f.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-zinc-200 py-24 px-6 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Built for the AI-native enterprise</h2>
              <p className="mb-6 text-zinc-600 dark:text-zinc-400">Team 38 is part of the AI Native Enterprise Lab, a collaborative initiative to explore how enterprises can leverage AI to transform their operations and deliver value faster.</p>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Tailwind CSS", "OpenAI", "Vercel"].map((tag) => (
                  <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600"><span className="text-lg font-bold text-white">38</span></div>
                  <div><div className="font-semibold text-zinc-900 dark:text-zinc-50">Team 38</div><div className="text-sm text-zinc-500">AI Native Enterprise Lab</div></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-zinc-100 py-2 dark:border-zinc-800"><span className="text-zinc-500">Repository</span><span className="font-medium text-zinc-900 dark:text-zinc-50">ai-native-team-38</span></div>
                  <div className="flex justify-between border-b border-zinc-100 py-2 dark:border-zinc-800"><span className="text-zinc-500">Organization</span><span className="font-medium text-zinc-900 dark:text-zinc-50">DigitalCoa-ch</span></div>
                  <div className="flex justify-between border-b border-zinc-100 py-2 dark:border-zinc-800"><span className="text-zinc-500">Framework</span><span className="font-medium text-zinc-900 dark:text-zinc-50">Next.js 16</span></div>
                  <div className="flex justify-between py-2"><span className="text-zinc-500">Status</span><span className="flex items-center gap-1.5 font-medium text-green-600"><span className="h-2 w-2 rounded-full bg-green-500"></span>Active</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">Ready to get started?</h2>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">Join us and start building the future of enterprise AI.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="flex h-12 items-center gap-2 rounded-full bg-indigo-600 px-8 text-white transition-colors hover:bg-indigo-700"><span>Contact Team 38</span></button>
            <button className="flex h-12 items-center gap-2 rounded-full border border-zinc-300 px-8 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"><span>View on GitHub</span></button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 px-6 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl text-center text-sm text-zinc-500">
          © 2026 Team 38 · AI Native Enterprise Lab · Built with Next.js
        </div>
      </footer>
    </div>
  );
}
