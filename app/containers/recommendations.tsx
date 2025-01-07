import React from "react";
import { motion } from "framer-motion";
import { HeadingChip } from "@/components/ui";

const Recommendations = () => {
  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <HeadingChip>Professional Journey</HeadingChip>

        <h1 className="mt-10">Hello</h1>
      </motion.div>
    </>
  );
};

Recommendations.displayName = "Recommendations";
export { Recommendations };
