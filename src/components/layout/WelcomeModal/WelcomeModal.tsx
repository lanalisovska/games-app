"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, Btn } from "@uikit/index";
import { welcomeStyles as s } from "./welcomeModal.styles";

const SESSION_KEY = "welcome_seen";

const FEATURES = [
  {
    bold: "Custom SVG icon system",
    text: " — zero external icon libraries. Every icon is a single path string, composable and tree-shakable.",
  },
  {
    bold: "Cyberpunk / Blade Runner theme",
    text: " — animated city skyline, neon glows, CSS-only effects. No canvas.",
  },
  {
    bold: "Next.js 15 App Router",
    text: " — React Server Components, React.cache() request deduplication, streaming Suspense boundaries.",
  },
  {
    bold: "Full-stack deployment",
    text: " — Hono backend on Railway, frontend on Vercel. No local setup needed.",
  },
];

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) dialogRef.current?.showModal();
  }, [open]);

  const handleClose = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    dialogRef.current?.close();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      aria-label="Welcome"
      aria-modal="true"
    >
      <div className={s.panel} role="document">
        <button className={s.closeBtn} onClick={handleClose} aria-label="Close">
          <Icon name="close" size="sm" color="current" aria-hidden />
        </button>

        <div>
          <p className={s.eyebrow}>Test assignment</p>
          <h2 className={s.title}>Hey there! 👾</h2>
        </div>

        <div className={s.body}>
          <p>
            I&apos;ve taken care of the setup — both this frontend and a small Node.js backend are
            already deployed, so you can skip straight to reviewing without any local configuration.
          </p>
          <p>
            Fair warning: I ran a bit short on time, so you may spot a few places where interfaces
            aren&apos;t extracted to dedicated files or styles aren&apos;t perfectly formatted.
            I&apos;m aware — sorry about that! <span className="text-text-muted">(The tracker life is real 😅)</span>
          </p>
          <p>What I&apos;m happy with:</p>
          <ul className={s.featureList} role="list">
            {FEATURES.map(({ bold, text }) => (
              <li key={bold} className={s.featureItem}>
                <span className={s.featureArrow} aria-hidden>→</span>
                <span className={s.featureText}>
                  <span className={s.featureBold}>{bold}</span>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className={s.disclaimer}>
          Feel free to explore, improve, and push something new. I&apos;d love to see what you&apos;d add!
        </p>

        <div className={s.footer}>
          <Btn variant="primary" size="md" onClick={handleClose}>
            Let&apos;s go
          </Btn>
        </div>
      </div>
    </dialog>
  );
};
