import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { toast } from '@/hooks/use-toast';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/926230b7-482c-4208-b849-36eb6f11f641/files/406e9834-86b5-4686-b0ab-9747a013c816.jpg';

const courses = [
  {
    icon: 'Cat',
    tag: '7–9 лет',
    title: 'Scratch',
    color: 'hsl(258 90% 58%)',
    desc: 'Первый язык программирования. Дети создают анимации и свои первые игры на визуальных блоках.',
    points: ['Логика и алгоритмы', 'Своя игра уже на 3 уроке', 'Защита проектов'],
  },
  {
    icon: 'Gamepad2',
    tag: '9–12 лет',
    title: 'Roblox',
    color: 'hsl(340 90% 60%)',
    desc: 'Программирование на Lua. Ребята строят настоящие 3D-миры и публикуют игры для миллионов игроков.',
    points: ['Язык Lua с нуля', 'Свой игровой мир', 'Публикация в Roblox'],
  },
  {
    icon: 'Monitor',
    tag: '7–12 лет',
    title: 'Компьютерная грамотность',
    color: 'hsl(165 80% 45%)',
    desc: 'Уверенный пользователь ПК: файлы, интернет-безопасность, презентации, печать вслепую.',
    points: ['Безопасность в сети', 'Работа с документами', 'Слепая печать'],
  },
];

const benefits = [
  { icon: 'Users', title: 'Мини-группы до 4 человек', desc: 'Каждый ребёнок получает внимание и обратную связь на каждом уроке — никто не теряется в толпе.' },
  { icon: 'Laptop', title: 'Сразу за проект', desc: 'С первого занятия дети пишут код и создают что-то своё — анимацию, игру или программу.' },
  { icon: 'Rocket', title: 'Game-jam и мозговые штурмы', desc: 'Ребята придумывают идеи вместе, делятся опытом и создают совместные игры — это настоящее комьюнити.' },
  { icon: 'UserCheck', title: 'Первый урок — вместе с вами', desc: 'Родители приходят на занятие, видят формат изнутри и спокойно принимают решение.' },
];

const faq = [
  { q: 'Нужен ли опыт программирования?', a: 'Нет. Мы начинаем с нуля и подбираем направление по возрасту и интересам ребёнка.' },
  { q: 'Сколько детей в группе?', a: 'Не больше 4 человек. Это даёт каждому ребёнку внимание преподавателя и атмосферу команды.' },
  { q: 'Что будет на пробном уроке?', a: 'Ребёнок создаст свой первый мини-проект, а родители увидят формат обучения изнутри.' },
  { q: 'Какое оборудование нужно?', a: 'Для занятий достаточно ноутбука или компьютера. На пробном уроке всё расскажем подробно.' },
  { q: 'Можно ли менять направление?', a: 'Да. Многие начинают со Scratch и переходят на Roblox, когда осваивают базу.' },
];

