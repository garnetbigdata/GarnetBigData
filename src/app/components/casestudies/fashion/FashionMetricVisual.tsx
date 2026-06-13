"use client";

type MetricChart =
  | "channel-bars"
  | "revenue-stack"
  | "product-rank"
  | "aov-gauge"
  | "aov-tiles"
  | "aging-bars"
  | "tries-funnel"
  | "margin-donut"
  | "stock-progress"
  | "clv-pyramid"
  | "repeat-cohort"
  | "risk-matrix"
  | "eid-capacity"
  | "season-heatmap"
  | "trend-score";

interface FashionMetricVisualProps {
  chart: MetricChart;
  color: string;
}

const FashionMetricVisual = ({ chart, color }: FashionMetricVisualProps) => {
  const softColor = `${color}22`;
  const mutedColor = "#94a3b8";

  switch (chart) {
    case "channel-bars":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[
            [16, 26, 20],
            [42, 12, 34],
            [68, 18, 28],
            [94, 32, 14],
          ].map(([x, y, height], index) => (
            <g key={x}>
              <rect x={x} y="10" width="16" height="36" rx="4" fill={softColor} />
              <rect
                x={x}
                y={y}
                width="16"
                height={height}
                rx="4"
                fill={color}
                opacity={0.55 + index * 0.12}
              />
              <circle cx={x + 8} cy="50" r="2" fill={mutedColor} />
            </g>
          ))}
          <path d="M10 46 H112" stroke="#cbd5e1" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "revenue-stack":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[
            [14, 18, 11, 10, 7],
            [38, 12, 14, 12, 8],
            [62, 8, 16, 15, 9],
            [86, 14, 13, 12, 9],
          ].map(([x, y, direct, retail, wholesale], index) => (
            <g key={x}>
              <rect x={x} y={y} width="16" height={direct} rx="3" fill={color} opacity="0.95" />
              <rect x={x} y={y + direct} width="16" height={retail} rx="3" fill={color} opacity="0.55" />
              <rect x={x} y={y + direct + retail} width="16" height={wholesale} rx="3" fill={softColor} />
              <rect x={x + 5} y="48" width="6" height="3" rx="1.5" fill={index === 2 ? color : mutedColor} />
            </g>
          ))}
          <path d="M10 46 H110" stroke="#cbd5e1" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "product-rank":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <rect x="12" y="10" width="50" height="36" rx="5" fill={color} opacity="0.95" />
          <rect x="66" y="10" width="20" height="17" rx="4" fill={color} opacity="0.62" />
          <rect x="90" y="10" width="18" height="17" rx="4" fill={softColor} />
          <rect x="66" y="31" width="42" height="15" rx="4" fill={color} opacity="0.35" />
          <circle cx="20" cy="18" r="3" fill="#fff" opacity="0.75" />
          <circle cx="74" cy="18" r="2.5" fill="#fff" opacity="0.65" />
        </svg>
      );
    case "aov-gauge":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <rect x="18" y="28" width="84" height="10" rx="5" fill={softColor} />
          <rect x="18" y="28" width="58" height="10" rx="5" fill={color} />
          <path d="M78 22 V44" stroke="#475569" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="2" />
          {[18, 46, 74, 102].map((x) => (
            <circle key={x} cx={x} cy="44" r="2" fill={mutedColor} />
          ))}
          <circle cx="76" cy="33" r="5" fill="#fff" stroke={color} strokeWidth="3" />
        </svg>
      );
    case "aov-tiles":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[14, 28, 42, 56, 70, 84, 98].map((x, index) => (
            <rect
              key={x}
              x={x}
              y={34 - [4, 10, 18, 26, 20, 12, 6][index]}
              width="9"
              height={[4, 10, 18, 26, 20, 12, 6][index]}
              rx="3"
              fill={index === 3 ? color : softColor}
            />
          ))}
          <path d="M12 42 H110" stroke="#cbd5e1" strokeLinecap="round" strokeWidth="2" />
          <circle cx="60" cy="16" r="4" fill={color} />
        </svg>
      );
    case "aging-bars":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[14, 36, 58, 80, 102].map((x, index) => (
            <g key={x}>
              <rect x={x} y={35 - index * 5} width="12" height={9 + index * 5} rx="4" fill={index >= 3 ? color : softColor} />
              <circle cx={x + 6} cy="49" r="1.8" fill={index >= 3 ? color : mutedColor} />
            </g>
          ))}
          <path d="M10 44 H112" stroke="#cbd5e1" strokeLinecap="round" strokeWidth="2" />
        </svg>
      );
    case "tries-funnel":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <rect x="18" y="8" width="84" height="10" rx="5" fill={color} opacity="0.35" />
          <rect x="30" y="22" width="60" height="10" rx="5" fill={color} opacity="0.62" />
          <rect x="44" y="36" width="32" height="10" rx="5" fill={color} />
          <circle cx="106" cy="13" r="3" fill={softColor} />
          <circle cx="94" cy="27" r="3" fill={softColor} />
          <circle cx="80" cy="41" r="3" fill={color} />
        </svg>
      );
    case "margin-donut":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <rect x="14" y="18" width="14" height="24" rx="4" fill={color} opacity="0.38" />
          <rect x="36" y="12" width="14" height="30" rx="4" fill={color} opacity="0.68" />
          <rect x="58" y="24" width="14" height="18" rx="4" fill={softColor} />
          <rect x="80" y="10" width="14" height="32" rx="4" fill={color} />
          <path d="M10 42 H102" stroke="#cbd5e1" strokeLinecap="round" strokeWidth="2" />
          <circle cx="106" cy="15" r="5" fill="#fff" stroke={color} strokeWidth="3" />
        </svg>
      );
    case "stock-progress":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <rect x="14" y="18" width="92" height="13" rx="6.5" fill={softColor} />
          <rect x="14" y="18" width="66" height="13" rx="6.5" fill={color} opacity="0.92" />
          <path d="M88 12 V38" stroke="#475569" strokeLinecap="round" strokeWidth="3" />
          <rect x="14" y="38" width="32" height="6" rx="3" fill={color} opacity="0.35" />
          <rect x="50" y="38" width="24" height="6" rx="3" fill={color} opacity="0.62" />
          <rect x="78" y="38" width="28" height="6" rx="3" fill={softColor} />
        </svg>
      );
    case "clv-pyramid":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <rect x="20" y="40" width="80" height="7" rx="3.5" fill={softColor} />
          <rect x="30" y="29" width="60" height="7" rx="3.5" fill={color} opacity="0.38" />
          <rect x="42" y="18" width="36" height="7" rx="3.5" fill={color} opacity="0.68" />
          <rect x="53" y="7" width="14" height="7" rx="3.5" fill={color} />
          <circle cx="104" cy="10.5" r="3.5" fill={color} />
          <circle cx="104" cy="43.5" r="3.5" fill={softColor} />
        </svg>
      );
    case "repeat-cohort":
      return (
        <svg className="mt-3 h-12 w-full" viewBox="0 0 120 48" aria-hidden="true">
          {[10, 21, 32].map((y, row) => (
            <g key={y}>
              {[18, 32, 46, 60, 74, 88].map((x, column) => {
                const returning = column <= 4 - row;
                return (
                  <rect
                    key={`${row}-${column}`}
                    x={x}
                    y={y}
                    width="10"
                    height="7"
                    rx="3"
                    fill={returning ? color : softColor}
                    opacity={returning ? 0.95 - column * 0.08 : 1}
                  />
                );
              })}
            </g>
          ))}
          <circle cx="104" cy="13.5" r="4" fill={color} />
          <circle cx="104" cy="24.5" r="4" fill={softColor} />
          <circle cx="104" cy="35.5" r="4" fill={softColor} />
        </svg>
      );
    case "risk-matrix":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          <path d="M24 8 V44 H104" stroke="#cbd5e1" strokeLinecap="round" strokeWidth="2" />
          {[0, 1, 2].map((row) =>
            [0, 1, 2].map((column) => {
              const hot = row + column >= 3;
              return (
                <rect
                  key={`${row}-${column}`}
                  x={34 + column * 22}
                  y={12 + row * 11}
                  width="16"
                  height="8"
                  rx="3"
                  fill={hot ? color : softColor}
                  opacity={hot ? 0.95 : 1}
                />
              );
            }),
          )}
          <circle cx="92" cy="14" r="4" fill="#fff" stroke={color} strokeWidth="2.5" />
        </svg>
      );
    case "eid-capacity":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[14, 32, 50, 68, 86].map((x, index) => (
            <g key={x}>
              <rect x={x} y="12" width="12" height="32" rx="4" fill={softColor} />
              <rect
                x={x}
                y={34 - index * 4}
                width="12"
                height={10 + index * 4}
                rx="4"
                fill={color}
                opacity={0.48 + index * 0.1}
              />
            </g>
          ))}
          <path d="M10 28 H106" stroke="#475569" strokeDasharray="3 3" strokeLinecap="round" strokeWidth="2" />
          <circle cx="106" cy="28" r="4" fill={color} />
        </svg>
      );
    case "season-heatmap":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[0, 1, 2].map((row) =>
            [0, 1, 2, 3, 4].map((column) => {
              const intensity = [0.18, 0.34, 0.52, 0.78, 1][
                (row * 2 + column) % 5
              ];
              return (
                <rect
                  key={`${row}-${column}`}
                  x={16 + column * 18}
                  y={10 + row * 12}
                  width="13"
                  height="9"
                  rx="3"
                  fill={color}
                  opacity={intensity}
                />
              );
            }),
          )}
          <rect x="16" y="48" width="31" height="4" rx="2" fill={softColor} />
          <rect x="50" y="48" width="22" height="4" rx="2" fill={color} opacity="0.52" />
          <rect x="75" y="48" width="27" height="4" rx="2" fill={color} />
        </svg>
      );
    case "trend-score":
      return (
        <svg
          className="mt-3 h-14 w-full"
          viewBox="0 0 120 56"
          aria-hidden="true"
        >
          {[18, 34, 50, 66, 82, 98].map((x, index) => (
            <rect
              key={x}
              x={x}
              y={38 - [8, 12, 18, 24, 30, 22][index]}
              width="10"
              height={[8, 12, 18, 24, 30, 22][index]}
              rx="3"
              fill={index >= 3 ? color : softColor}
            />
          ))}
          <rect x="14" y="42" width="96" height="4" rx="2" fill="#cbd5e1" />
          <circle cx="86" cy="10" r="5" fill="#fff" stroke={color} strokeWidth="3" />
        </svg>
      );
    default:
      return null;
  }
};

export type { MetricChart };
export default FashionMetricVisual;
