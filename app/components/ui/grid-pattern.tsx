import { useEffect, useState } from "react";


// interface GridPatternProps {
//   width?: number;
//   height?: number;
//   x?: number;
//   y?: number;
//   squares?: Array<[x: number, y: number]>;
//   strokeDasharray?: string;
//   className?: string;
//   [key: string]: unknown;
// }

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const [patternId, setPatternId] = useState<string | null>(null);

  useEffect(() => {
    setPatternId(`pattern-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  if (!patternId) return null;

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, i: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${i}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default GridPattern;