const Index = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      toast({ title: 'Заполните имя и телефон', variant: 'destructive' });
      return;
    }
    toast({ title: 'Заявка отправлена! 🚀', description: 'Мы свяжемся с вами и подберём время пробного урока.' });
    setName('');
    setPhone('');
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden grain">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-display font-extrabold text-xl">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
              <Icon name="Code2" size={20} />
            </span>
            CodeKids
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {[['Курсы', 'courses'], ['Преимущества', 'benefits'], ['FAQ', 'faq'], ['Контакты', 'contacts']].map(
              ([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-primary transition-colors">
                  {label}
                </button>
              )
            )}
          </nav>
          <Button onClick={() => scrollTo('signup')} className="rounded-full font-semibold">
            Пробный урок
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-20">
        <div className="absolute -top-10 -left-20 w-96 h-96 bg-primary/20 blur-3xl rounded-full animate-blob" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-accent/20 blur-3xl rounded-full animate-blob" />
        <div className="container grid md:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground font-semibold text-sm mb-6">
              <Icon name="Sparkles" size={16} /> Программирование для детей 7–12 лет
            </span>
            <h1 className="font-display font-black text-5xl md:text-6xl leading-[1.05] mb-6">
              Мы не играем —<br />
              <span className="text-gradient">мы создаём игры</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Scratch, Roblox и компьютерная грамотность в мини-группах до 4 человек. Первый урок — вместе с
              родителями.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('signup')} size="lg" className="rounded-full text-base font-semibold hover-scale">
                Записаться на пробный урок
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button onClick={() => scrollTo('courses')} size="lg" variant="outline" className="rounded-full text-base font-semibold">
                Смотреть курсы
              </Button>
            </div>
            <div className="flex gap-8 mt-10">
              {[['до 4', 'детей в группе'], ['3', 'направления'], ['7–12', 'лет']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display font-extrabold text-2xl text-primary">{n}</div>
                  <div className="text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl rounded-[3rem]" />
            <img
              src={HERO_IMG}
              alt="Дети программируют"
              className="relative rounded-[2.5rem] shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-20 bg-muted/40">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-secondary font-bold uppercase tracking-wider text-sm">Курсы</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">Три направления на старте</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((c) => (
              <div
                key={c.title}
                className="group bg-card rounded-3xl p-7 border border-border hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <span
                  className="grid place-items-center w-14 h-14 rounded-2xl mb-5 text-white"
                  style={{ backgroundColor: c.color }}
                >
                  <Icon name={c.icon} size={26} />
                </span>
                <span className="text-xs font-semibold text-muted-foreground">{c.tag}</span>
                <h3 className="font-display font-bold text-2xl mt-1 mb-3">{c.title}</h3>
                <p className="text-muted-foreground mb-5">{c.desc}</p>
                <ul className="space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} style={{ color: c.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="text-accent font-bold uppercase tracking-wider text-sm">Формат</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">Как проходят занятия</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-5 bg-card rounded-3xl p-7 border border-border hover-scale">
                <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-primary/10 text-primary">
                  <Icon name={b.icon} size={24} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl mb-1">{b.title}</h3>
                  <p className="text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="py-20">
        <div className="container">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground p-10 md:p-16">
            <div className="absolute -top-16 -right-10 w-72 h-72 bg-accent/40 blur-3xl rounded-full" />
            <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-secondary/40 blur-3xl rounded-full" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4 leading-tight">
                  Бесплатный пробный урок
                </h2>
                <p className="text-primary-foreground/80 text-lg">
                  Запишитесь, и мы подберём удобное время. Урок проходит вместе с родителями — вы увидите, как
                  ребёнок создаёт свой первый проект.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="bg-card text-card-foreground rounded-3xl p-7 space-y-4">
                <Input
                  placeholder="Имя ребёнка"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl"
                />
                <Input
                  placeholder="Телефон для связи"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 rounded-xl"
                />
                <Button type="submit" size="lg" className="w-full rounded-xl text-base font-semibold hover-scale">
                  Записаться <Icon name="Send" size={18} className="ml-1" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/40">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold uppercase tracking-wider text-sm">FAQ</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-2xl border border-border px-5">
                <AccordionTrigger className="text-left font-display font-semibold text-lg hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="py-16 bg-primary text-primary-foreground">
        <div className="container grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 font-display font-extrabold text-2xl mb-3">
              <Icon name="Code2" size={24} /> CodeKids
            </div>
            <p className="text-primary-foreground/70">
              Школа программирования для детей 7–12 лет. Мы учим создавать, а не просто играть.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-3"><Icon name="Phone" size={18} /> +7 (900) 000-00-00</li>
              <li className="flex items-center gap-3"><Icon name="Mail" size={18} /> hello@codekids.ru</li>
              <li className="flex items-center gap-3"><Icon name="MapPin" size={18} /> г. Москва, онлайн и оффлайн</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Готовы начать?</h4>
            <Button onClick={() => scrollTo('signup')} variant="secondary" className="rounded-full font-semibold">
              Записаться на пробный урок
            </Button>
          </div>
        </div>
        <div className="container mt-12 pt-6 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
          © 2026 CodeKids. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;