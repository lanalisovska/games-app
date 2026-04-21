import { cyberpunkBgStyles as s } from "./cyberpunkBg.styles";
import { SKYLINE, WINDOW_LIGHTS, BEACONS } from "./cyberpunkBg.data";

export const CyberpunkBg = () => (
  <div className={s.root} aria-hidden="true">
    <div className={s.sky} />
    <div className={s.horizonGlow} />
    <svg
      className={s.city}
      viewBox="0 0 1440 380"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <filter id="cg-win-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path fill="var(--color-base)" d={SKYLINE} />

      {WINDOW_LIGHTS.map(({ x, y, c }) => (
        <rect
          key={`w-${x}-${y}`}
          x={x}
          y={y}
          width={5}
          height={4}
          fill={c}
          filter="url(#cg-win-glow)"
        />
      ))}

      {BEACONS.map(({ cx, cy, r, cls }) => (
        <circle
          key={`b-${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="rgba(255,45,120,0.9)"
          className={cls}
        />
      ))}
    </svg>
  </div>
);
