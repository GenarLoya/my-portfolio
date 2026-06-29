const COLORS = [
  "rgba(55,138,221,0.15)",
  "rgba(226,75,74,0.15)",
  "rgba(99,153,34,0.15)",
  "rgba(239,159,39,0.15)",
  "rgba(127,119,221,0.15)",
];

const CELL_SIZE = 48;
const COLS = 60;

const css = `
.ghg-wrap {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background-color: #09090b;
}

.ghg-grid {
  display: grid;
  grid-template-columns: repeat(${COLS}, ${CELL_SIZE}px);
  gap: 1px;
  background-color: rgba(63,63,70,0.5);
}

.ghg-cell {
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  background: #131313;
  transition: background 0.15s ease;
}

`;

export default function GridBackground({ className = "" }) {
  const ROWS = 50;
  const total = COLS * ROWS;
  const PROB_COLOR = 0.05;

  const cells = Array.from({ length: total }, (_, i) => {
    const color =
      Math.random() < PROB_COLOR
        ? COLORS[Math.floor(Math.random() * COLORS.length)]
        : null;
    const style = color ? `background:${color}` : undefined;
    return <div key={i} class="ghg-cell" style={style} />;
  });

  return (
    <>
      <style>{css}</style>
      <div class={`fixed top-0 left-0 ghg-wrap ${className}`}>
        <div class="ghg-grid">{cells}</div>
      </div>
    </>
  );
}
