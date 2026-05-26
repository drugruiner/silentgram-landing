import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ChevronRight,
  Fingerprint,
  Globe,
  LockKeyhole,
  MessageCircle,
  MoonStar,
  ShieldCheck,
  Smartphone,
  WandSparkles,
  Zap,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Приватность по умолчанию',
    text: 'Больше контроля над сессиями, уведомлениями и личным пространством — без лишнего шума.',
  },
  {
    icon: Zap,
    title: 'Быстрее в ежедневной работе',
    text: 'Чистый интерфейс, удобная навигация по чатам и сценарии для работы без перегруза.',
  },
  {
    icon: Bot,
    title: 'Умные инструменты внутри',
    text: 'Подсказки, быстрые ответы, суммаризация и продуктивные сценарии там, где они действительно полезны.',
  },
];

const comparison = [
  {
    title: 'Обычный Telegram-клиент',
    points: ['Базовый сценарий общения', 'Меньше фокуса на приватности', 'Не хватает продвинутого рабочего слоя'],
  },
  {
    title: 'SilentGram',
    points: ['Премиальный спокойный интерфейс', 'Усиленный контроль, приватность и порядок', 'Функции для тех, кто хочет больше скорости и удобства'],
  },
];

const featureGroups = [
  {
    status: 'доступно',
    icon: MoonStar,
    title: 'Тихий режим',
    text: 'Фильтруйте шум, отключайте лишние сигналы и сохраняйте фокус на важном.',
  },
  {
    status: 'бета',
    icon: WandSparkles,
    title: 'AI-помощник',
    text: 'Сжатые саммари, быстрые ответы и полезные сценарии для переписок и командной работы.',
  },
  {
    status: 'доступно',
    icon: Fingerprint,
    title: 'Скрытые чаты',
    text: 'Чувствительные диалоги и отдельные сценарии доступа в более приватной оболочке.',
  },
  {
    status: 'доступно',
    icon: Smartphone,
    title: 'Несколько аккаунтов',
    text: 'Управляйте рабочими и личными аккаунтами в одном аккуратном пространстве.',
  },
  {
    status: 'скоро',
    icon: Globe,
    title: 'Умный перевод',
    text: 'Лёгкий перевод входящих и исходящих сообщений без лишних действий.',
  },
  {
    status: 'доступно',
    icon: LockKeyhole,
    title: 'Контроль приватности',
    text: 'Гибкие ограничения, более спокойные настройки и меньше визуального хаоса.',
  },
];

const metrics = [
  { value: '01', label: 'Премиальный landing-first подход' },
  { value: '08+', label: 'Секций под полноценную презентацию продукта' },
  { value: '100%', label: 'Статическая сборка для GitHub Pages и VPS' },
  { value: '24/7', label: 'Готовность к показу клиенту и дальнейшим правкам' },
];

const faq = [
  {
    q: 'SilentGram — это отдельный мессенджер?',
    a: 'Нет, это концепт клиента для Telegram с более премиальным интерфейсом, приватными сценариями и дополнительными удобствами.',
  },
  {
    q: 'Можно ли потом загрузить сайт на VPS?',
    a: 'Да. Проект собирается в обычную статическую папку dist и без проблем размещается на VPS через Nginx или Apache.',
  },
  {
    q: 'Можно ли менять тексты и преимущества под клиента?',
    a: 'Конечно. Вся структура легко редактируется, поэтому дальше можно спокойно адаптировать сайт под финальное позиционирование.',
  },
];

function FadeIn({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/90 backdrop-blur">
      {children}
    </span>
  );
}

function statusClass(status: string) {
  if (status === 'доступно') return 'bg-emerald-400/15 text-emerald-300 border-emerald-300/20';
  if (status === 'бета') return 'bg-violet-400/15 text-violet-200 border-violet-300/20';
  return 'bg-sky-400/15 text-sky-200 border-sky-300/20';
}

