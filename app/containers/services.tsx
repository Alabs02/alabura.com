"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  AnimatedBeam,
  FineTuningSkeleton,
  BackendSkeleton,
  CardSkeletonContainer,
  Circle,
  FeatureCard,
  FeatureCardDescription,
  FeatureCardTitle,
  FrontendSkeleton,
  HeadingChip,
  ChatbotSkeleton,
  RainbowButton,
  SEOIcons,
  AIPoweredSkeleton,
  AutonomousSkeleton
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import { ArrowRight, FolderOpenDot } from "lucide-react";
import Link from "next/link";
import { calURL } from "@/constants";

const Services = () => {
  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col xl:flex-row xl:justify-between items-center gap-4 mb-8 xl:mb-12">
          <motion.div className="xl:w-[75%] flex flex-col items-center md:items-start mb-4 md:mb-0">
            <HeadingChip>Core Services</HeadingChip>

            <motion.h4 className="text-3xl xl:text-4xl text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 text-center lg:text-left font-bricolage font-bold tracking-wide mt-4 xl:mt-12">
              What I Do Best
            </motion.h4>

            <motion.h5 className="text-xl text-center lg:text-left text-zinc-50 font-poppins font-normal mt-4 xl:mt-6 md:max-w-[80%]">
              Transforming ideas into AI-powered solutions that help businesses
              thrive, automate, and scale.
            </motion.h5>
          </motion.div>

          <Link href={"/#technologies"} aria-label="My Tech Stack" passHref>
            <RainbowButton
              arial-label="My Tech Stack"
              className={cn(
                "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-medium !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
              )}
            >
              <span>{"My Tech Stack"}</span>
              <ArrowRight className="group-hover:rotate-45 transition-all duration-300" />
            </RainbowButton>
          </Link>
        </motion.div>

        <motion.div className="w-full grid grid-cols-12 grid-rows-[auto] gap-4 transition-all duration-300">
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"AI-Powered Web & Mobile Apps"}
              subheading={
                "Design and build intelligent applications that personalize user experiences and automate complex tasks."
              }
              className={""}
              Skeleton={AIPoweredSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"Advanced AI Chatbots"}
              subheading={
                "Develop human-like chatbots that enhance customer engagement and support with precise, responses."
              }
              className={""}
              Skeleton={ChatbotSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"Fine-Tuning Large Language Models"}
              subheading={
                "Customize pre-trained LLMs for specific business needs, ensuring accurate, context-aware language processing."
              }
              className={""}
              Skeleton={FineTuningSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"AI-Enhanced Frontend Development"}
              subheading={
                "Build modern, dynamic interfaces that adapt to user behavior, improving usability and engagement."
              }
              className={""}
              Skeleton={FrontendSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"Autonomous AI Agents"}
              subheading={
                "Create AI-driven agents that execute tasks, make decisions, and integrate with systems—boosting efficiency and automation."
              }
              className={""}
              Skeleton={AutonomousSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"AI-Integrated Backend Systems"}
              subheading={
                "Develop scalable backend solutions with built-in AI for intelligent data processing and real-time analytics."
              }
              className={""}
              Skeleton={BackendSkeleton}
            />
          </div>

          <div className="col-span-12 flex flex-col md:flex-row md:justify-center gap-5 pt-5">
            <Link
              aria-label="See My Work in Action"
              href={"/#projects"}
              passHref
            >
              <RainbowButton
                type="button"
                aria-label="See My Work in Action"
                className={cn(
                  "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] font-poppins !font-normal"
                )}
              >
                <span>{"See My Work in Action"}</span>
                <FolderOpenDot
                  className="transition-all duration-300"
                  size={20}
                />
              </RainbowButton>
            </Link>

            <Link
              aria-label="Book a call"
              aria-description="Book a call, let's talk about your project"
              href={calURL}
              target="_blank"
              passHref
            >
              <RainbowButton
                aria-label="Book a Call"
                className={cn(
                  "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-normal !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                )}
              >
                <span>{"Book a Call"}</span>
                <ArrowRight className="-rotate-45 transition-all duration-300" />
              </RainbowButton>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const AnimatedFeaturecard: React.FC<UI.AnimatedFeatureCardProps> = ({
  heading,
  subheading,
  className,
  Skeleton,
  showGradient = true,
  containerClassName
}) => {
  return (
    <FeatureCard className={cn(className)}>
      <CardSkeletonContainer
        showGradient={showGradient}
        className={containerClassName}
      >
        <Skeleton />
      </CardSkeletonContainer>
      <FeatureCardTitle>{heading}</FeatureCardTitle>
      <FeatureCardDescription>{subheading}</FeatureCardDescription>
    </FeatureCard>
  );
};

export function AnimatedBeamMultipleOutputForSEO({
  className
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn("relative w-[80%] h-[80%]", className)}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <SEOIcons.semRush />
          </Circle>
          <Circle ref={div2Ref}>
            <SEOIcons.chromeLightHouse />
          </Circle>
          <Circle ref={div4Ref}>
            <SEOIcons.googlePageSpeed />
          </Circle>
          <Circle ref={div3Ref}>
            <SEOIcons.googleAnalytics />
          </Circle>
          <Circle ref={div5Ref}>
            <SEOIcons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <SEOIcons.seo />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <SEOIcons.rocket />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}

export { Services };
