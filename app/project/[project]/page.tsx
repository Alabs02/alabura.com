"use client";

import { UI } from "@/models";
import { cn } from "@/lib/utils";
import { Wrapper } from "@/wrapper";
import { ImagePath } from "@/constants";
import Image, { ImageProps } from "next/image";
import { HeadingChip } from "@/components/ui";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { createContext, useEffect, useId, useState } from "react";

const dummyText =
  "Class54 is an innovative Ed-Tech startup dedicated to transforming the landscape of exam preparation. We specialize in curating an extensive database of examination questions and answers from past years, covering a wide range of critical standardized tests, including WASSCE, NECO, JAMB, GCE, and more. Our primary focus is to empower secondary school students, offering them a subscription-based platform that grants access to a wealth of exam resources.";

type CarouselProps = {
  items: React.JSX.Element[];
  initialScroll?: number;
};

type Card = {
  src: string;
  title: string;
  category: string;
  content: any;
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <div />,
  },
];

const ProjectOverview = () => {
  const { project } = useParams();

  const cards = data.map((card) => <Card key={card.src} card={card} />);

  const patterns = [
    [17, 1],
    [16, 3],
    [13, 5],
    [10, 6],
    [9, 7],
  ];

  const stack = [1, 2, 3, 4, 5, 6];

  if (!project) {
    notFound();
  }

  // const project = await fetchProjectBySlug(slug);

  useEffect(() => {
    console.log({ project });
  }, [project]);

  return (
    <Wrapper footer="!top-0">
      <header className="w-full min-h-screen flex flex-col items-center relative bg-gradient-to-b from-background to-background">
        <section className="section relative h-full gap-y-10 py-10 xl:py-12 2xl:py-16 mt-[95px] z-[2000]">
          <div className="w-full flex flex-col gap-y-4 items-start">
            <HeadingChip>Project Overview</HeadingChip>

            <h3 className="text-4xl lg:text-5xl font-bricolage font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
              Gradely LMS - Edtech
            </h3>

            <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-ful max-w-[70%] mt-2">
              Embark on a journey where vision becomes reality. A display of
              well crafted projects, reflecting dedication and creativity fused
              into a tangible masterpiece.
            </p>

            <div className="flex items-center flex-wrap space-x-4 mt-4">
              {stack.map((item, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "ring-1 bg-zinc-950/85 no-underline cursor-default group relative shadow-2xl shadow-black rounded-full p-px inline-block",
                    {
                      "ring-indigo-50/10": index === 0,
                      "ring-slate-50/10": index === 1,
                      "ring-cyan-50/10": index === 2,
                      "ring-purple-50/10": index === 3,
                      "ring-blue-50/10": index === 4,
                      "ring-red-50/10": index === 5,
                      "ring-[rgba(238,251,236,0.1)]": index === 6,
                    }
                  )}
                >
                  <div
                    className={cn(
                      "relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-3",
                      {
                        "bg-indigo-950/20 text-indigo-50/90": index === 0,
                        "bg-slate-950/20 text-slate-50/90": index === 1,
                        "bg-cyan-950/20 text-cyan-50/90": index === 2,
                        "bg-purple-950/20 text-purple-50/90": index === 3,
                        "bg-blue-950/20 text-blue-50/90": index === 4,
                        "bg-red-950/20 text-red-50/90": index === 5,
                        "bg-[rgba(18,44,13,0.2)] text-[rgba(238,251,236,0.9)]":
                          index === 6,
                      }
                    )}
                  >
                    <span className="tracking-wide text-sm lg:text-base font-bricolage font-light">
                      {"Docker"}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 to-white/0 transition-opacity duration-500",
                      {
                        "via-indigo-500/90": index === 0,
                        "via-slate-500/90": index === 1,
                        "via-cyan-500/90": index === 2,
                        "via-purple-500/90": index === 3,
                        "via-blue-700/90": index === 4,
                        "via-error/90": index === 5,
                        "via-[rgba(90,218,64,0.9)]": index === 6,
                      }
                    )}
                  ></span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 w-full lg:w-[90%] 2xl:w-[80%] self-center lg:h-[450px] 2xl:h-[550px] mt-8 lg:mt-12 relative">
              <Carousel items={cards} />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 absolute h-[40%] w-[40%] overflow-hidden -top-0 -left-0 z-[500]">
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

        <div className="grid grid-cols-1 absolute h-[40%] w-[30%] overflow-hidden -top-10 -right-10 z-[500]">
          <div className="w-full relative h-full grid">
            <Image
              src={ImagePath.ILLUS_LINE_TOP_PROJECT}
              alt={""}
              fill
              priority
              draggable={false}
              className="size-full opacity-90"
            />
          </div>
        </div>
      </header>

      <section className="w-full min-h-screen flex flex-col items-center relative bg-zinc-900">
        <div className="section relative grid grid-cols-12 grid-rows-[auto] h-full gap-6 lg:gap-8 2xl:gap-10 py-10 xl:py-12 2xl:py-16 z-[2000]">
          <div className="col-span-12 lg:col-span-2">
            <div className="w-auto h-12 relative overflow-hidden flex items-start justify-start">
              <Image
                src={ImagePath.GRADELY_FULL_LOGO}
                alt={"Gradely Logo"}
                fill
                priority
                draggable={false}
                className="size-full object-contain"
              />
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="h-px w-full lg:h-full lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-neutral-700/0 via-neutral-700/90 to-neutral-700/0"></div>
          </div>

          <div className="col-span-12 lg:col-span-9 grid grid-cols-1 gap-y-6 lg:gap-y-10">
            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Project Description
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {dummyText}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Role & Achievements/Contributions
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {dummyText}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Challenges & Solutions
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {dummyText}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Lessons Learned
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {dummyText}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Results and Impact
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {dummyText}
              </p>
            </div>
          </div>

          <div className="col-span-12 w-full flex flex-col lg:flex-row lg:justify-center md:space-x-4 2xl:space-x-6 pt-2">
            <InteractiveLeftButton
              onClick={() => {}}
              text="Previous"
              className={cn(
                "w-40 border-zinc-600/80 hover:border-zinc-600/5 hover:text-zinc-100 text-zinc-400 font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300"
              )}
            />
            <InteractiveRightButton
              onClick={() => {}}
              text="Next"
              className={cn(
                "w-40 border-secondary-300/40 hover:border-secondary-200/5 text-secondary-400 hover:text-secondary-content font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300"
              )}
            />
          </div>
        </div>
      </section>
    </Wrapper>
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
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-secondary">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-secondary-content opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-cyan-600"></div>
    </motion.button>
  );
});

