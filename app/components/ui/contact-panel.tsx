"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type ContactPanel = {
  icon: string;
  heading: string;
  subheading: string;
  clipBoardText: string;
  className?: string;
};
const ContactPanel: React.FC<ContactPanel> = ({
  icon,
  heading,
  subheading,
  className,
  clipBoardText,
}) => {
  const [copied, setCopied] = useState(false);

  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <>
      <motion.div
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn("group flex flex-col space-y-2 min-w-16 py-3 px-6 text-primary-content relative bg-zinc-800/40", className)}
      >
        <motion.div className="absolute left-0 top-0 h-full w-1 z-[2100] bg-gradient-to-br from-primary-500 via-indigo-500 to-purple-500 group-hover:shadow-[0_0_8px_2px_rgba(118,69,217,0.5)]"></motion.div>

        <motion.div className="flex items-center space-x-2 text-primary-content/75 relative z-[2000]">
          <motion.div className="h-auto w-auto relative grid place-items-center">
            <i className={cn("font-poppins text-lg", icon)}></i>
          </motion.div>

          <motion.h3 className="font-bricolage font-semibold uppercase tracking-wide text-sm">
            {heading}
          </motion.h3>
        </motion.div>

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
          aria-label={`Copy ${heading}`}
          onClick={copyTextToClipboard}
          className="flex items-start space-x-2 font-poppins font-light text-sm xl:text-base relavtive z-[2000]"
        >
          <motion.span>{subheading}</motion.span>

          <motion.span className="inline-flex h-full min-w-6 max-w-8 bg-gradient-to-br from-primary-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            <AnimatePresence mode={"popLayout"}></AnimatePresence>
            {copied ? (
              <motion.i
                key="clipboard-check"
                className="icon-clipboard-check font-poppins text-[20px] xl:text-[21px]"
                initial={{ scale: 0, y: -5 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.i
                key="clipboard-text"
                className="icon-clipboard-text font-poppins text-[20px] xl:text-[21px]"
                initial={{ scale: 0, y: -5 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.span>
        </motion.button>
      </motion.div>
    </>
  );
};

export { ContactPanel };
