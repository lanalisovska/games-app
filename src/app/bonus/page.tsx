import { SnakeGame } from "@components/games/SnakeGame/SnakeGame";
import { bonusPageStyles as s } from "./page.styles";

export default function BonusPage() {
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h1 className={s.title}>Arcade</h1>
        <p className={s.subtitle}>Take a break. Play Neon Snake.</p>
      </div>
      <SnakeGame />
    </div>
  );
}
