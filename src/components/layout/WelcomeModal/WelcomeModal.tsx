"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, Btn } from "@uikit/index";
import { welcomeStyles as s } from "./welcomeModal.styles";
import { WELCOME_CONTENT, LANG_LABELS, LANG_ORDER } from "./welcomeModal.data";
import type { TLang } from "./welcomeModal.data";

const SESSION_KEY = "welcome_seen";

export const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<TLang>("ru");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!sessionStorage.getItem(SESSION_KEY)) setOpen(true);
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

  const c = WELCOME_CONTENT[lang];

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      aria-label="Welcome"
      aria-modal="true"
    >
      <div className={s.panel} role="document">
        <div className={s.panelHeader}>
          <div>
            <p className={s.eyebrow}>{c.eyebrow}</p>
            <h2 className={s.title}>{c.title}</h2>
          </div>
          <div className={s.langSwitcher}>
            {LANG_ORDER.map((l) => (
              <button
                key={l}
                className={s.langBtn(lang === l)}
                onClick={() => setLang(l)}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
        </div>

        <div className={s.body}>
          <p>{c.intro}</p>
          <p>{c.warning}</p>
          <p>{c.featuresHeading}</p>
          <ul className={s.featureList} role="list">
            {c.features.map(({ bold, text }) => (
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

        <div className={s.footer}>
          <button className={s.closeBtn} onClick={handleClose} aria-label="Close">
            <Icon name="close" size="sm" color="current" aria-hidden />
          </button>
          <Btn variant="primary" size="md" onClick={handleClose}>
            {c.cta}
          </Btn>
        </div>
      </div>
    </dialog>
  );
};
