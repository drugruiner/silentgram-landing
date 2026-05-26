import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Bot, MoonStar, LockKeyhole, Smartphone, Globe, Fingerprint } from 'lucide-react';

const cards = [
  ['Приватность по умолчанию', 'Больше контроля над сессиями, уведомлениями и личным пространством.', ShieldCheck],
  ['Быстрый рабочий поток', 'Чистая навигация по чатам и сценарии для работы без перегруза.', Zap],
  ['Умный слой внутри', 'Сводки, быстрые ответы и продуктивные действия там, где они полезны.', Bot],
];

const features = [
  ['доступно', 'Тихий режим', MoonStar],
  ['доступно', 'Скрытые чаты', Fingerprint],
  ['бета', 'AI-помощник', Bot],
  ['доступно', 'Несколько аккаунтов', Smartphone],
  ['скоро', 'Умный перевод', Globe],
  ['доступно', 'Контроль приватности', LockKeyhole],
];

function Fade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay }}>{children}</motion.div>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-[#c6a15b]/25 bg-[#c6a15b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8c19a]">{children}</span>;
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-[#c6a15b]/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl ${className}`}>{children}</div>;
}

export default function GoldAppLite() {
  return <main className="relative overflow-hidden bg-[#060606] text-[#f4f1ea]">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(196,150,82,0.22),transparent_35%),radial-gradient(circle_at_80%_16%,rgba(140,112,67,0.14),transparent_24%),linear-gradient(180deg,#060606,#090807_44%,#060606)]" />
    <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[radial-gradient(circle,rgba(201,157,85,0.75)_1px,transparent_1.5px)] [background-size:22px_22px] [mask-image:linear-gradient(180deg,transparent,black_18%,black_82%,transparent)]" />
    <div className="pointer-events-none absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-[#9c7a46]/60 to-transparent lg:block" />
    <div className="pointer-events-none absolute inset-y-0 right-8 hidden w-px bg-gradient-to-b from-transparent via-[#9c7a46]/60 to-transparent lg:block" />

    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="#hero" className="flex items-center gap-3 font-semibold"><span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#c6a15b]/18 bg-[#15120d]"><MessageCircle className="h-5 w-5 text-[#d8c19a]" /></span><span className="text-lg text-[#e8e2d9]">SilentGram</span></a>
      <nav className="hidden gap-8 text-sm text-[#c8c0b5] md:flex"><a href="#advantages">Преимущества</a><a href="#features">Функции</a><a href="#faq">FAQ</a></nav>
      <a href="#cta" className="rounded-full border border-[#c6a15b]/18 bg-[#17130e] px-5 py-2.5 text-sm font-medium text-[#eadcc2]">Скачать</a>
    </header>

    <section id="hero" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <Fade><Badge>Премиальный клиент для Telegram</Badge><h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-[#d1d5db] sm:text-7xl lg:text-[5.15rem] lg:leading-[0.94]">Тихий, дорогой и собранный визуально опыт общения.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#f5efe7]/88 sm:text-xl">SilentGram сохраняет знакомый Telegram-поток, но добавляет благородный интерфейс, порядок, приватность и премиальный чёрно-золотой визуальный стиль.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d0ab66] px-7 py-4 font-semibold text-[#1a140d] transition hover:scale-[1.02] hover:bg-[#dab978]">Открыть SilentGram<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a><a href="#features" className="inline-flex items-center justify-center rounded-full border border-[#c6a15b]/18 bg-[#12100d] px-7 py-4 font-semibold text-[#eee2cb]">Посмотреть возможности</a></div></Fade>
      <Fade delay={0.12}><Card className="relative mx-auto max-w-[470px] rounded-[2.7rem] border-[#c6a15b]/16 bg-[#0d0b09]/90 p-4"><div className="rounded-[2.15rem] border border-[#c6a15b]/14 bg-[#100d0a] p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.25em] text-[#8e8576]">Интерфейс</p><p className="mt-1 text-lg font-semibold text-[#d7dbe1]">SilentGram UI</p></div><span className="rounded-full border border-[#c6a15b]/20 bg-[#c6a15b]/10 px-3 py-1 text-xs text-[#e8d3af]">active</span></div>{['Тихий режим включён', 'Рабочие аккаунты под контролем', 'Скрытые диалоги защищены', 'Быстрые ответы готовы'].map((item) => <div key={item} className="mb-3 flex items-center justify-between rounded-2xl border border-[#c6a15b]/10 bg-[#17130f] px-4 py-3"><span className="text-sm text-[#efe6d8]">{item}</span><span className="text-[#9c8a70]">›</span></div>)}</div></Card></Fade>
    </section>

    <section id="advantages" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><Fade><Badge>Почему SilentGram</Badge><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[#d1d5db] sm:text-6xl">Спокойнее. Дороже. Умнее.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[#f5efe7]/86">Премиальные плитки, тёплые золотые акценты и выразительные серые заголовки делают сайт статуснее и чище.</p></Fade><div className="mt-12 grid gap-5 lg:grid-cols-3">{cards.map(([title, text, Icon], index) => <Fade key={String(title)} delay={index * 0.08}><Card className="h-full transition hover:-translate-y-1 hover:border-[#c6a15b]/22 hover:bg-[#12100d]"><div className="mb-8 inline-flex rounded-2xl border border-[#c6a15b]/12 bg-[#16120e] p-3"><Icon className="h-7 w-7 text-[#d3b06f]" /></div><h3 className="text-2xl font-semibold text-[#d0d4db]">{title}</h3><p className="mt-4 leading-7 text-[#f4ede3]/82">{text}</p></Card></Fade>)}</div></section>

    <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><Fade><Badge>Возможности</Badge><h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-[#d1d5db] sm:text-6xl">Красивые плитки и функции, которые хочется показывать.</h2></Fade><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{features.map(([status, title, Icon]) => <Card key={String(title)} className="h-full"><div className="mb-7 flex items-center justify-between"><div className="rounded-2xl border border-[#c6a15b]/10 bg-[#16120e] p-3"><Icon className="h-6 w-6 text-[#d3b06f]" /></div><span className="rounded-full border border-[#c6a15b]/25 bg-[#c6a15b]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#e8d3af]">{status}</span></div><h3 className="text-2xl font-semibold text-[#d0d4db]">{title}</h3><p className="mt-4 leading-7 text-[#f4ede3]/82">Аккуратная функция в премиальной золотой плитке без холодных синих оттенков.</p></Card>)}</div></section>

    <section id="faq" className="mx-auto max-w-4xl px-6 py-20 lg:px-8"><Fade><Badge>FAQ</Badge><h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-[#d1d5db] sm:text-5xl">Частые вопросы</h2></Fade><div className="mt-10 space-y-4">{faq.map(([q, a]) => <details key={q} className="rounded-[1.8rem] border border-[#c6a15b]/12 bg-[#100d0a]/95 p-6"><summary className="cursor-pointer list-none text-lg font-semibold text-[#d0d4db]">{q}</summary><p className="mt-4 leading-7 text-[#f4ede3]/82">{a}</p></details>)}</div></section>

    <section id="cta" className="mx-auto max-w-7xl px-6 pb-24 pt-8 lg:px-8"><Fade><div className="rounded-[2.7rem] border border-[#c6a15b]/14 bg-[linear-gradient(135deg,rgba(208,171,102,0.18),rgba(67,50,28,0.36),rgba(255,255,255,0.03))] p-8 text-center shadow-[0_25px_90px_rgba(0,0,0,0.42)] md:p-14"><Badge>Готово к следующему этапу</Badge><h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#d0d4db] sm:text-6xl">Теперь сайт выглядит теплее, дороже и статуснее.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f4ede3]/86">Дальше можно подставлять реальные тексты, скриншоты приложения и финальный оффер клиента.</p></div></Fade></section>

    <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#c6a15b]/10 px-6 py-8 text-sm text-[#b9b0a3] md:flex-row md:items-center md:justify-between lg:px-8"><p>© 2026 SilentGram. Все права защищены.</p><p>Премиальный статический landing page для GitHub Pages и VPS.</p></footer>
  </main>;
}
