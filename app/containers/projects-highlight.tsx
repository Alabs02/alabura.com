"use client";

import React, { memo, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import kebabCase from "lodash/kebabCase";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  HeadingChip,
  WordRotate,
  RainbowButton,
} from "@/components/ui";

import { ExternalLink, View } from "lucide-react";
import { ImagePath } from "@/constants";

const projects = [
  {
    asset: {
      alt: "",
      src: ImagePath.ONECOPY_AI,
      href: "https://app.onecopy.ai/",
      previewHref: "/app.onecopy.ai",
    },
    category: "AI & Content Creation",
    title: "Onecopy Business AI",
    fullTitle: "Onecopy Business Marketing AI",
    description:
      "An intelligent content generation platform leveraging advanced AI models to create tailored, high-quality copy for businesses and individuals, enhancing productivity and creativity.",
    icon: ImagePath.ONECOPY_AI_LOGO,
  },
  {
    asset: {
      alt: "",
      src: ImagePath.MYLANDLORD_HEAVEN_PAGE,
      href: "https://mylandlordheaven.com/",
      previewHref: "/mylandlordheaven.com",
    },
    category: "PropTech",
    title: "My Landlord Heaven",
    fullTitle: "Elevating Property Ownership Experience",
    description:
      "MyLandlordHeaven offers landlords guaranteed rental income, property upgrade financing, and comprehensive management services, ensuring optimized returns and peace of mind.",
    icon: ImagePath.MYLANDLORD_HEAVEN_LOGO,
  },
  {
    asset: {
      alt: "",
      src: ImagePath.GRADELY_PAGE,
      href: "https://www.gradely.co/",
      previewHref: "/gradely.co",
    },
    category: "EdTech",
    title: "Gradely",
    fullTitle: "Revolutionizing Personalized Education",
    description:
      "A personalized learning platform for primary and secondary students, leveraging adaptive assessments and interactive lessons to close learning gaps and build subject mastery.",
    icon: ImagePath.GRADELY_LOGO,
  },
  {
    asset: {
      alt: "",
      src: ImagePath.PHC_TRACKA,
      href: "https://www.phctracka.org/",
      previewHref: "/phctracka.org",
    },
    category: "Healthcare & Civic Tech",
    title: "PHC Accountability Tracka",
    fullTitle: "Primary Health Care Accountability Tracka",
    description:
      "A community-driven platform empowering citizens to report and monitor the state of primary healthcare centers, providing actionable insights for advocacy and fostering accountability among stakeholders.",
    icon: ImagePath.PHC_LOGO,
  },
  {
    asset: {
      alt: "",
      src: ImagePath.LIVEABLE_PAGE,
      href: "https://www.liveable.ng/",
      previewHref: "/liveable.ng",
    },
    category: "UrbanTech & PropTech",
    title: "Liveable",
    fullTitle: "Transforming Urban Living Spaces",
    description:
      "Liveable is a platform dedicated to enhancing the quality of urban living by providing innovative solutions for sustainable and efficient housing in Nigeria.",
    icon: ImagePath.LIVEABLE_LOGO,
  },
  {
    asset: {
      alt: "",
      src: ImagePath.SSAF_LOGISTICS_PAGE,
      href: "https://www.ssaflogistics.com/",
      previewHref: "/ssaflogistics.com",
    },
    category: "Logistics & Supply Chain",
    title: "SSAF Logistics",
    fullTitle: "Optimizing Logistics Operations via innovation",
    description:
      "SSAF Logistics specializes in transporting project-critical cargo to challenging destinations, ensuring timely and efficient delivery.",
    icon: ImagePath.SSAF_LOGISTICS_LOGO,
  },
  {
    asset: {
      alt: "",
      src: ImagePath.SIMS_PAGE,
      href: "https://sims.plsmoe-gov.ng/",
      previewHref: "/sims.plsmoe-gov.ng",
    },
    category: "EdTech & GovTech",
    title: "SIMS",
    fullTitle: "Revolutionizing Educational Administration in Plateau State",
    description:
      "SIMS, the cloud-based platform of the Plateau State Ministry of Education, streamlines school management by integrating student records, academic progress, and communication tools for efficiency and compliance.",
    icon: ImagePath.SIMS_LOGO,
  },
];

