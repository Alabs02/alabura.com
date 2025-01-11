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
import { nanoid } from "nanoid";
import kebabCase from "lodash/kebabCase";
import { useRouter } from "next/navigation";


const projectDetails: any = {
  "my-landlord-heaven": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.MYLANDLORD_HEAVEN_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Next Js",
      },
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "MySQL DB",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "My Landlord Heaven",
    category: "PropTech",
    logo: ImagePath.MYLANDLORD_HEAVEN_LOGO,
    fullTitle: "Elevating Property Ownership Experience",
    description:
      "MyLandlordHeaven offers landlords guaranteed rental income, property upgrade financing, and comprehensive management services, ensuring optimized returns and peace of mind.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
  "onecopy-business-ai": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.ONECOPY_AI,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Vue Js",
      },
      {
        id: nanoid(),
        title: "Vuex",
      },
      {
        id: nanoid(),
        title: "GSAP",
      },
      {
        id: nanoid(),
        title: "Tailwind CSS",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Daisy UI",
      },
    ],
    title: "Onecopy Business AI",
    category: "AI & Content Creation",
    logo: ImagePath.ONECOPY_AI_LOGO,
    fullTitle: "Onecopy Business Marketing AI",
    description:
      "An intelligent content generation platform leveraging advanced AI models to create tailored, high-quality copy for businesses and individuals, enhancing productivity and creativity.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
  "phc-accountability-tracka": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.PHC_TRACKA,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Next Js",
      },
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Recoil",
      },
      {
        id: nanoid(),
        title: "Tailwind CSS",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Node Js",
      },
    ],
    title: "PHC Accountability Tracka",
    category: "Healthcare & Civic Tech",
    logo: ImagePath.PHC_LOGO,
    fullTitle: "Primary Health Care Accountability Tracka",
    description:
      "A community-driven platform empowering citizens to report and monitor the state of primary healthcare centers, providing actionable insights for advocacy and fostering accountability among stakeholders.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
  gradely: {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.GRADELY_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Vue Js",
      },
      {
        id: nanoid(),
        title: "Vuex",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "MySQL DB",
      },
    ],
    title: "Gradely",
    category: "EdTech",
    logo: ImagePath.GRADELY_LOGO,
    fullTitle: "Revolutionizing Personalized Education",
    description:
      "A personalized learning platform for primary and secondary students, leveraging adaptive assessments and interactive lessons to close learning gaps and build subject mastery.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
  liveable: {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.LIVEABLE_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Next Js",
      },
      {
        id: nanoid(),
        title: "Turbo Repo",
      },
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "MySQL DB",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "Liveable",
    category: "UrbanTech & PropTech",
    logo: ImagePath.LIVEABLE_LOGO,
    fullTitle: "Transforming Urban Living Spaces",
    description:
      "Liveable is a platform dedicated to enhancing the quality of urban living by providing innovative solutions for sustainable and efficient housing in Nigeria.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
  "ssaf-logistics": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.SSAF_LOGISTICS_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "SSAF Logistics",
    category: "Logistics & Supply Chain",
    logo: ImagePath.SSAF_LOGISTICS_LOGO,
    fullTitle: "Optimizing Logistics Operations via innovation",
    description:
      "SSAF Logistics specializes in transporting project-critical cargo to challenging destinations, ensuring timely and efficient delivery.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
  sims: {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.SIMS_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "Vue Js",
      },
      {
        id: nanoid(),
        title: "Vuex",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "SIMS",
    category: "EdTech & GovTech",
    logo: ImagePath.SIMS_LOGO,
    fullTitle: "Revolutionizing Educational Administration in Plateau State",
    description:
      "SIMS, the cloud-based platform of the Plateau State Ministry of Education, streamlines school management by integrating student records, academic progress, and communication tools for efficiency and compliance.",
    projectDesc: () => <></>,
    projectJourney: () => <></>,
    contributions: () => <></>,
    solutions: () => <></>,
    lessons: () => <></>,
    results: () => <></>,
  },
};

