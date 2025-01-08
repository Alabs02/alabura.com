import React from "react";
import { motion } from "framer-motion";
import { HeadingChip } from "@/components/ui";
import { nanoid } from "nanoid";
import { ImagePath } from "@/constants";
import { Marquee } from "@/components/ui";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PrestigiousBrands = () => {
  const firstRow = [
    {
      id: nanoid(),
      src: ImagePath.FBN_QUEST_FULL_LOGO,
      className: "invert",
    },
    {
      id: nanoid(),
      src: ImagePath.ACRONIS_FULL_LOGO,
      className: "opacity-75 scale-90",
    },
    {
      id: nanoid(),
      src: ImagePath.BUDGIT_FULL_LOGO,
      className: "",
    },
    {
      id: nanoid(),
      src: ImagePath.SBSC_FULL_LOGO,
      className: "invert",
    },
    {
      id: nanoid(),
      src: ImagePath.LIVEABLE_FULL_LOGO,
      className: "invert opacity-75",
    },
  ];

  const secondRow = [
    {
      id: nanoid(),
      src: ImagePath.GRADELY_FULL_LOGO,
      className: "",
    },
    {
      id: nanoid(),
      src: ImagePath.PLATEAU_STATE_FULL_LOGO,
      className: "",
    },
    {
      id: nanoid(),
      src: ImagePath.ASTRO_MARKETER_FULL_LOGO,
      className: "invert",
    },
    {
      id: nanoid(),
      src: ImagePath.MYLANDLORD_HEAVEN_FULL_LOGO,
      className: "invert opacity-75",
    },
    {
      id: nanoid(),
      src: ImagePath.SSAF_LOGISTICS_LOGO,
      className: "",
    },
  ];

  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col items-center">
          <HeadingChip>PRESTIGIOUS BRANDS</HeadingChip>

          <motion.h2 className="text-3xl xl:text-4xl text-center text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 font-extrabold font-bricolage tracking-wide mt-12">
            Trusted by Industry Leaders
          </motion.h2>

          <motion.h4 className="text-xl text-center text-zinc-50/80 font-poppins font-normal lg:w-[70%] mt-6">
            Collaborating with renowned brands to deliver transformative
            solutions that exemplify excellence, innovation, and trust.
          </motion.h4>
        </motion.div>
      </motion.div>

      <motion.div className="relative mb-10 xl:mb-12 2xl:mb-16 bg-neutral-950/50 overflow-hidden size-full">
        <div className="flex flex-col gap-y-6 items-center justify-center w-full">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((brand) => (
              <div
                key={brand.id}
                className="grid place-items-center min-h-10 min-w-44 relative overflow py-3 px-3"
              >
                <Image
                  src={brand.src}
                  alt={""}
                  fill
                  draggable={false}
                  className={cn(
                    "size-full object-contain grayscale",
                    brand.className
                  )}
                />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((brand) => (
              <div
                key={brand.id}
                className="grid place-items-center min-h-10 min-w-44 relative overflow py-3 px-3"
              >
                <Image
                  src={brand.src}
                  alt={""}
                  fill
                  draggable={false}
                  className={cn(
                    "size-full object-contain grayscale",
                    brand.className
                  )}
                />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute z-[2500] inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950"></div>
          <div className="pointer-events-none absolute z-[2500] inset-y-0 right-0 w-1/3 bg-gradient-to-l from-neutral-950"></div>
        </div>
      </motion.div>
    </>
  );
};

PrestigiousBrands.displayName = "PrestigiousBrands";
export { PrestigiousBrands };
