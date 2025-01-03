"use client";

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeadingChip, WordRotate } from "@/components/ui";

const ProjectsHighlight = () => {
  const headingWords = ["Grit", "Ingenuity", "Applied Creativity"];
  const h2 =
    "text-3xl xl:text-4xl text-center text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 font-extrabold font-bricolage tracking-wide";

  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col items-center">
          <HeadingChip>From Concept to Completion</HeadingChip>

          <div className="flex items-center gap-2 mt-12">
            <motion.h2 className={h2}>Visions Realized Through</motion.h2>
            <WordRotate className={h2} words={headingWords} />
          </div>

          <motion.h4 className="text-xl text-center text-zinc-50/90 font-poppins font-normal lg:w-[70%] mt-6">
            Explore a curated collection of projects, where visions have come to
            life through a blend of applied creativity, ingenuity, grit, and
            a touch of finesse.
          </motion.h4>
        </motion.div>
      </motion.div>
    </>
  );
};

const GridHeroPattern = memo(() => {
  const columns = useMemo(
    () => Array.from({ length: 40 }, (_, i) => i + 1),
    []
  );
  const rows = useMemo(() => Array.from({ length: 100 }, (_, i) => i + 1), []);

  return (
    <>
      <div
        className={cn(
          "absolute top-0 w-full h-[50%] z-[500] flex bg-black overflow-hidden",
          "[mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]"
        )}
      >
        {columns.map((col) => (
          <div
            key={`col-${col}`}
            className="grid grid-rows-8 -mt-12 opacity-[0.98]"
          >
            {rows.map((row) => (
              <motion.div
                key={`row-${col}-${row}`}
                className={cn(
                  "inline-block size-12",
                  (row + col) % 2 === 0
                    ? "bg-zinc-900/50"
                    : "border border-zinc-900/50 shadow-[inset_0_0_4px_4px_rgb(0,0,0/0.05)] shadow-zinc-800/50"
                )}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-[50%] w-full z-[600] [background-image:radial-gradient(88%_100%_at_top,rgba(0,0,0,0),rgba(0,0,0,0.90))]"></div>
    </>
  );
});

GridHeroPattern.displayName = "GridHeroPattern";

export { ProjectsHighlight, GridHeroPattern };
