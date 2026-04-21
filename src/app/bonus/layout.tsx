import { Header } from "@components/layout/Header/Header";
import { CyberpunkBg } from "@components/layout/CyberpunkBg/CyberpunkBg";
import { layoutStyles as s } from "@src/app/tournaments/layout.styles";

export default function BonusLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.root}>
      <CyberpunkBg />
      <div className={s.inner}>
        <Header />
        <main className={s.main}>{children}</main>
      </div>
    </div>
  );
}
