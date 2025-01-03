"use client";

import React, { memo, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeadingChip, WordRotate } from "@/components/ui";
import Image from "next/Image";
import Link from "next/link";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ExternalLink } from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
);

const items = [
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    asset: {
      alt: "",
      src: "/images/martin-baron-unsplash.jpg",
    },
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

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
            life through a blend of applied creativity, ingenuity, grit, and a
            touch of finesse.
          </motion.h4>

          <div className="w-full mt-12">
            <motion.div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {items.map((item, i) => (
                <ProjectCard
                  key={i}
                  asset={item.asset}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const ProjectCard = ({
  className,
  title,
  description,
  header,
  icon,
  asset,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  asset: { src: string; alt: string };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-zinc-950 border border-zinc-200/20 justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl shadow-none border-none bg-gradient-to-br from-neutral-900 to-neutral-800 group/media hover:from-zinc-950/85 hover:to-zinc-950/85 relative overflow-hidden transition-all duration-400">
        <Image
          src={asset.src}
          alt={asset.alt}
          width={100}
          height={100}
          priority
          draggable={false}
          className="size-full object-cover object-center rounded-xl"
        />
        <AnimatePresence mode="wait">
          <motion.div
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.4,
            }}
            className="absolute inset-0 z-[2100] bg-zinc-950/85 grid place-items-center group-hover/media:backdrop-blur-sm origin-left right-full group-hover/media:right-[-2px] transition-all duration-400 delay-75 ease-in-out will-change-transform"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Link href={'/about-alabura-usman'} target="_blank" passHref>
            <motion.button
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: "easeInOut",
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="cursor-pointer bg-zinc-950 no-underline group/media-btn relative py-1.5 px-4 ring-1 ring-secondary-50/15 shadow-2xl shadow-black rounded-full p-px inline-block text-secondary-50 hover:bg-secondary-50 hover:text-zinc-950 transition-all duration-300 will-change-auto"
            >
              <div className="relative flex space-x-2 items-center z-10 rounded-full">
                <h6 className="text-inherit lowercase text-sm lg:text-[15px] font-poppins font-medium tracking-wide">
                  /ui.aceternity.com
                </h6>
                <ExternalLink size={16} />
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-secondary/0 via-secondary/90 to-secondary/0 group-hover/media-btn:from-secondary/0 group-hover/media-btn:via-cyan-500 group-hover/media-btn:to-secondary/0 transition-all duration-500"></span>
            </motion.button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-bricolage font-bold tracking-wide text-zinc-50/80 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs text-neutral-zinc/90">
          {description}
        </div>
      </div>
    </div>
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
