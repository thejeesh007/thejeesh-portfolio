"use client";

const nodes = [
  { x: 60, y: 80 },
  { x: 180, y: 40 },
  { x: 300, y: 110 },
  { x: 420, y: 50 },
  { x: 540, y: 130 },
  { x: 660, y: 70 },
  { x: 150, y: 200 },
  { x: 380, y: 210 },
  { x: 580, y: 220 },
  { x: 250, y: 280 },
  { x: 480, y: 300 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [0, 6],
  [1, 6],
  [2, 7],
  [3, 7],
  [4, 8],
  [5, 8],
  [6, 9],
  [7, 9],
  [7, 10],
  [8, 10],
];

export default function NodeGraph() {
  return (
    <svg
      viewBox="0 0 700 340"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <line
            key={`${a}-${b}`}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="#24344f"
            strokeWidth="1"
            className="schematic-line"
            style={{ animationDelay: `${i * 90}ms` }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r={i % 3 === 0 ? 4 : 2.6}
            fill={i % 4 === 0 ? "#ffb020" : "#5eead4"}
            className="schematic-node"
            style={{ animationDelay: `${i * 220}ms` }}
          />
        </g>
      ))}
    </svg>
  );
}
