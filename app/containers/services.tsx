"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  AnimatedBeam,
  AppSecuritySkeleton,
  BackendSkeleton,
  CardSkeletonContainer,
  Circle,
  CodeSecuritySkeleton,
  FeatureCard,
  FeatureCardDescription,
  FeatureCardTitle,
  FrontendSkeleton,
  MobileSkeleton,
  SEOIcons,
} from "@/components/ui";
import { cn } from "@/lib/utils";

const Services = () => {
  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="w-full mb-8 xl:mb-10">
          <motion.h2 className="text-3xl xl:text-4xl text-zinc-50 text-center font-bricolage font-bold tracking-wide">
            <span className="bg-gradient-to-b from-primary-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Core Services
            </span>{" "}
            - What I Do Best
          </motion.h2>

          <motion.h4 className="text-xl text-center text-zinc-50 font-poppins font-normal mt-2">
            From crafting stunning interfaces to securing systems, here’s how I
            turn ideas into impactful digital experiences.
          </motion.h4>
        </motion.div>

        <motion.div className="w-full grid grid-cols-12 grid-rows-[auto] gap-4">
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
              heading={"App Optimization & SEO"}
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
              heading={"Application Security Scans"}
              subheading={
                "Identifying vulnerabilities to safeguard your systems."
              }
              className={""}
              Skeleton={AppSecuritySkeleton}
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

export type AnimatedFeatureCardProps = {
  cta?: string;
  heading: string;
  subheading: string;
  className?: string;
  showGradient?: boolean;
  containerClassName?: string;
  Skeleton: React.ElementType;
};

const AnimatedFeaturecard: React.FC<AnimatedFeatureCardProps> = ({
  cta,
  heading,
  subheading,
  className,
  Skeleton,
  showGradient = true, 
  containerClassName
}) => {
  return (
    <FeatureCard className={cn("className")}>
      <CardSkeletonContainer showGradient={showGradient} className={containerClassName}>
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
          <Circle ref={div1Ref}>
            <SEOIcons.frogSEO />
          </Circle>
          <Circle ref={div2Ref}>
            <SEOIcons.semRush />
          </Circle>
          <Circle ref={div3Ref}>
            <SEOIcons.googleAnalytics />
          </Circle>
          <Circle ref={div4Ref}>
            <SEOIcons.googlePageSpeed />
          </Circle>
          <Circle ref={div5Ref}>
            <SEOIcons.openai />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <SEOIcons.brandLogo />
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
