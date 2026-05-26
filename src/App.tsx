import { motion } from 'framer-motion';
import { ArrowRight, Bot, Fingerprint, Gauge, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Privacy-first core',
    text: 'A calm messenger experience designed around private chats, safer sessions and transparent controls.',
  },
  {
    icon: Zap,
    title: 'Fast daily flow',
    text: 'Search, switch, filter and manage conversations with a cleaner interface built for speed.',
  },
  {
    icon: Bot,
    title: 'Smart assistant layer',
    text: 'Optional AI-powered helpers for summaries, quick replies and productivity-focused workflows.',
  },
  {
    icon: Fingerprint,
    title: 'Silent mode',
    text: 'Reduce noise with focused notifications, quiet sessions and distraction-free reading.',
  },
];

const stats = [
  ['01', 'Premium visual system'],
  ['08+', 'Landing sections planned'],
  ['100%', 'Static VPS-ready build'],
];

const faqs = [
  ['Is SilentGram connected to Telegram?', 'SilentGram is positioned as a Telegram client concept. Final legal wording should be confirmed before launch.'],
  ['Can this be deployed without Vercel?', 'Yes. The production output is a static dist folder that works on GitHub Pages or a VPS with Nginx/Apache.'],
  ['Can the texts and features change later?', 'Yes. Content is kept in simple React sections so future edits are straightforward.'],
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="relative overflow-hidden text-slate-50">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/10 shadow-glow backdrop-blur">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span>SilentGram</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="#download" className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/15">
          Join waitlist
        </a>
      </header>

      <section id="top" className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <FadeIn>
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              <Sparkles className="h-4 w-4 text-indigo-300" />
              Premium Telegram experience, redesigned for silence
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Messaging that feels fast, private and calm.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              SilentGram is a refined client concept for people who want cleaner chats, smarter tools and fewer distractions without losing the Telegram flow they already know.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#download" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]">
                Start with SilentGram
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                Explore features
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-[3rem] bg-indigo-500/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/12 bg-slate-950/70 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/12 to-white/[0.03] p-5">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Silent mode</p>
                    <p className="text-xl font-semibold">Active</p>
                  </div>
                  <LockKeyhole className="h-6 w-6 text-emerald-300" />
                </div>
                {['Encrypted session ready', '12 noisy chats muted', 'AI summary prepared', 'Focus inbox enabled'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.12 }}
                    className="mb-3 rounded-2xl border border-white/10 bg-white/8 p-4"
                  >
                    <p className="text-sm font-medium text-white">{item}</p>
                    <p className="mt-1 text-xs text-slate-400">Updated just now</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Features</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Everything feels quieter, sharper and more intentional.</h2>
          </div>
        </FadeIn>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.08}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <feature.icon className="mb-8 h-7 w-7 text-indigo-200" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{feature.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="security" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
              <Gauge className="mb-8 h-10 w-10 text-emerald-300" />
              <h2 className="text-4xl font-semibold tracking-tight">Built as a static, fast landing.</h2>
              <p className="mt-5 leading-7 text-slate-300">
                The first version is intentionally lean: no backend, no paid hosting dependency, and ready to be handed over as production files.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-3">
            {stats.map(([value, label], index) => (
              <FadeIn key={label} delay={index * 0.1}>
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur">
                  <p className="text-4xl font-semibold tracking-tight text-white">{value}</p>
                  <p className="mt-4 text-sm text-slate-400">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative z-10 mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">FAQ</h2>
        </FadeIn>
        <div className="mt-10 space-y-4">
          {faqs.map(([question, answer], index) => (
            <FadeIn key={question} delay={index * 0.08}>
              <details className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">{question}</summary>
                <p className="mt-4 leading-7 text-slate-300">{answer}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="download" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-8 text-center backdrop-blur md:p-14">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Ready for the first real content pass.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-slate-300">
              Next step: replace placeholder copy with the client’s real positioning, screenshots, advantages and launch links.
            </p>
            <a href="mailto:hello@silentgram.app" className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]">
              Contact SilentGram
            </a>
          </div>
        </FadeIn>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 SilentGram. All rights reserved.</p>
        <p>Static build ready for GitHub Pages and VPS deployment.</p>
      </footer>
    </main>
  );
}
