"use client";
import { UI } from "@/models";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { type AnimationProps } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }: { data: UI.TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const selectEntry = (index: number) => {
    setSelectedEntry(index);
  };

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, (height * 1.5)]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10 relative"
      ref={containerRef}
    >
      <div ref={ref} className="relative w-full mx-auto">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={cn("flex flex-col justify-start gap-8 md:gap-12 w-full transition-all duration-300 will-change-auto", index === 0 ? "pt-10" : "pt-5")}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start w-full pl-12 md:pl-0">
              <div className="h-10 absolute left-0 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-zinc-800 border border-zinc-700 p-2" />
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col md:pl-20 w-full lg:w-[90%] 2xl:w-[80%]">
                  <div className="flex items-center space-x-2 md:space-x-3 text-cyan-500 font-bricolage font-light uppercase text-sm tracking-wide">
                    <span className="text-inherit">{item.dates.start}</span>
                    <span className="inline-block h-[2px] w-4 rounded-full bg-cyan-800"></span>
                    <span className="text-inherit">{item.dates.end}</span>
                  </div>

                  <h3 className="font-bricolage font-extrabold text-base md:text-xl lg:text-4xl text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 mt-0.5 mb-1.5">
                    {item.companyName}
                  </h3>

                  <h4 className="font-bricolage font-extrabold text-[15px] md:text-lg lg:text-3xl text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                    {item.positionTitle}
                  </h4>
                </div>

                <AccordionBtn key={item.id} isSelectedEntry={index === selectedEntry} selectEntry={() => selectEntry(index)} />
              </div>
            </div>

            <motion.div
              className={cn("relative pl-12 md:pl-20 pr-2 md:pr-4 w-full transition-all duration-500 will-change-auto", selectedEntry === index ? "opacity-100 h-auto" : "opacity-0 h-0")}
            >
              {item.content}{" "}
              <div className="transition-all duration-500 w-full h-16 md:h-20 will-change-auto"></div>
            </motion.div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-[18px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

type AccordionBtnProps = {
  isSelectedEntry: boolean;
  selectEntry: () => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
};

export const AccordionBtn = React.forwardRef<
  HTMLButtonElement,
  AccordionBtnProps
>(({ className, isSelectedEntry, selectEntry, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      {...animationProps}
      {...props}
      className={cn(
        "relative group/accordion rounded-full p-1 md:p-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out bg-[radial-gradient(circle_at_50%_0%,hsl(var(--secondary-100)/10%)_0%,transparent_60%)] hover:shadow-[0_0_20px_hsl(var(--secondary)/10%)]",
        className
      )}
      onClick={selectEntry}
    >
      <span
        className="relative block size-full text-sm uppercase tracking-wide font-light text-zinc-50/75"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--silver-400)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var((--silver-400)) calc(var(--x) + 100%))",
        }}
      >
        <ChevronUp className={cn("group-hover/accordion:rotate-180 transition-all duration-300 will-change-auto", isSelectedEntry && "rotate-180")} />
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--silver-50)/10%)_calc(var(--x)+20%),hsl(var(--silver-50)/50%)_calc(var(--x)+25%),hsl(var(--silver-50)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
});

AccordionBtn.displayName = "AccordionBtn";
Timeline.displayName = "Timeline";
