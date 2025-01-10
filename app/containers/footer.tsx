"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedLink, ShootingStars, StarsBackground } from "@/components/ui";
import { ArrowRight, MoveUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import Link from "next/link";
import { Github, Codepen, Linkedin } from "lucide-react";
import { nanoid } from "nanoid";
import Image from "next/image";
import { ImagePath } from "@/constants";

const Footer = () => {
  const backToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.div className="w-full relative overflow-hidden top-[95px] flex flex-col items-center bg-gradient-to-b from-neutral-950 via-background to-background">
        <div className="section flex flex-col items-start h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
          <div className="flex flex-col gap-y-0.5 w-[80%] items-end self-end">
            <h3 className="text-4xl lg:text-7xl 2xl:text-8xl font-bricolage font-extrabold text-transparent bg-gradient-to-b bg-clip-text from-neutral-200 to-neutral-600">
              Let&apos;s architect
            </h3>
            <h3 className="text-4xl lg:text-7xl 2xl:text-8xl font-bricolage font-extrabold text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600 transition duration-300 transform-gpu -translate-x-20">
              the future
            </h3>
            <h3 className="text-4xl lg:text-7xl 2xl:text-8xl font-bricolage font-extrabold text-transparent bg-gradient-to-b bg-clip-text from-neutral-200 to-neutral-600">
              together
            </h3>
          </div>

          <div className="flex items-center justify-end w-full self-end">
            <Link href={"/#request-consultation"} passHref>
              <InteractiveRightButton
                text="Let's Discuss"
                className={cn(
                  "border-secondary-300/40 hover:border-secondary-200/5 text-secondary-400 hover:text-secondary-content font-poppins text-base uppercase tracking-wide !font-medium transition-opacity duration-300"
                )}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-y-4 lg:gap-y-0">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center space-x-4">
                  <div className="size-14 relative overflow-hidden">
                    <Image
                      src={ImagePath.BRAND_LOGO_LIGHT}
                      alt={""}
                      fill
                      priority
                      draggable={false}
                      className="size-full object-contain"
                    />
                  </div>

                  <h4 className="text-xl lg:text-2xl uppercase font-bricolage font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                    Alabura Usman
                  </h4>
                </div>

                <Link
                  href="mailto:usmanunfolds@alabura.com?subject=Hello%20Alabura&body=I%20wanted%20to%20reach%20out%20regarding..."
                  className="flex items-center space-x-2 text-sm lg:text-base font-poppins font-light text-zinc-50 hover:text-secondary-300/95 active:text-secondary focus:text-secondary transition-all duration-300 will-change-auto"
                  passHref
                >
                  <i className="icon-email"></i>
                  <span>usmanunfolds@alabura.com</span>
                </Link>

                <Link
                  href="tel:+2349027661950"
                  className="flex items-center space-x-2 text-sm lg:text-base font-poppins font-light text-zinc-50 hover:text-secondary-300/95 active:text-secondary focus:text-secondary transition-all duration-300 will-change-auto"
                  passHref
                >
                  <i className="icon-phone-call"></i>
                  <span>+234 902 766 1950</span>
                </Link>
              </div>

              <div className="flex flex-col items-end justify-end">
                <p className="font-bricolage font-normal uppercase text-base lg:text-lg text-neutral-50/90">
                  &copy; {new Date().getFullYear()} Alabura Usman. All Rights
                  Reserved.
                </p>
                <p className="font-bricolage font-normal uppercase text-base lg:text-lg text-neutral-50/90">
                  Delivering Impact, One Project at a Time.
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-neutral-700/0 via-neutral-700/90 to-neutral-700/0"></div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-center space-x-2 lg:space-x-4">
                <AnimatedLink
                  id={nanoid()}
                  label="Services"
                  href="/#services"
                  className="uppercase tracking-wide !font-normal"
                />
                <AnimatedLink
                  id={nanoid()}
                  label="About"
                  href="/about-alabura-usman"
                  className="uppercase tracking-wide !font-normal"
                />
                <AnimatedLink
                  id={nanoid()}
                  label="Projects"
                  href="/#projects"
                  className="uppercase tracking-wide !font-normal"
                />
              </div>

              <div className="flex items-center space-x-2 lg:space-x-4">
                <Link
                  href={"https://www.linkedin.com/in/usmanunfolds/"}
                  target="_blank"
                  passHref
                >
                  <motion.button
                    initial={{
                      scale: 1,
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 5,
                        mass: 0.5,
                        duration: 0.3,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500/50 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <Linkedin />
                  </motion.button>
                </Link>

                <Link
                  href={"https://x.com/UsmanUnfolds"}
                  target="_blank"
                  passHref
                >
                  <motion.button
                    initial={{
                      scale: 1,
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 5,
                        mass: 0.5,
                        duration: 0.3,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="border size-8 lg:size-10 p-2 grid place-items-center rounded-full border-cyan-500/50 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0.254 0.25 500 451.95400000000006"
                    >
                      <path
                        d="M394.033.25h76.67L303.202 191.693l197.052 260.511h-154.29L225.118 294.205 86.844 452.204H10.127l179.16-204.77L.254.25H158.46l109.234 144.417zm-26.908 406.063h42.483L135.377 43.73h-45.59z"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.button>
                </Link>

                <Link
                  href={"https://github.com/Alabs02"}
                  target="_blank"
                  passHref
                >
                  <motion.button
                    initial={{
                      scale: 1,
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 5,
                        mass: 0.5,
                        duration: 0.3,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500/50 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <Github />
                  </motion.button>
                </Link>

                <Link
                  href={"https://codepen.io/Alabura"}
                  target="_blank"
                  passHref
                >
                  <motion.button
                    initial={{
                      scale: 1,
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 5,
                        mass: 0.5,
                        duration: 0.3,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500/50 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <Codepen />
                  </motion.button>
                </Link>

                <Link
                  href={"https://medium.com/@alabura.usman"}
                  target="_blank"
                  passHref
                >
                  <motion.button
                    initial={{
                      scale: 1,
                    }}
                    transition={{
                      scale: {
                        type: "spring",
                        stiffness: 200,
                        damping: 5,
                        mass: 0.5,
                        duration: 0.3,
                      },
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="border size-8 lg:size-10 p-2 grid place-items-center rounded-full border-cyan-500/50 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98a39.99 39.99 0 0 1-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297a18.1 18.1 0 0 1 6.8-17.2z" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full mb-8"></div>
        </div>

        <motion.button
          initial={{
            scale: 1,
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            stiffness: 200,
            damping: 5,
            mass: 0.5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={backToTop}
          className="w-[80%] cursor-pointer bg-black no-underline group/move-up absolute ring-1 ring-secondary-50/15 shadow-2xl shadow-black !rounded-t-[32px] text-secondary-50 hover:bg-secondary-50 hover:text-zinc-950 transition-all duration-300 will-change-auto flex items-center space-x-2 bottom-0 z-[2500]"
        >
          <div className="relative h-full w-full p-6">
            <div className="relative flex space-x-2 items-center z-10 rounded-full text-base lg:text-lg uppercase font-poppins tracking-wide font-light">
              <MoveUp size={20} />

              <span className="text-inherit">{"Back to the top"}</span>
            </div>
            <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-secondary-500/0 via-secondary/90 to-cyan-500/0 group-hover/move-up:from-secondary/0 group-hover/move-up:via-secondary/80 group-hover/move-up:to-secondary/0 transition-all duration-300 will-change-transform transform-gpu"></span>
          </div>
        </motion.button>

        <ShootingStars
          minSpeed={5}
          maxSpeed={15}
          className="z-[1000]"
          starColor="#9E00FF"
          trailColor="#3d91e6"
        />
        <StarsBackground className="z-[1000]" />
      </motion.div>
    </>
  );
};

const InteractiveRightButton = React.forwardRef<
  HTMLButtonElement,
  UI.InteractiveButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      ref={ref}
      className={cn(
        "group relative w-52 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-secondary-content opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[12%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-cyan-600"></div>
    </motion.button>
  );
});

Footer.displayName = "Footer";
InteractiveRightButton.displayName = "InteractiveRightButton";

export { Footer };