export default function App() {
  return (
    <main className="relative overflow-hidden text-slate-50">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.22),transparent_32%),radial-gradient(circle_at_top_right,rgba(53,214,193,0.14),transparent_26%),linear-gradient(180deg,#070B14_0%,#0A1020_45%,#070B14_100%)]" />
      <div className="absolute left-[-18rem] top-[8rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute right-[-12rem] top-[18rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 font-semibold tracking-tight text-white">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-glow backdrop-blur">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="text-lg">SilentGram</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#advantages">Преимущества</a>
          <a className="transition hover:text-white" href="#compare">Сравнение</a>
          <a className="transition hover:text-white" href="#features">Функции</a>
          <a className="transition hover:text-white" href="#faq">FAQ</a>
        </nav>

        <a
          href="#cta"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/[0.12]"
        >
          Скачать
        </a>
      </header>

      <section id="hero" className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-12">
        <FadeIn>
          <SectionBadge>Премиальный клиент для Telegram</SectionBadge>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.25rem] lg:leading-[0.95]">
            Спокойный, быстрый и более приватный опыт общения.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            SilentGram — это лендинг и продуктовая концепция для тех, кто хочет сохранить знакомый Telegram-поток,
            но получить более чистый интерфейс, сильнее ощущение контроля и действительно премиальный визуальный стиль.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Открыть SilentGram
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Посмотреть возможности
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {['Приватность', 'Премиальный интерфейс', 'GitHub Pages / VPS ready'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="absolute inset-x-10 top-8 h-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-[460px] rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,22,40,0.92)_0%,rgba(9,15,28,0.95)_100%)] p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Интерфейс</p>
                  <p className="mt-1 text-lg font-semibold">SilentGram UI</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  online
                </span>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-4 flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3">
                  <div className="h-11 w-11 rounded-2xl bg-[linear-gradient(135deg,#7C5CFF,#6EA8FF)]" />
                  <div>
                    <p className="font-medium">Команда продукта</p>
                    <p className="text-sm text-slate-400">AI-сводка готова • 2 мин назад</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'Тихий режим включён',
                    'Рабочие аккаунты под контролем',
                    'Скрытые диалоги защищены',
                    'Быстрые ответы готовы к отправке',
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.1 }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"
                    >
                      <span className="text-sm font-medium text-white">{item}</span>
                      <ChevronRight className="h-4 w-4 text-slate-500" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Статус</p>
                  <p className="mt-2 text-base font-semibold">Приватность активна</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Режим</p>
                  <p className="mt-2 text-base font-semibold">Focus mode</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="advantages" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <FadeIn>
          <SectionBadge>Почему SilentGram</SectionBadge>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Быстрее. Спокойнее. Умнее.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Мы берём знакомую механику Telegram и добавляем то, чего обычно не хватает: премиальный интерфейс,
            приватные сценарии и удобство для людей, которые ценят порядок в переписках.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.08]">
                <item.icon className="mb-8 h-8 w-8 text-sky-200" />
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <FadeIn>
          <SectionBadge>SilentGram vs Telegram</SectionBadge>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Привычная база — но более продуманный слой сверху.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {comparison.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <ul className="mt-6 space-y-4 text-slate-300">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#6EA8FF,#7C5CFF)]" />
                      <span className="leading-7">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <div className="h-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,22,40,0.9)_0%,rgba(10,16,32,0.95)_100%)] p-8 backdrop-blur-xl">
              <ShieldCheck className="mb-8 h-10 w-10 text-emerald-300" />
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Больше контроля. Меньше визуального шума.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                SilentGram задуман как более чистая и дорогая оболочка для коммуникации — с акцентом на тишину,
                порядок, приватность и комфортное ежедневное использование.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {metrics.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.08}>
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl">
                  <p className="text-4xl font-semibold tracking-tight text-white">{item.value}</p>
                  <p className="mt-4 leading-7 text-slate-300">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <FadeIn>
          <SectionBadge>Возможности</SectionBadge>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Продвинутые функции, которые действительно хочется использовать.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureGroups.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.06}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.08]">
                <div className="mb-7 flex items-center justify-between gap-3">
                  <feature.icon className="h-7 w-7 text-sky-200" />
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${statusClass(feature.status)}`}>
                    {feature.status}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{feature.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <FadeIn>
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Частые вопросы
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-4">
          {faq.map((item, index) => (
            <FadeIn key={item.q} delay={index * 0.07}>
              <details className="group rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{item.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="cta" className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pb-28">
        <FadeIn>
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(124,92,255,0.18),rgba(110,168,255,0.08),rgba(255,255,255,0.04))] p-8 text-center shadow-2xl backdrop-blur-xl md:p-14">
            <SectionBadge>Готово к следующему этапу</SectionBadge>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Следующий шаг — подставить реальные тексты, скриншоты и оффер клиента.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Основа уже выглядит значительно премиальнее. Теперь можно спокойно доводить продуктовый образ SilentGram до финальной презентации.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]" href="mailto:hello@silentgram.app">
                Связаться
              </a>
              <a className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-7 py-4 font-semibold text-white transition hover:bg-white/[0.1]" href="#hero">
                Вернуться наверх
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 SilentGram. Все права защищены.</p>
        <p>Премиальный статический landing page для GitHub Pages и VPS.</p>
      </footer>
    </main>
  );
}
