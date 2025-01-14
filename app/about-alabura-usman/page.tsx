"use client";

import { HeadingChip, RainbowButton, StarsBackground } from "@/components/ui";
import { ImagePath, resumeHref } from "@/constants";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import { Wrapper } from "@/wrapper";
import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrestigiousBrands } from "@/containers";
import { ArrowRight, ScanEye } from "lucide-react";

const AboutAlaburaUsman = () => {
  const phoneNumber = "+2349027661950";
  const initialMessage = encodeURIComponent(
    "Hi there! I’d like to get in touch with you."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${initialMessage}`;

  const patterns = [
    [17, 1],
    [16, 3],
    [13, 5],
    [10, 6],
    [9, 7],
  ];

  return (
    <Wrapper footer="!top-0">
      <header className="w-full flex flex-col items-center relative bg-gradient-to-b from-background to-background">
        <section className="section relative h-full gap-y-10 py-10 xl:py-12 2xl:py-16 mt-[95px] z-[2000]">
          <div className="w-full flex flex-col gap-y-4 items-start">
            <HeadingChip>ABOUT ALABURA</HeadingChip>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bricolage mt-2 font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
              A Visionary Engineer with a Purpose
            </h3>

            <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-full xl:max-w-[80%] 2xl:max-w-[70%] mt-8">
              Blending strategic thinking with hands-on expertise, I&apos;ve
              spent years partnering with businesses to create{" "}
              <span className="font-normal">human-centered market-leading</span>{" "}
              digital solutions. My passion lies in turning bold ideas into
              tangible realities, leaving a legacy of innovation and excellence
              with every project I undertake.
            </p>

            <Link href={resumeHref} target={"_blank"} aria-label="Preview My Resume" className="mt-4" passHref>
              <RainbowButton
                aria-label="Preview My Resume"                className={cn(
                  "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-medium !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                )}
              >
                <span>{"Preview Resume"}</span>
                <ScanEye className="group-hover:rotate-45 transition-all duration-300" />
              </RainbowButton>
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 absolute h-[60%] w-[60%] 2xl:h-[40%] 2xl:w-[40%] overflow-hidden -top-0 -left-0 z-[500]">
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

        <div className="grid grid-cols-1 absolute h-[50%] w-[40%] 2xl:h-[75%] 2xl:w-[30%] overflow-hidden -top-10 -right-10 z-[500]">
          <div className="w-full relative h-full grid">
            <Image
              src={ImagePath.ILLUS_LINE_TOP_PROJECT}
              alt={""}
              fill
              loading={"eager"}
              draggable={false}
              className="size-full opacity-90"
            />
          </div>
        </div>
      </header>

      <section className="w-full grid grid-cols-1 place-items-center relative overflow-hidden bg-gradient-to-b from-zinc-900/80 via-background to-zinc-900/80">
        <div className="section relative flex flex-col items-center h-full gap-y-10 py-10 xl:py-12 2xl:py-16 z-[2000]">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center md:text-left font-bricolage mt-2 font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
            Ready to Build Something Exceptional?
          </h3>

          <p className="font-poppins text-neutral-50/90 text-base lg:text-xl text-center w-full">
            Let&apos;s collaborate and turn your vision into a reality.
            Together, we&apos;ll create digital solutions that stand the test of
            time.
          </p>

          <div className="flex flex-col space-y-6 items-center md:flex-row md:space-x-6 md:space-y-0 md:justify-center w-full mt-2">
            <Link
              aria-label="Let's Collaborate"
              href={
                "mailto:usmanunfolds@alabura.com?subject=Hello%20Alabura&body=I%20wanted%20to%20reach%20out%20regarding..."
              }
              passHref
            >
              <RainbowButton
                aria-label="Let's Collaborate"
                className={cn(
                  "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-normal !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                )}
              >
                <span>{"Let's Collaborate"}</span>
                <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" />
              </RainbowButton>
            </Link>

            <Link href={whatsappLink} target={"_blank"} aria-label="Say Hi On WhatsApp" passHref>
              <RainbowButton aria-label="Say Hi On WhatsApp" className="!rounded-full font-poppins gap-x-2 uppercase text-[15px] !font-normal tracking-wide">
                <span>{"Say Hi On WhatsApp"}</span>
                <span className="icon-whatsapp"></span>
              </RainbowButton>
            </Link>
          </div>
        </div>

        <StarsBackground className="z-[1000]" />
      </section>

      <section className="w-full grid grid-cols-1 place-items-center relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="section h-full flex flex-col items-center gap-y-16 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bricolage font-bold md:font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
              Work:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                Crafting Solutions That Matter
              </span>
            </h3>

            <p className="font-poppins font-light text-zinc-50/90 text-base lg:text-xl w-full text-center max-w-[90%] mt-6">
              Work is more than a job; it&apos;s a commitment to excellence.
              Each project I take on is an opportunity to innovate, solve
              challenges, and deliver solutions that make a difference. From
              collaborating with startups to spearheading large-scale
              initiatives, my work is rooted in grit, precision, and
              results-driven execution.
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bricolage font-bold md:font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
              Inspired:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                Driven by Curiosity, Fueled by Purpose
              </span>
            </h3>

            <p className="font-poppins font-light text-zinc-50/90 text-center text-base lg:text-xl w-full max-w-[90%] mt-6">
              I find inspiration in challenges and innovation in collaboration.
              Whether it&apos;s a groundbreaking idea or a complex problem, I
              believe every obstacle holds the seed of transformation. My
              curiosity drives me to explore new technologies, frameworks, and
              methods that empower businesses to thrive in the digital age.
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bricolage font-bold md:font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
              Vision:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                Engineering a Better Tomorrow
              </span>
            </h3>

            <p className="font-poppins font-light text-zinc-50/90 text-base lg:text-xl text-center w-full max-w-[90%] mt-6">
              My vision is simple—engineer solutions that inspire and create
              lasting value. I aim to bridge the gap between ambition and
              reality, helping businesses realize their full potential while
              making an impact on industries and communities. This isn&apos;t
              just about building; it&apos;s about shaping a future where
              possibilities are limitless.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-auto grid grid-cols-1 relative overflow-hidden bg-gradient-to-b from-neutral-900/90 via-neutral-900/50 to-neutral-950">
        <div className="flex flex-col items-center w-full h-full relative">
          <PrestigiousBrands />
        </div>
      </section>
    </Wrapper>
  );
};

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