const ProjectOverview = () => {
  const { project } = useParams();
  const router = useRouter();

  const projectAnalysis = projectDetails[project as any];

  const cards = projectAnalysis?.images?.map((card: any) => (
    <Card key={card.src} card={card} />
  ));

  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoBack, setCanGoBack] = useState(true);

  useEffect(() => {
    setCanGoBack(project !== "onecopy-business-ai");
    setCanGoNext(project !== "sims");
  }, [project]);

  const patterns = [
    [17, 1],
    [16, 3],
    [13, 5],
    [10, 6],
    [9, 7],
  ];

  const onNext = () => {
    switch (project) {
      case "onecopy-business-ai":
        router.push(`/project/my-landlord-heaven`);
        return;
      case "my-landlord-heaven":
        router.push(`/project/gradely`);
        return;
      case "gradely":
        router.push(`/project/phc-accountability-tracka`);
        return;
      case "phc-accountability-tracka":
        router.push(`/project/liveable`);
        return;
      case "liveable":
        router.push(`/project/ssaf-logistics`);
        return;
      case "ssaf-logistics":
        router.push(`/project/sims`);
        return;
      default:
        router.push(`/project/onecopy-business-ai`);
        return;
    }
  };

  const onPrevious = () => {
    switch (project) {
      case "my-landlord-heaven":
        router.push(`/project/onecopy-business-ai`);
        return;
      case "gradely":
        router.push(`/project/my-landlord-heaven`);
        return;
      case "phc-accountability-tracka":
        router.push(`/project/gradely`);
        return;
      case "liveable":
        router.push(`/project/phc-accountability-tracka`);
        return;
      case "ssaf-logistics":
        router.push(`/project/liveable`);
        return;
      case "sims":
        router.push(`/project/ssaf-logistics`);
        return;
      default:
        router.push(`/project/onecopy-business-ai`);
        return;
    }
  };

  if (!project) {
    notFound();
  }

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
              {projectAnalysis?.title} - {projectAnalysis?.category}
            </h3>

            <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-ful max-w-[70%] mt-2">
              {projectAnalysis?.description}
            </p>

            <div className="flex items-center flex-wrap space-x-4 mt-4">
              {projectAnalysis?.stack.map((item: any) => (
                <motion.div
                  key={item?.id}
                  className={cn(
                    "ring-1 ring-yellow-500/10 bg-zinc-950/85 no-underline cursor-default group relative shadow-2xl shadow-black rounded-full p-px inline-block",
                    {
                      "ring-indigo-50/10": kebabCase(item?.title) === "recoil",
                      "ring-pink-50/10": kebabCase(item?.title) === "sass",
                      "ring-slate-50/10": kebabCase(item?.title) === "next-js",
                      "ring-cyan-50/10": kebabCase(item?.title) === "vuex",
                      "ring-secondary-50/10":
                        kebabCase(item?.title) === "vue-js",
                      "ring-purple-50/10": kebabCase(item?.title) === "redux",
                      "ring-green-50/10":
                        kebabCase(item?.title) === "daisy-ui" ||
                        kebabCase(item?.title) === "gsap" ||
                        kebabCase(item?.title) === "node-js",
                      "ring-blue-50/10":
                        kebabCase(item?.title) === "react-js" ||
                        kebabCase(item?.title) === "docker" ||
                        kebabCase(item?.title) === "tailwind-css",
                      "ring-red-50/10": kebabCase(item?.title) === "laravel",
                    }
                  )}
                >
                  <div
                    className={cn(
                      "relative bg-yellow-950/20 text-yellow-50/90 flex space-x-2 items-center z-10 rounded-full py-0.5 px-3",
                      {
                        "bg-indigo-950/20 text-indigo-50/90":
                          kebabCase(item?.title) === "recoil",
                        "bg-pink-950/20 text-pink-50/90":
                          kebabCase(item?.title) === "sass",
                        "bg-slate-950/20 text-slate-50/90":
                          kebabCase(item?.title) === "next-js",
                        "bg-cyan-950/20 text-cyan-50/90":
                          kebabCase(item?.title) === "vuex",
                        "bg-secondary-950/20 text-secondary-50/90":
                          kebabCase(item?.title) === "vue-js",
                        "bg-purple-950/20 text-purple-50/90":
                          kebabCase(item?.title) === "redux",
                        "bg-green-950/20 text-green-50/90":
                          kebabCase(item?.title) === "daisy-ui" ||
                          kebabCase(item?.title) === "gsap" ||
                          kebabCase(item?.title) === "node-js",
                        "bg-blue-950/20 text-blue-50/90":
                          kebabCase(item?.title) === "react-js" ||
                          kebabCase(item?.title) === "docker" ||
                          kebabCase(item?.title) === "tailwind-css",
                        "bg-red-950/20 text-red-50/90":
                          kebabCase(item?.title) === "laravel",
                      }
                    )}
                  >
                    <span className="tracking-wide text-sm lg:text-base font-bricolage font-light">
                      {item?.title}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-yellow-500/90 to-white/0 transition-opacity duration-500",
                      {
                        "via-indigo-500/90":
                          kebabCase(item?.title) === "recoil",
                        "via-pink-500/90": kebabCase(item?.title) === "sass",
                        "via-slate-500/90":
                          kebabCase(item?.title) === "next-js",
                        "via-cyan-500/90": kebabCase(item?.title) === "vuex",
                        "via-secondary-500/90":
                          kebabCase(item?.title) === "vue-js",
                        "via-purple-500/90": kebabCase(item?.title) === "redux",
                        "via-green-500/90":
                          kebabCase(item?.title) === "daisy-ui",
                        "via-green-700/90":
                          kebabCase(item?.title) === "gsap" ||
                          kebabCase(item?.title) === "node-js",
                        "via-blue-500/90":
                          kebabCase(item?.title) === "react-js" ||
                          kebabCase(item?.title) === "docker" ||
                          kebabCase(item?.title) === "tailwind-css",
                        "via-error/90": kebabCase(item?.title) === "laravel",
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
          <div className="col-span-12 lg:col-span-1">
            <div className="w-auto h-12 relative overflow-hidden flex items-start justify-start">
              <Image
                src={projectAnalysis?.logo}
                alt={""}
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

          <div className="col-span-12 lg:col-span-10 grid grid-cols-1 gap-y-6 lg:gap-y-10">
            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Project Description
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {""}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Role & Achievements/Contributions
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {""}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Project Journey
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {""}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Challenges & Solutions
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {""}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Lessons Learned
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {""}
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-4 items-start">
              <h4 className="font-bricolage font-extrabold tracking-wide text-pretty text-2xl lg:text-3xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                Results and Impact
              </h4>

              <p className="font-poppins font-normal text-sm text-pretty lg:text-base text-zinc-50/80">
                {""}
              </p>
            </div>
          </div>

          <div className="col-span-12 w-full flex flex-col lg:flex-row lg:justify-center space-y-4 md:space-y-0 md:space-x-4 2xl:space-x-6 pt-2">
            <InteractiveLeftButton
              onClick={onPrevious}
              text="Previous"
              disabled={!canGoBack}
              className={cn(
                "w-40 border-zinc-600/80 hover:border-zinc-600/5 hover:text-zinc-100 text-zinc-400 font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300",
                !canGoBack && "disabled:opacity-50 pointer-events-none"
              )}
            />
            <InteractiveRightButton
              onClick={onNext}
              text="Next"
              disabled={!canGoNext}
              className={cn(
                "w-40 border-secondary-300/40 hover:border-secondary-200/5 text-secondary-400 hover:text-secondary-content font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300",
                !canGoNext && "disabled:opacity-50 pointer-events-none"
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

const Carousel = ({ items, initialScroll = 0 }: UI.CarouselProps) => {
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

const Card = ({ card, layout = false }: { card: UI.Card; layout?: boolean }) => {
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
        "transition duration-300 object-top",
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
