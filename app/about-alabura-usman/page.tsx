import { HeadingChip } from "@/components/ui";
import { ImagePath } from "@/constants";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import { Wrapper } from "@/wrapper";
import React, { useId } from "react";
import Image from "next/image";

const AboutAlaburaUsman = () => {
  const patterns = [
    [17, 1],
    [16, 3],
    [13, 5],
    [10, 6],
    [9, 7],
  ];
  
  return (
    <Wrapper footer="!top-0">
      <header className="w-full min-h-screen flex flex-col items-center relative bg-gradient-to-b from-background to-background">
        <section className="section relative h-full gap-y-10 py-10 xl:py-12 2xl:py-16 mt-[95px] z-[2000]">
          <div className="w-full flex flex-col gap-y-4 items-start">
            <HeadingChip>Bio</HeadingChip>

            <h3 className="text-4xl lg:text-5xl font-bricolage font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
              Alabura Usman
              </h3>

            {/* <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-ful max-w-[70%] mt-2">
            </p> */}
          </div>
        </section>

        <div className="grid grid-cols-1 absolute h-[40%] w-[40%] overflow-hidden -top-0 -left-0 z-[500]">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            squares={patterns}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
        </div>

        <div className="grid grid-cols-1 absolute h-[40%] w-[30%] overflow-hidden -top-10 -right-10 z-[500]">
          <div className="w-full relative h-full grid">
            <Image
              src={ImagePath.ILLUS_LINE_TOP_PROJECT}
              alt={""}
              fill
              priority
              draggable={false}
              className="size-full opacity-90"
            />
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

const GridPattern = ({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: UI.GridPatternProps) => {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-zinc-400/25 stroke-zinc-400/25",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
};

GridPattern.displayName = "GridPattern";
AboutAlaburaUsman.displayName = "AboutAlaburaUsman";
export default AboutAlaburaUsman;
