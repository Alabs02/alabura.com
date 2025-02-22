"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  Highlight,
  NumberTicker,
  ShootingStars,
  StarsBackground,
  AuroraBackground,
  ContactPanel,
  RainbowButton,
  SimpleTypingChatbot
} from "@/components/ui";

// CONSTANTS
import {
  GlobalCollaboration,
  HeroSubContent,
  HeroSubHeadingCopyFirst,
  HeroSubHeadingCopySecond,
  ImagePath,
  Intro,
  Perks,
  ProjectsDelivered,
  resumeHref
} from "@/constants";
import { FolderOpenDot, ScanEye } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [canBounce, setCanBounce] = useState<boolean>(true);

  return (
    <>
      <motion.div className="section h-auto grid grid-cols-12 lg:gap-6 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="col-span-12 lg:col-span-12 flex flex-col gap-y-6 xl:gap-y-12 2xl:gap-y-14">
          <motion.h1 className="text-3xl xl:text-5xl 2xl:text-[56px] text-pretty tracking-normal shadow-sm font-extrabold font-bricolage h-28 md:h-auto">
            <motion.span className="bg-gradient-to-b from-primary-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent !leading-relaxed">
              {Intro}
            </motion.span>
          </motion.h1>

          <motion.div className="flex flex-col gap-y-6 xl:gap-y-9">
            <motion.h2 className="text-2xl xl:text-4xl 2xl:text-[40px] text-balance font-extrabold font-bricolage bg-gradient-to-r from-primary-50 via-indigo-50 to-purple-50 bg-clip-text text-transparent">
              <span>{HeroSubHeadingCopyFirst}</span>{" "}
              <br className="md:hidden" />
              <Highlight className="rounded-2xl rounded-tl-sm rounded-br-sm text-zinc-50">
                {HeroSubHeadingCopySecond}
              </Highlight>
            </motion.h2>

            <motion.div className="flex items-end justify-between w-full">
              <motion.p className="text-base xl:text-lg 2xl:text-xl xl:!leading-9 2xl:!leading-relaxed text-pretty font-normal tracking-wide text-zinc-50 w-full xl:max-w-[62%] 2xl:max-w-[69%] font-poppins">
                {HeroSubContent}
              </motion.p>

              <Link
                aria-label="Go to requestion a consultation section"
                href={"/#request-consultation"}
                passHref
              >
                <motion.button
                  aria-label="Scroll Down"
                  onMouseEnter={() => setCanBounce(false)}
                  onMouseLeave={() => setCanBounce(true)}
                  className="relative lg:flex h-16 w-12 items-end hidden 2xl:hidden"
                  animate={
                    canBounce
                      ? {
                          y: [0, -10, 0]
                        }
                      : { y: [0, 0, 0] }
                  }
                  transition={
                    canBounce
                      ? {
                          delay: 1,
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }
                      : { duration: 1 }
                  }
                >
                  <Image
                    src={ImagePath.ARROW_DOWN_WHITE}
                    alt={""}
                    fill
                    priority
                  />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div className="flex flex-col md:flex-row  md:items-center gap-5 w-full">
              <Link href={"/#projects"} aria-label="See my work" passHref>
                <RainbowButton
                  aria-label="See my work"
                  type="button"
                  className={cn(
                    "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-medium !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                  )}
                >
                  <span>{"see my work"}</span>
                  <FolderOpenDot />
                </RainbowButton>
              </Link>

              <Link
                href={resumeHref}
                target={"_blank"}
                aria-label="Preview My Resume"
                passHref
              >
                <RainbowButton
                  type="button"
                  aria-label="Preview My Resume"
                  className="inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] font-poppins !font-medium"
                >
                  <span>{"Preview Resume"}</span>
                  <ScanEye />
                </RainbowButton>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-row flex-wrap xl:flex-nowrap items-start lg:items-center gap-x-2 lg:gap-x-0 gap-y-2 lg:gap-y-0 lg:justify-between w-full xl:w-[75%] 2xl:w-[70%] md:mt-6 2xl:mt-8">
            <motion.div className="flex flex-col gap-y-4 w-[calc(50%-4px)] lg:!w-auto overflow-hidden">
              <motion.div className="relative size-8 md:size-12 overflow-hidden p-px rounded">
                <Image src={ProjectsDelivered.src} alt={""} fill priority />
              </motion.div>

              <motion.div className="flex flex-col gap-y-2 w-full min-h-12 max-h-20">
                <motion.h3 className="text-base xl:text-lg text-zinc-50 tracking-wide font-bricolage font-bold">
                  <NumberTicker
                    value={ProjectsDelivered.stat}
                    delay={1}
                    className="text-base xl:text-lg text-zinc-50 font-bricolage"
                  />
                  {"+"} {ProjectsDelivered.heading}
                </motion.h3>
                {/* <motion.p className="text-xs md:text-sm xl:max-w-[16rem] 2xl:max-w-[18rem] font-poppins tracking-wide text-zinc-50/80">
                  {ProjectsDelivered.content}
                </motion.p> */}
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col gap-y-4 w-[calc(50%-4px)] lg:!w-auto overflow-hidden">
              <motion.div className="relative size-8 md:size-12 overflow-hidden p-px rounded">
                <Image src={Perks.src} alt={""} fill priority />
              </motion.div>

              <motion.div className="flex flex-col gap-y-2 w-full min-h-12 max-h-20">
                <motion.h3 className="text-base xl:text-lg text-zinc-50 tracking-wide font-bricolage font-bold">
                  {Perks.heading}
                </motion.h3>
                {/* <motion.p className="text-xs md:text-sm xl:max-w-[16rem] 2xl:max-w-[18rem] font-poppins tracking-wide text-zinc-50/80">
                  {Perks.content}
                </motion.p> */}
              </motion.div>
            </motion.div>

            <motion.div className="flex flex-col gap-y-4 w-[50%] lg:!w-auto overflow-hidden">
              <motion.div className="relative size-8 md:size-12 overflow-hidden p-px rounded">
                <Image src={GlobalCollaboration.src} alt={""} fill priority />
              </motion.div>

              <motion.div className="flex flex-col gap-y-2 w-full min-h-12 max-h-20">
                <motion.h3 className="text-base xl:text-lg text-zinc-50 tracking-wide font-bricolage font-bold">
                  {GlobalCollaboration.heading}
                </motion.h3>
                {/* <motion.p className="text-xs md:text-sm xl:max-w-[16rem] 2xl:max-w-[18rem] font-poppins tracking-wide text-zinc-50/80">
                  {GlobalCollaboration.content}
                </motion.p> */}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="-mt-4 md:-mt-8 flex flex-col lg:flex-row lg:items-center items-start space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-6">
            <ContactPanel
              icon={"icon-email"}
              heading={"Email"}
              subheading={"usmanunfolds@alabura.com"}
              clipBoardText={"usmanunfolds@alabura.com"}
              className="w-full lg:w-auto"
            />

            <ContactPanel
              icon={"icon-phone-call"}
              heading={"Contact"}
              subheading={"+234 902 766 1950"}
              clipBoardText={"+2349027661950"}
              className="w-full lg:w-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="absolute z-[3000] right-[15%] 2xl:top-[70%] 2xl:-translate-y-[70%] hidden 2xl:block transition-all duration-200">
        <Link
          href={"/#request-consultation"}
          aria-label="Go to request a consulation section"
          passHref
        >
          <motion.button
            aria-label="Scroll Down"
            onMouseEnter={() => setCanBounce(false)}
            onMouseLeave={() => setCanBounce(true)}
            className="relative 2xl:flex h-16 w-12 items-end hidden transition-all duration-300"
            animate={
              canBounce
                ? {
                    y: [0, -10, 0]
                  }
                : { y: [0, 0, 0] }
            }
            transition={
              canBounce
                ? {
                    type: "tween",
                    delay: 1,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                : { duration: 1, type: "tween" }
            }
          >
            <Image src={ImagePath.ARROW_DOWN_WHITE} alt={""} fill priority />
          </motion.button>
        </Link>
      </motion.div>

      <SimpleTypingChatbot />

      <ShootingStars
        className="z-[1000]"
        starColor="#9E00FF"
        trailColor="#3d91e6"
      />

      <StarsBackground className="z-[1000] top-[-100px]" />

      <motion.div className="absolute top-[-98px] right-0 h-full w-[70%] 2xl:w-[60%] z-[500] hidden md:block">
        <AuroraBackground>
          <></>
        </AuroraBackground>
      </motion.div>
    </>
  );
};

export { Hero };
