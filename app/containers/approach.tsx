"use client";

import React, { CSSProperties, FC, forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import {
  AnimatedBeam,
  BackgroundBeamsWithCollision,
  HeadingChip,
} from "@/components/ui";
import { ImagePath } from "@/constants";
import Image from "next/image";
import {
  FileChartPie,
  FileCode2,
  FileSearch,
  ListCheck,
  Orbit,
  PencilRuler,
  ScanEye,
} from "lucide-react";

const Approach = () => {
  return (
    <BackgroundBeamsWithCollision>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col items-center">
          <HeadingChip>My Approach</HeadingChip>

          <motion.div className="group flex flex-row items-center justify-center relative rounded-full bg-gradient-to-r from-purple-500 via-[#ffaa40] to-pink-500 p-[1px] transition-shadow duration-500 ease-out [--bg-size:300%] mt-6">
            <div className="flex flex-row items-center justify-center w-full h-full bg-zinc-950 rounded-full px-1.5 md:px-4 py-1.5 z-[2]">
              <span className="hidden md:inline">🛠️</span>
              
              <ShinyText className="flex flex-row items-center justify-center w-full h-full">
                <div className="mx-px md:mx-3 h-4 w-px bg-zinc-50/90 hidden md:inline-block" />
                <motion.h4 className="uppercase tracking-wider text-left md:text-center text-zinc-50 font-light font-poppins text-[10.5px] lg:text-lg !m-0 !p-0">
                  <motion.span className="text-purple-500">Grit</motion.span> +{" "}
                  <motion.span className="text-[#ffaa40]">Agility</motion.span>{" "}
                  +{" "}
                  <motion.span className="text-pink-500">Integrity</motion.span>{" "}
                  ={" "}
                  <motion.span className="bg-gradient-to-r bg-clip-text from-purple-500 via-[#ffaa40] to-pink-500 text-transparent">
                    The GAIN Approach
                  </motion.span>
                </motion.h4>
              </ShinyText>
            </div>
          </motion.div>

          <motion.h5 className="text-2xl lg:text-3xl xl:text-4xl text-center text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 font-extrabold font-bricolage tracking-wide mt-8 2xl:mt-12">
            A Time-Tested Framework for Excellence
          </motion.h5>

          <motion.h6 className="text-base lg:text-xl text-center text-zinc-50/80 font-poppins font-normal lg:w-[70%] mt-4 lg:mt-6">
            Over the years, I&apos;ve refined a pattern grounded in{" "}
            <i className="text-zinc-50">grit</i>,{" "}
            <i className="text-zinc-50">agile principles</i>, and{" "}
            <i className="text-zinc-50">integrity</i>. This approach ensures
            every solution I craft is not only robust but also tailored to meet
            the <i className="text-zinc-50">highest standards</i>. It looks like
            this:
          </motion.h6>
        </motion.div>

        <motion.div className="w-full flex flex-col gap-y-12 items-center mt-8 xl:mt-12">
          <div className="w-full lg:w-[50%] 2xl:w-[45%] flex flex-col gap-y-1">
            <motion.h6 className="font-bricolage font-medium text-xl lg:text-2xl text-center bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600 text-transparent">
              Collaboration & Understanding:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-secondary-100 to-cyan-200 text-transparent">
                The Foundation of GAIN
              </span>
            </motion.h6>
            <motion.p className="text-center text-zinc-50 font-poppins font-light text-sm xl:text-base">
              The GAIN Approach starts with engaging stakeholders to align their
              vision with reality.
            </motion.p>
            <CollaborationBeam className="mt-4" />
          </div>

          <div className="w-full lg:w-[50%] 2xl:w-[45%] flex flex-col gap-y-1">
            <motion.h6 className="font-bricolage font-medium text-xl lg:text-2xl text-center bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600 text-transparent">
              A Tailored Approach:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-secondary-100 to-cyan-200 text-transparent">
                Agile in Action
              </span>
            </motion.h6>
            <motion.p className="text-center text-zinc-50 font-poppins font-light text-sm xl:text-base">
              Through research, design, and development, I craft solutions that
              adapt to your unique needs.
            </motion.p>
            <ProcessBeam className="mt-4" />
          </div>

          <div className="w-full lg:w-[50%] 2xl:w-[45%] flex flex-col gap-y-1">
            <motion.h6 className="font-bricolage font-medium text-xl lg:text-2xl text-center bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-300 text-transparent">
              Delivering Results:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-secondary-100 to-cyan-200 text-transparent">
                Turning Grit Into Gains
              </span>
            </motion.h6>
            <motion.p className="text-center text-zinc-50 font-poppins font-light text-sm xl:text-base">
              Every effort converges into a single goal—delivering results that
              create lasting value.
            </motion.p>
            <DeliveryBeam className="mt-4" />
          </div>
        </motion.div>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
};

const CollaborationBeam: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-inherit",
        className
      )}
      ref={containerRef}
    >
      <motion.div className="h-[60px] h-max-[100px] w-full relative flex justify-center items-center">
        <Circle
          ref={div1Ref}
          className="absolute top-0 left-0"
          tooltip="Stakeholders"
          tooltipClassName="absolute top-2 -left-32"
        >
          <Icons.users />
        </Circle>

        <Circle
          ref={div2Ref}
          className="absolute top-0 right-0"
          tooltip="Your Engineer"
          tooltipClassName="absolute w-40 top-2 -right-[178px]"
        >
          <Icons.brandLogo />
        </Circle>
      </motion.div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={10}
        endYOffset={10}
        curvature={-20}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        reverse
      />
    </div>
  );
};

