import { Header } from "@components/layout/Header/Header";
import { CyberpunkBg } from "@components/layout/CyberpunkBg/CyberpunkBg";
import { WelcomeModal } from "@components/layout/WelcomeModal/WelcomeModal";
import { layoutStyles as s } from "./layout.styles";

export default function TournamentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.root}>
      <CyberpunkBg />
      <WelcomeModal />
      <div className={s.inner}>
        <Header />
        <main className={s.main}>{children}</main>
      </div>
    </div>
  );
}
