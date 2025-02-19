"use client";

import {
  GridPattern,
  HeadingChip,
  RainbowButton,
  StarsBackground
} from "@/components/ui";
import { calURL, ImagePath, resumeHref } from "@/constants";
import { cn } from "@/lib/utils";
import { Wrapper } from "@/wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrestigiousBrands } from "@/containers";
import { ArrowRight, ScanEye } from "lucide-react";
import { IconMailSpark } from "@tabler/icons-react";

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
    [9, 7]
  ];

  return (
    <Wrapper footer="!top-0">
      <header className="w-full flex flex-col items-center relative bg-gradient-to-b from-background to-background">
        <section className="section relative h-full gap-y-10 py-10 xl:py-12 2xl:py-16 mt-[95px] z-[2000]">
          <div className="grid grid-cols-12 gap-5 xl:gap-8 2xl:gap-10 w-full">
            <div className="col-span-12 lg:col-span-7 2xl:col-span-8 w-full flex flex-col gap-y-4 items-start">
              <HeadingChip>ABOUT ALABURA</HeadingChip>

              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bricolage mt-2 font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                AI Solutions Expert
              </h3>

              <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-full xl:max-w-[96%] !leading-relaxed mt-8">
                I design, build, and scale AI-driven solutions that boost
                revenue, cut costs, and automate operations. Beyond code,
                I&apos;m a car enthusiast who loves precision, whether in AI
                systems or finely tuned machines. I unwind with
                thought-provoking podcasts and classic rom-coms.
              </p>

              <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-full xl:max-w-[96%] mt-2">
                For me, AI isn&apos;t just automation, it&apos;s about crafting
                experiences that last. Let&apos;s build something remarkable.
              </p>

              <Link
                href={resumeHref}
                target={"_blank"}
                aria-label="Preview My Resume"
                className="mt-4"
                passHref
              >
                <RainbowButton
                  aria-label="Preview My Resume"
                  className={cn(
                    "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-medium !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                  )}
                >
                  <span>{"Preview Resume"}</span>
                  <ScanEye />
                </RainbowButton>
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-5 2xl:col-span-4 grid-cols-1 hidden lg:grid">
              <div className="relative size-full opacity-95">
                <Image
                  priority
                  width={483}
                  height={353}
                  quality={100}
                  draggable={false}
                  alt={"Usman Alabura"}
                  src={ImagePath.ALABURA_USMAN}
                  className="size-full object-contain object-center"
                />
              </div>
            </div>
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
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
            )}
          />
        </div>

        <div className="grid grid-cols-1 absolute h-[50%] w-[40%] 2xl:h-[75%] 2xl:w-[30%] overflow-hidden -top-10 -right-10 z-[500]">
          <div className="w-full relative h-full grid">
            <Image
              src={ImagePath.ILLUS_LINE_TOP_PROJECT}
              alt={""}
              fill
              draggable={false}
              priority
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
              aria-label="Get in touch via email"
              href={
                "mailto:usmanunfolds@alabura.com?subject=Hello%20Alabura&body=I%20wanted%20to%20reach%20out%20regarding..."
              }
              passHref
            >
              <RainbowButton
                aria-label="Get in touch via email"
                className={cn(
                  "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] font-poppins !font-normal"
                )}
              >
                <span>{"Get in Touch"}</span>
                <IconMailSpark
                  className="transition-all duration-300"
                  size={20}
                />
              </RainbowButton>
            </Link>

            <Link
              aria-label="Let's talk about your project"
              href={calURL}
              target="_blank"
              passHref
            >
              <RainbowButton
                aria-label="Let's Talk"
                className={cn(
                  "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-normal !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                )}
              >
                <span>{"Let's Talk"}</span>
                <ArrowRight className="-rotate-45 transition-all duration-300" />
              </RainbowButton>
            </Link>

            <Link
              href={whatsappLink}
              target={"_blank"}
              aria-label="Say Hi On WhatsApp"
              passHref
            >
              <RainbowButton
                aria-label="Say Hi On WhatsApp"
                className="!rounded-full font-poppins gap-x-2 uppercase text-[15px] !font-normal tracking-wide"
              >
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
                Building Impactful AI Solutions
              </span>
            </h3>

            <p className="font-poppins font-light text-zinc-50/90 text-base lg:text-xl w-full text-center max-w-[90%] mt-6">
              Every project is an opportunity to innovate, solve challenges, and
              drive real results. Whether collaborating with startups or leading
              large-scale initiatives, I bring grit, precision, and a commitment
              to excellence.
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bricolage font-bold md:font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
              Inspired:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                Curiosity Meets Purpose
              </span>
            </h3>

            <p className="font-poppins font-light text-zinc-50/90 text-center text-base lg:text-xl w-full max-w-[90%] mt-6">
              I thrive on challenges and collaboration, always exploring new
              technologies to turn obstacles into opportunities. Innovation
              isn&apos;t just a goal, it&apos;s a mindset that fuels every
              solution I build.
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl text-center font-bricolage font-bold md:font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
              Vision:{" "}
              <span className="bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                Engineering the Future
              </span>
            </h3>

            <p className="font-poppins font-light text-zinc-50/90 text-base lg:text-xl text-center w-full max-w-[90%] mt-6">
              I bridge the gap between ambition and reality, crafting AI-driven
              solutions that create lasting value. It&apos;s not just about
              building, it&apos;s about shaping a future of limitless
              possibilities.
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

AboutAlaburaUsman.displayName = "AboutAlaburaUsman";
export default AboutAlaburaUsman;