const ProcessBeam: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-inherit",
        className
      )}
      ref={containerRef}
    >
      <motion.div className="h-[300px] w-full relative flex justify-center items-center">
        <Circle
          ref={div1Ref}
          className="absolute top-0 left-0"
          tooltip="Research"
          tooltipClassName="absolute top-2 -left-32"
        >
          <FileSearch />
        </Circle>

        <Circle
          ref={div2Ref}
          className="absolute top-0 right-0"
          tooltip="Planning"
          tooltipClassName="absolute top-2 -right-32"
        >
          <Orbit />
        </Circle>

        <Circle
          ref={div3Ref}
          className="absolute top-20 left-0"
          tooltip="Design"
          tooltipClassName="absolute top-[88px] -left-32"
        >
          <PencilRuler />
        </Circle>

        <Circle
          ref={div4Ref}
          className="absolute top-20 right-0"
          tooltip="Build"
          tooltipClassName="absolute top-[88px] -right-32"
        >
          <FileCode2 />
        </Circle>

        <Circle
          ref={div5Ref}
          className="absolute top-40 left-0"
          tooltip="Test"
          tooltipClassName="absolute top-[168px] -left-32"
        >
          <ListCheck />
        </Circle>

        <Circle
          ref={div6Ref}
          className="absolute top-40 right-0"
          tooltip="Release"
          tooltipClassName="absolute top-[168px] -right-32"
        >
          <Icons.rocket />
        </Circle>

        <Circle
          ref={div7Ref}
          className="absolute top-60 left-0"
          tooltip="Monitor"
          tooltipClassName="absolute top-[248px] -left-32"
        >
          <ScanEye />
        </Circle>

        <Circle
          ref={div8Ref}
          className="absolute top-60 right-0"
          tooltip="Measure & Learn"
          tooltipClassName="absolute top-[248px] -right-[178px] w-40"
        >
          <FileChartPie />
        </Circle>
      </motion.div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        startYOffset={-10}
        endYOffset={-10}
        curvature={20}
        duration={8}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        startYOffset={10}
        endYOffset={-10}
        curvature={20}
        duration={8}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        startYOffset={10}
        endYOffset={-10}
        curvature={-10}
        duration={8}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div5Ref}
        startYOffset={20}
        endYOffset={-5}
        curvature={10}
        duration={8}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        startYOffset={15}
        endYOffset={-15}
        curvature={-15}
        duration={8}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        startYOffset={20}
        endYOffset={-5}
        duration={8}
        reverse
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div8Ref}
        startYOffset={15}
        endYOffset={15}
        curvature={-30}
        duration={8}
      />
    </div>
  );
};

const DeliveryBeam: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-inherit",
        className
      )}
      ref={containerRef}
    >
      <motion.div className="h-[60px] h-max-[100px] w-full relative flex justify-center items-center">
        <Circle
          ref={div1Ref}
          className="absolute top-0 left-0"
          tooltip="The GAIN Approach"
          tooltipClassName="absolute w-44 top-2 -left-[196px]"
        >
          <Icons.gain />
        </Circle>

        <Circle
          ref={div2Ref}
          className="absolute top-0 right-0"
          tooltip="Working Software"
          tooltipClassName="absolute w-40 top-2 -right-[178px]"
        >
          <Icons.colorfulRocket />
        </Circle>
      </motion.div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        duration={8}
      />
    </div>
  );
};

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    tooltip?: string;
    tooltipClassName?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
  }
