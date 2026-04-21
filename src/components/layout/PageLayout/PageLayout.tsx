import { Header } from "@components/layout/Header/Header";
import { CyberpunkBg } from "@components/layout/CyberpunkBg/CyberpunkBg";
import { NavTabs } from "@components/layout/NavTabs/NavTabs";
import { WelcomeModal } from "@components/layout/WelcomeModal/WelcomeModal";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-dvh flex flex-col bg-base">
    <CyberpunkBg />
    <WelcomeModal />
    <div className="relative z-10 flex flex-col flex-1">
      <Header />
      <NavTabs />
      <main className="flex-1">{children}</main>
    </div>
  </div>
);
