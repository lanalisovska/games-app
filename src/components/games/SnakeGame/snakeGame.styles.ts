export const snakeStyles = {
  wrapper: "flex flex-col items-center gap-6",
  scorebar: "flex items-center gap-6 font-cyber tracking-widest text-sm",
  scoreLabel: "text-text-muted uppercase",
  scoreValue: "text-accent neon-text text-xl font-bold",
  canvasWrap: "relative",
  canvas: "block border border-accent/30 shadow-neon",
  overlay:
    "absolute inset-0 flex flex-col items-center justify-center gap-5 bg-base/80 backdrop-blur-sm",
  overlayTitle:
    "text-2xl font-bold font-cyber tracking-widest uppercase text-accent neon-text",
  overlayScore: "text-sm font-cyber tracking-widest text-text-secondary uppercase",
  overlayScoreValue: "text-neon-pink font-bold",
  hint: "text-xs text-text-muted font-cyber tracking-widest text-center",
  dpad: "grid grid-cols-3 gap-1 tablet:hidden",
  dpadBtn:
    "w-12 h-12 flex items-center justify-center border border-border bg-card/80 text-text-secondary active:border-accent/50 active:text-accent transition-colors",
  dpadEmpty: "w-12 h-12",
};
