export type TLang = "ru" | "uk" | "en";

interface IWelcomeContent {
  eyebrow: string;
  title: string;
  intro: string;
  warning: string;
  featuresHeading: string;
  features: { bold: string; text: string }[];
  disclaimer: string;
  cta: string;
}

export const WELCOME_CONTENT: Record<TLang, IWelcomeContent> = {
  ru: {
    eyebrow: "Тестовое задание",
    title: "Привет! 👾",
    intro:
      "Я немного упростила вам работу — и фронтенд, и небольшой бекенд уже задеплоены, так что разворачивать ничего не нужно.",
    warning:
      "Предупреждаю: времени не хватило, поэтому местами можно заметить, что интерфейс не вынесен в отдельный файл или стили не отформатированы. Знаю, что так не должно быть — сорри! (Трекерная жизнь 😅)",
    featuresHeading: "Что нравится:",
    features: [
      {
        bold: "Своя SVG-иконочная система",
        text: " — никаких внешних библиотек. Обычно я беру SVG-файлы, но здесь мне было лень, поэтому список путей выглядит немного странно. Сам подход с Icon-компонентом всё равно крутой.",
      },
      {
        bold: "Cyberpunk / Blade Runner тема",
        text: " — анимированный силуэт города, неоновые глоу, только CSS.",
      },
      {
        bold: "Полный деплой",
        text: " — Hono бекенд на Railway, фронт на Vercel.",
      },
    ],
    disclaimer:
      "Можешь дополнить проект и передеплоить — было бы интересно посмотреть!",
    cta: "Поехали",
  },
  uk: {
    eyebrow: "Тестове завдання",
    title: "Привіт! 👾",
    intro:
      "Я трохи спростила вам роботу — і фронтенд, і маленький бекенд вже задеплоєні, тож розгортати нічого не потрібно.",
    warning:
      "Попереджаю: часу не вистачило, тому подекуди можна помітити, що інтерфейс не винесено в окремий файл або стилі не відформатовані. Знаю, що так не можна — сорі! (Трекерне життя 😅)",
    featuresHeading: "Що подобається:",
    features: [
      {
        bold: "Власна SVG-іконочна система",
        text: " — жодних зовнішніх бібліотек. Зазвичай я беру SVG-файли, але тут мені було ліньки, тому список шляхів виглядає трохи дивно. Сам підхід з Icon-компонентом все одно класний.",
      },
      {
        bold: "Cyberpunk / Blade Runner тема",
        text: " — анімований силует міста, неонові глоу, лише CSS.",
      },
      {
        bold: "Повний деплой",
        text: " — Hono бекенд на Railway, фронт на Vercel.",
      },
    ],
    disclaimer:
      "Можеш доповнити проект і передеплоїти — було б цікаво подивитись!",
    cta: "Поїхали",
  },
  en: {
    eyebrow: "Test assignment",
    title: "Hey there! 👾",
    intro:
      "I've taken care of the setup — both the frontend and a small backend are already deployed, so you can skip straight to reviewing without any local configuration.",
    warning:
      "Fair warning: I ran a bit short on time, so you may spot a few places where interfaces aren't in dedicated files or styles aren't perfectly formatted. I'm aware — sorry! (The tracker life is real 😅)",
    featuresHeading: "What I'm happy with:",
    features: [
      {
        bold: "Custom SVG icon system",
        text: " — no external libraries. Normally I'd import actual SVG files, but I was lazy here so the path list looks a bit odd. The Icon component approach itself is still neat.",
      },
      {
        bold: "Cyberpunk / Blade Runner theme",
        text: " — animated city skyline, neon glows, CSS-only effects.",
      },
      {
        bold: "Full-stack deployment",
        text: " — Hono backend on Railway, frontend on Vercel.",
      },
    ],
    disclaimer:
      "Feel free to explore, improve, and push something new — I'd love to see what you'd add!",
    cta: "Let's go",
  },
};

export const LANG_LABELS: Record<TLang, string> = {
  ru: "RU",
  uk: "UA",
  en: "EN",
};

export const LANG_ORDER: TLang[] = ["ru", "uk", "en"];
