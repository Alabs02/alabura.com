"use client";

import React from "react";
import { motion } from "motion/react";
import { GridPattern, HeadingChip } from "@/components/ui";

import { UI } from "@/models";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { ImagePath } from "@/constants";
import Image from "next/image";

const Recommendations = () => {
  const endorsements = [
    {
      id: nanoid(),
      name: "Emmanuel Mesole",
      position: "CTO of Liveable NG",
      imageSrc: ImagePath.MESH_PORTRAITE,
      className: cn("xl:translate-y-[6rem]"),
      comment: () => (
        <div className="flex flex-col gap-y-2">
          <p className="text-inherit block">
            I am pleased to recommend Usman, a talented and dedicated frontend
            engineer I worked with for 6 months.
          </p>
          <p className="text-inherit block">
            Usman consistently delivered high-quality, visually appealing
            interfaces while writing clean, efficient code. His ability to
            collaborate with designers, project managers, and developers stood
            out, as did his excellent communication skills and readiness to
            tackle new challenges.
          </p>
          <p className="text-inherit block">
            He would be a valuable asset to any team.
          </p>
        </div>
      )
    },
    {
      id: nanoid(),
      name: "Amb. Chris Iyama",
      position: "Executive Direction of CYPA Africa",
      imageSrc: ImagePath.CHRIS_IYAMA_PORTRAITE,
      className: cn(""),
      comment: () => (
        <div className="flex flex-col gap-y-2">
          <p className="text-inherit block">
            When our official site went down unnoticed, Usman took the
            initiative to create a new version within just three days a version
            far superior to the previous one. The interface is beautiful and
            remains the best-looking site we’ve ever had. His communication
            skills are equally impressive; he has a rare ability to explain
            technical concepts in simple, relatable terms.
          </p>
          <p className="text-inherit block">
            I highly recommend Usman to any organization, he is a fantastic
            engineer and a true problem-solver.
          </p>
        </div>
      )
    },
    {
      id: nanoid(),
      name: "Uche Nick",
      position: "Founder of Onecopy Business AI",
      imageSrc: ImagePath.UCHE_NICK_PORTRAITE,
      className: cn("xl:translate-y-[6rem]"),
      comment: () => (
        <div className="flex flex-col gap-y-2">
          <p className="text-inherit block">
            Usman is an exceptional hands-on engineer. I was particularly
            impressed by his ability to manage projects effectively, implement
            impactful changes that significantly improved the user experience,
            and deliver pixel-perfect work with meticulous attention to detail.
            His collaboration and communication skills stood out, as he
            consistently ran ideas and strategies by me before implementation
            and ensured the entire team was aligned throughout the process.
          </p>
          <p className="text-inherit block">
            I am proud to endorse Usman for both Team Lead and Frontend
            Engineering roles.
          </p>
        </div>
      )
    },
    {
      id: nanoid(),
      name: "Oluwasegun Ige",
      position: "Tech Lead at BudgIT",
      imageSrc: ImagePath.SEGUN_PORTRAITE,
      className: cn(""),
      comment: () => (
        <div className="flex flex-col gap-y-2">
          <p className="text-inherit block">
            I brought Usman into an ongoing project, and his ability to adapt
            and start delivering value almost immediately with little to no
            onboarding was truly remarkable. As the PM on the project, I could
            immediately feel his impact. His communication skills were
            excellent, and he quickly established himself as a reliable
            contributor to the team.
          </p>
          <p className="text-inherit block">
            Usman is a great team player, and I wholeheartedly endorse him as a
            skilled Senior Frontend Engineer.
          </p>
        </div>
      )
    }
  ];

  return (
    <>
      <motion.div className="section gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <div className="grid grid-cols-12 gap-y-8 md:gap-8 lg:gap-12 xl:pb-[6rem]">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex flex-col items-center lg:items-start justify-start transform-gpu will-change-transform lg:translate-y-60">
              <div className="inline-block">
                <HeadingChip>ENDORSEMENTS</HeadingChip>
              </div>

              <motion.h4 className="text-2xl lg:text-3xl xl:text-4xl text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 font-extrabold font-bricolage tracking-wide my-6">
                Voices of Impact
              </motion.h4>

              <motion.h5 className="text-base lg:text-xl text-center lg:text-left text-zinc-50/80 font-poppins font-light">
                Insights from exceptional professionals who&apos;ve experienced
                the value, precision, and dedication I bring to every project.
              </motion.h5>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 overflow-hidden">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-y-8 lg:gap-4 transition-all duration-300 will-change-auto transform-gpu">
              {endorsements.map((item) => (
                <EndorsementCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const EndorsementCard: React.FC<UI.EndorsementCardProps> = ({
  className,
  comment,
  imageSrc,
  name,
  position
}) => {
  return (
    <>
      <motion.div
        className={cn(
          "flex flex-col items-start justify-between min-h-[380px] w-full relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl overflow-hidden transition duration-300 transform-gpu will-change-transform",
          className
        )}
      >
        <Grid size={20} />

        <div className="flex items-center justify-between space-x-2">
          <div className="size-14 rounded-full grid place-items-center p-1.5 bg-zinc-50/20 shadow-inner shadow-zinc-400/70">
            <div className="rounded-full w-full h-full bg-neutral-800 scale-105 relative skew-x-6 will-change-auto overflow-hidden p-px">
              <Image
                src={imageSrc}
                alt={""}
                fill
                loading={"lazy"}
                draggable={false}
                className="size-full -skew-x-6"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start justify-between h-14">
            <span className="font-bricolage font-bold text-lg 2xl:text-xl text-transparent bg-gradient-to-b bg-clip-text from-zinc-50 via-zinc-50 to-zinc-700">
              {name}
            </span>
            <span className="font-bricolage font-thin text-[13px] md:text-[12.5px] 2xl:text-sm text-zinc-50/80">
              {position}
            </span>
          </div>
        </div>

        <div className="flex-1 w-full mt-6 text-neutral-50/90 font-bricolage font-thin text-[14.5px] leading-5 2xl:text-base md:stracking-[0.015em] text-pretty">
          {comment()}
        </div>
      </motion.div>
    </>
  );
};

const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1]
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-900/30 to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay fill-white/10 stroke-white/10"
        />
      </div>
    </div>
  );
};

EndorsementCard.displayName = "EndorsementCard";
Recommendations.displayName = "Recommendations";

export { Recommendations };
