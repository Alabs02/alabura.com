"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  AnimatedBeam,
  DesignSkeleton,
  BackendSkeleton,
  CardSkeletonContainer,
  Circle,
  CodeSecuritySkeleton,
  FeatureCard,
  FeatureCardDescription,
  FeatureCardTitle,
  FrontendSkeleton,
  HeadingChip,
  MobileSkeleton,
  RainbowButton,
  SEOIcons,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col xl:flex-row xl:justify-between items-center gap-4 xl:mb-12">
          <motion.div className="xl:w-[75%]">
            <HeadingChip>
              Core Services
            </HeadingChip>

            <motion.h2 className="text-3xl xl:text-4xl text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 text-center lg:text-left font-bricolage font-bold tracking-wide xl:mt-12">
              What I Do Best
            </motion.h2>

            <motion.h4 className="text-xl text-center lg:text-left text-zinc-50 font-poppins font-normal xl:mt-6">
              From crafting stunning interfaces to securing systems, here’s how
              I turn ideas into impactful digital experiences.
            </motion.h4>
          </motion.div>

          <RainbowButton
            className={cn("inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-medium !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]")}
          >
            <span>{"Explore Services"}</span>
            <ArrowRight className="group-hover:rotate-45 transition-all duration-300" />
          </RainbowButton>
        </motion.div>

        <motion.div className="w-full grid grid-cols-12 grid-rows-[auto] gap-4 transition-all duration-300">
          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"Frontend Development"}
              subheading={
                "Crafting responsive, modern interfaces for seamless user experiences."
              }
              className={""}
              Skeleton={FrontendSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"Mobile Development"}
              subheading={"Building sleek, intuitive apps for Android and iOS."}
              className={""}
              Skeleton={MobileSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-4">
            <AnimatedFeaturecard
              heading={"Backend Development"}
              subheading={
                "Creating secure, scalable, and efficient server-side systems."
              }
              className={""}
              Skeleton={BackendSkeleton}
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <AnimatedFeaturecard
              showGradient={false}
              heading={"Web Application Optimization & SEO"}
              subheading={
                "Enhancing performance and visibility through tailored optimization strategies."
              }
              className={""}
              Skeleton={AnimatedBeamMultipleOutputForSEO}
              containerClassName="h-[16rem] md:h-[20rem] bg-[rgba(50,50,50,0.7)] [mask-image:radial-gradient(55%_55%_at_50%_50%,white_0%,transparent_100%)] rounded-2xl"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <AnimatedFeaturecard
              heading={"UI/UX Design & Audits"}
              subheading={
                "Enhancing usability with intuitive designs and audits."
              }
              className={""}
              Skeleton={DesignSkeleton}
              containerClassName="h-[16rem] md:h-[20rem] rounded-2xl"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-3">
            <AnimatedFeaturecard
              heading={"Code Security Audit"}
              subheading={
                "Ensuring code integrity with in-depth security audits."
              }
              className={""}
              Skeleton={CodeSecuritySkeleton}
              containerClassName="h-[16rem] md:h-[20rem] rounded-2xl"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const AnimatedFeaturecard: React.FC<UI.AnimatedFeatureCardProps> = ({
  cta,
  heading,
  subheading,
  className,
  Skeleton,
  showGradient = true,
  containerClassName,
}) => {
  return (
    <FeatureCard className={cn("className")}>
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
  className,
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
          <Circle ref={div2Ref}>
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