>(
  (
    { className, children, style, tooltip = "Research", tooltipClassName },
    ref
  ) => {
    return (
      <>
        <div
          data-tooltip={tooltip}
          ref={ref}
          className={cn(
            "z-10 flex size-12 items-center relative justify-center rounded-full border-2 bg-white text-zinc-950 p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
            className
          )}
          style={style}
        >
          {children}
        </div>

        <motion.div
          className={cn(
            "flex flex-col relative items-center justify-center rounded-md bg-zinc-950/80 z-50 shadow-xl px-4 py-2 w-28",
            tooltipClassName
          )}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-[50%] z-30 -bottom-px bg-gradient-to-r from-transparent via-secondary to-transparent h-px" />
          <div className="font-normal text-white relative z-30 text-sm font-poppins">
            {tooltip}
          </div>
        </motion.div>
      </>
    );
  }
);

const ShinyText: FC<UI.ShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <div
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "relative bg-clip-text text-transparent",

        "animate-shiny-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] transition-[background-position] duration-[1.5s] ease-in-out infinite",

        "bg-gradient-to-r from-purple-600 via-[#ffaa40]/90 to-pink-600",

        className
      )}
    >
      {children}
    </div>
  );
};

const Icons = {
  users: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#09090b"
      className={cn("size-6 text-zinc-950")}
    >
      <path
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  ),
  rocket: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#09090b"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  ),
  colorfulRocket: () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5023 14.3674L20.5319 9.35289C21.2563 8.63072 21.6185 8.26963 21.8092 7.81046C22 7.3513 22 6.84065 22 5.81937V5.33146C22 3.76099 22 2.97576 21.5106 2.48788C21.0213 2 20.2337 2 18.6585 2H18.1691C17.1447 2 16.6325 2 16.172 2.19019C15.7114 2.38039 15.3493 2.74147 14.6249 3.46364L9.59522 8.47817C8.74882 9.32202 8.224 9.84526 8.02078 10.3506C7.95657 10.5103 7.92446 10.6682 7.92446 10.8339C7.92446 11.5238 8.48138 12.0791 9.59522 13.1896L9.74492 13.3388L11.4985 11.5591C11.7486 11.3053 12.1571 11.3022 12.4109 11.5523C12.6647 11.8024 12.6678 12.2109 12.4177 12.4647L10.6587 14.2499L10.7766 14.3674C11.8905 15.4779 12.4474 16.0331 13.1394 16.0331C13.2924 16.0331 13.4387 16.006 13.5858 15.9518C14.1048 15.7607 14.6345 15.2325 15.5023 14.3674ZM17.8652 8.47854C17.2127 9.12904 16.1548 9.12904 15.5024 8.47854C14.8499 7.82803 14.8499 6.77335 15.5024 6.12284C16.1548 5.47233 17.2127 5.47233 17.8652 6.12284C18.5177 6.77335 18.5177 7.82803 17.8652 8.47854Z"
        fill="url(#paint0_linear_2151_12439)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.77409 12.4814C3.07033 12.778 3.07004 13.2586 2.77343 13.5548L2.61779 13.7103C2.48483 13.8431 2.48483 14.058 2.61779 14.1908C2.75125 14.3241 2.96801 14.3241 3.10147 14.1908L4.8136 12.4807C5.1102 12.1845 5.59079 12.1848 5.88704 12.4814C6.18328 12.778 6.18298 13.2586 5.88638 13.5548L4.17426 15.2648C3.4481 15.9901 2.27116 15.9901 1.545 15.2648C0.818334 14.5391 0.818333 13.362 1.545 12.6362L1.70065 12.4807C1.99725 12.1845 2.47784 12.1848 2.77409 12.4814ZM7.29719 16.696C7.5903 16.9957 7.58495 17.4762 7.28525 17.7693L5.55508 19.4614C5.25538 19.7545 4.77481 19.7491 4.48171 19.4494C4.1886 19.1497 4.19395 18.6692 4.49365 18.3761L6.22382 16.684C6.52352 16.3909 7.00409 16.3963 7.29719 16.696ZM11.4811 18.118C11.7774 18.4146 11.7771 18.8952 11.4805 19.1915L9.76834 20.9015C9.63539 21.0343 9.63539 21.2492 9.76834 21.382C9.9018 21.5153 10.1186 21.5153 10.252 21.382L10.4077 21.2265C10.7043 20.9303 11.1849 20.9306 11.4811 21.2272C11.7774 21.5238 11.7771 22.0044 11.4805 22.3006L11.3248 22.4561C10.5987 23.1813 9.42171 23.1813 8.69556 22.4561C7.96889 21.7303 7.96889 20.5532 8.69556 19.8274L10.4077 18.1174C10.7043 17.8211 11.1849 17.8214 11.4811 18.118Z"
        fill="url(#paint0_linear_2151_12439)"
      />
      <g opacity="0.5">
        <path
          d="M10.8461 5.40925L8.65837 7.59037C8.25624 7.99126 7.88737 8.35901 7.59606 8.69145C7.40899 8.90494 7.22204 9.13861 7.06368 9.39679L7.04237 9.37554C7.00191 9.3352 6.98165 9.31501 6.96133 9.29529C6.58108 8.92635 6.1338 8.63301 5.64342 8.43097C5.61722 8.42018 5.59062 8.40964 5.53743 8.38856L5.2117 8.25949C4.77043 8.08464 4.65283 7.51659 4.9886 7.18184C5.95224 6.22112 7.10923 5.06765 7.6676 4.83597C8.16004 4.63166 8.692 4.56368 9.20505 4.6395C9.67514 4.70897 10.1198 4.95043 10.8461 5.40925Z"
          fill="url(#paint0_linear_2151_12439)"
        />
        <path
          d="M14.5816 16.8934C14.7579 17.0723 14.8749 17.1987 14.9808 17.3337C15.1204 17.5119 15.2453 17.7012 15.3542 17.8996C15.4767 18.123 15.5718 18.3616 15.7621 18.8389C15.9169 19.2274 16.4315 19.3301 16.7303 19.0322L16.8026 18.9601C17.7662 17.9993 18.9232 16.8458 19.1556 16.2891C19.3605 15.7982 19.4287 15.2678 19.3526 14.7563C19.283 14.2877 19.0408 13.8444 18.5807 13.1205L16.3857 15.3089C15.9745 15.7189 15.5974 16.0949 15.2564 16.3894C15.052 16.5659 14.8284 16.7423 14.5816 16.8934Z"
          fill="url(#paint0_linear_2151_12439)"
        />
      </g>
      <g opacity="0.5">
        <path
          d="M7.68621 14.5633C7.98263 14.2669 7.98263 13.7863 7.68621 13.4899C7.38979 13.1935 6.90919 13.1935 6.61277 13.4899L4.47036 15.6323C4.17394 15.9287 4.17394 16.4093 4.47036 16.7057C4.76679 17.0021 5.24738 17.0021 5.5438 16.7057L7.68621 14.5633Z"
          fill="url(#paint0_linear_2151_12439)"
        />
        <path
          d="M10.4954 17.369C10.7918 17.0726 10.7918 16.592 10.4954 16.2956C10.1989 15.9992 9.71835 15.9992 9.42193 16.2956L7.29417 18.4233C6.99774 18.7198 6.99774 19.2003 7.29417 19.4968C7.59059 19.7932 8.07118 19.7932 8.36761 19.4968L10.4954 17.369Z"
          fill="url(#paint0_linear_2151_12439)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2151_12439"
          x1="4.92905"
          y1="5.43901"
          x2="4.92905"
          y2="26.8854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6996" />
          <stop offset="1" stopColor="#8100BE" />
        </linearGradient>
      </defs>
    </svg>
  ),
  brandLogo: () => (
    <Image
      src={ImagePath.BRAND_LOGO}
      alt={""}
      width={100}
      height={100}
      loading={"lazy"}
    />
  ),

  gain: () => (
    <motion.h6 className="text-[13px] font-bricolage uppercase font-bold text-indigo-600 tracking-wide">
      gain
    </motion.h6>
  ),
};

Circle.displayName = "Circle";
ShinyText.displayName = "ShinyText";

export { Approach };