const InteractiveLeftButton = React.forwardRef<
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
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
        className
      )}
      {...props}
    >
      <span className="inline-block -translate-x-1 transition-all duration-300 group-hover:-translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full origin-left -translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-3 group-hover:opacity-100">
        <ArrowLeft />
        <span>{text}</span>
      </div>
      <div className="absolute right-[15%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-gray-400 transition-all duration-300 group-hover:right-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-l group-hover:from-gray-500 group-hover:to-gray-600"></div>
    </motion.button>
  );
});

const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full h-full grid grid-cols-1 grid-rows-10">
        <div
          className="row-span-9 flex w-full h-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start w-full gap-4",
              "mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-2xl min-w-full"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-end gap-2 row-span-1">
          <button
            className="relative z-40 h-9 w-9 2xl:h-10 2xl:w-10 rounded-full bg-zinc-50 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-5 w-5 2xl:h-6 2xl:w-6 text-zinc-600" />
          </button>

          <button
            className="relative z-40 h-9 w-9 2xl:h-10 2xl:w-10 rounded-full bg-zinc-50 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-5 w-5 2xl:h-6 2xl:w-6 text-zinc-600" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

const Card = ({ card, layout = false }: { card: Card; layout?: boolean }) => {
  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-2xl bg-neutral-900 h-full w-full overflow-hidden flex flex-col items-start justify-start relative cursor-default z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

const BlurImage = ({
  height,
  width,
  src,
  alt,
  className,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Project Preview"}
      {...rest}
    />
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

export default ProjectOverview;
