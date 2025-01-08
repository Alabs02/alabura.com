import React from "react";
import { motion } from "framer-motion";
import { HeadingChip } from "@/components/ui";

const PrestigiousBrands = () => {
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
    </>
  );
};

PrestigiousBrands.displayName = "PrestigiousBrands";
export { PrestigiousBrands };