const ProjectsHighlight = () => {
  const headingWords = ["Grit", "Ingenuity", "Applied Creativity"];
  const h2 =
    "text-2xl lg:text-3xl xl:text-4xl text-center text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 font-extrabold font-bricolage tracking-wide";

  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col items-center">
          <HeadingChip>From Concept to Completion</HeadingChip>

          <div className="flex flex-col lg:flex-row items-center lg:gap-2 mt-12">
            <motion.h2 className={h2}>Visions Realized Through</motion.h2>
            <WordRotate className={h2} words={headingWords} />
          </div>

          <motion.h4 className="text-base lg:text-xl text-center text-zinc-50/90 font-poppins font-normal lg:w-[70%] mt-6">
            Explore a curated collection of projects, where visions have come to
            life through a blend of applied creativity, ingenuity, grit, and a
            touch of finesse.
          </motion.h4>

          <div className="w-full mt-12">
            <motion.div className="grid auto-rows-[24rem] md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  index={i}
                  asset={project.asset}
                  title={project.title}
                  fullTitle={project.fullTitle}
                  category={project.category}
                  description={project.description}
                  icon={project.icon}
                  className={i === 0 || i === 3 ? "lg:col-span-2" : ""}
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
  index,
  className,
  title,
  fullTitle,
  category,
  description,
  icon,
  asset,
}: {
  index: number;
  category: string;
  className?: string;
  title?: string;
  fullTitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: string;
  asset: { src: string; alt: string; href: string; previewHref: string };
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 bg-zinc-950 border border-zinc-200/20 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="flex relative w-full mb-4 min-h-[calc(40%-16px+32px)] group-hover/bento:min-h-[calc(40%-16px)] shadow-none bg-gradient-to-br from-neutral-900 to-neutral-800 group/media hover:from-zinc-950/85 hover:to-zinc-950/85 overflow-hidden transition-all duration-300 !border-none"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority
          draggable={false}
          className="size-full object-cover object-top rounded-xl"
        />
        <AnimatePresence mode="wait">
          <motion.div
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.4,
            }}
            className="absolute inset-0 z-[2100] bg-zinc-950/85 grid place-items-center group-hover/media:backdrop-blur-sm origin-left right-full group-hover/media:right-[-2px] transition-all duration-400 delay-75 ease-in-out will-change-transform"
          >
            <Link href={asset.href} target="_blank" passHref>
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
                className="cursor-pointer bg-zinc-950 no-underline group/media-btn relative py-1.5 px-4 ring-1 ring-cyan-50/15 shadow-2xl shadow-black rounded-full p-px inline-block text-cyan-50 hover:bg-cyan-50 hover:text-zinc-950 transition-all duration-300 will-change-auto"
              >
                <div className="relative flex space-x-2 items-center z-10 rounded-full">
                  <h6 className="text-inherit lowercase text-sm lg:text-[15px] font-poppins font-medium tracking-wide">
                    {asset.previewHref}
                  </h6>
                  <ExternalLink size={16} />
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-500/0 via-cyan-500/90 to-cyan-500/0 group-hover/media-btn:from-cyan-500/0 group-hover/media-btn:via-cyan-500/80 group-hover/media-btn:to-cyan-500/0 transition-all duration-500"></span>
              </motion.button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="flex flex-col justify-between border-none items-start transition-all duration-300 relative will-change-transform min-h-[calc(60%-32px)] group-hover/bento:min-h-[60%] overflow-hidden">
        <div className="flex flex-col items-start space-y-2 w-full">
          <div className="flex items-center justify-between w-full">
            {icon ? (
              <div className="size-6 relative overflow-hidden p-px">
                <Image
                  fill
                  priority
                  src={icon}
                  alt={""}
                  draggable={false}
                  className="size-full object-contain object-center"
                />
              </div>
            ) : null}

            <motion.div
              className={cn(
                "ring-1 bg-zinc-950/85 no-underline cursor-default group relative shadow-2xl shadow-black rounded-full p-px inline-block",
                {
                  "ring-indigo-50/10": index === 0,
                  "ring-slate-50/10": index === 1,
                  "ring-cyan-50/10": index === 2,
                  "ring-purple-50/10": index === 3,
                  "ring-blue-50/10": index === 4,
                  "ring-red-50/10": index === 5,
                  "ring-[rgba(238,251,236,0.1)]": index === 6,
                }
              )}
            >
              <div
                className={cn(
                  "relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-3",
                  {
                    "bg-indigo-950/20 text-indigo-50/90": index === 0,
                    "bg-slate-950/20 text-slate-50/90": index === 1,
                    "bg-cyan-950/20 text-cyan-50/90": index === 2,
                    "bg-purple-950/20 text-purple-50/90": index === 3,
                    "bg-blue-950/20 text-blue-50/90": index === 4,
                    "bg-red-950/20 text-red-50/90": index === 5,
                    "bg-[rgba(18,44,13,0.2)] text-[rgba(238,251,236,0.9)]":
                      index === 6,
                  }
                )}
              >
                <span className="tracking-wide text-sm font-bricolage font-light">
                  {category}
                </span>
              </div>

              <span
                className={cn(
                  "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 to-white/0 transition-opacity duration-500",
                  {
                    "via-indigo-500/90": index === 0,
                    "via-slate-500/90": index === 1,
                    "via-cyan-500/90": index === 2,
                    "via-purple-500/90": index === 3,
                    "via-blue-700/90": index === 4,
                    "via-error/90": index === 5,
                    "via-[rgba(90,218,64,0.9)]": index === 6,
                  }
                )}
              ></span>
            </motion.div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="font-bricolage font-bold text-base lg:text-lg tracking-wide text-zinc-50/75">
                  {title}
                </div>
              </TooltipTrigger>
              <TooltipContent className="z-[2500] bg-zinc-900 text-zinc-50/70 font-inter font-light tracking-wide">
                <p>{fullTitle}</p>
                <span
                  className={cn(
                    "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-secondary/0 via-secondary/90 to-secondary/0 transition-opacity duration-500"
                  )}
                ></span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="font-poopins md:tracking-wide font-normal text-sm text-pretty text-zinc-50/85">
            {description}
          </div>
        </div>

        <Link href={`/project/${kebabCase(title)}`} className="block w-full transition-all duration-300 will-change-transform translate-y-12 group-hover/bento:translate-y-0 delay-75" passHref>
          <RainbowButton className="w-full !text-xs text uppercase font-poppins text-zinc-50/80 space-x-2 rounded-full !py-0.5 px-2 h-8 mt-2">
            <motion.span className="!text-xs">See Full Overview</motion.span>
            <View size={17} />
          </RainbowButton>
        </Link>
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
          "absolute top-0 w-full h-[60%] z-[500] flex bg-black overflow-hidden",
          "[mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]"
        )}
      >
        {columns.map((col) => (
          <div
            key={`col-${col}`}
            className="grid grid-rows-8 -mt-12"
          >
            {rows.map((row) => (
              <motion.div
                key={`row-${col}-${row}`}
                className={cn(
                  "inline-block size-12",
                  (row + col) % 2 === 0
                    ? "bg-zinc-900/80"
                    : "border border-zinc-900/80 shadow-[inset_0_0_4px_4px_rgb(0,0,0/0.2)] shadow-zinc-800/50"
                )}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-[50%] w-full z-[600] [background-image:radial-gradient(88%_100%_at_top,rgba(0,0,0,0),rgba(0,0,0,0.05))]"></div>
    </>
  );
});

GridHeroPattern.displayName = "GridHeroPattern";

export { ProjectsHighlight, GridHeroPattern };
