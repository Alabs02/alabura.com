import React from "react";
import { motion } from "framer-motion";
import { AnimatedLink, ShootingStars, StarsBackground } from "@/components/ui";
import { ArrowRight, MoveUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { UI } from "@/models";
import Link from "next/link";
import { Github, Codepen, Linkedin, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const Footer = () => {
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
            <InteractiveRightButton
              text="Let's Discuss"
              className={cn(
                "border-secondary-300/40 hover:border-secondary-200/5 text-secondary-400 hover:text-secondary-content font-poppins text-base uppercase tracking-wide !font-medium transition-opacity duration-300"
              )}
            />
          </div>

          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-4 lg:gap-y-0">
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
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
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
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <XIcon />
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
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
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
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <Codepen />
                  </motion.button>
                </Link>

                <Link
                  href={"http://codepen.io/pen/?editors=0012"}
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
                    className="border size-8 lg:size-10 grid place-items-center rounded-full p-1 border-cyan-500 hover:border-transparent hover:shadow-inner hover:shadow-cyan-700 text-secondary hover:text-secondary-content bg-gradient-to-br from-secondary/0 to-cyan-600/0 hover:from-secondary hover:to-cyan-600 transition-all duration-300 will-change-auto"
                  >
                    <Codepen />
                  </motion.button>
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
