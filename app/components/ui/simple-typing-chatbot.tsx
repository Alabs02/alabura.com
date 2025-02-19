"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ImagePath } from "@/constants";
import { cn } from "@/lib/utils";

const _messages = [
  "Building AI-driven experiences...",
  "Optimizing for performance & scalability...",
  "Seamlessly integrating AI into your business...",
  "Creating intelligent digital solutions..."
];

const SimpleTypingChatbot = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const typingRef = useRef<number | null>(null);
  const delayTimeout = useRef<number | null>(null);

  const typeMessage = useCallback((message: string, i = 0) => {
    if (i < message.length) {
      setDisplayedText(message.substring(0, i + 1));
      typingRef.current = window.setTimeout(
        () => typeMessage(message, i + 1),
        50
      );
    } else {
      setIsTyping(false);
      delayTimeout.current = window.setTimeout(() => {
        setIsTyping(true);
        setDisplayedText("");
        setIndex((prevIndex) => (prevIndex + 1) % _messages.length);
      }, 2000);
    }
  }, []);

  useEffect(() => {
    typeMessage(_messages[index]);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
      if (delayTimeout.current) clearTimeout(delayTimeout.current);
    };
  }, [index, typeMessage]);

  return (
    <div className="absolute hidden xl:block xl:right-[6%] 2xl:right-[12%] top-[23%] translate-y-[-23%] 2xl:top-1/23 2xl:-translate-y-1/3 z-[500] transition-all duration-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
          className="flex flex-col justify-center p-5 min-h-14 max-h-20 w-96 rounded-xl bg-zinc-950/50 shadow-[0_0_0_1px] shadow-zinc-500/25"
        >
          <div className="flex items-start w-full gap-2.5">
            <div className="size-6 rounded-full relative">
              <Image
                src={ImagePath.BRAND_LOGO_LIGHT}
                alt="Brand Logo"
                fill
                priority
                quality={100}
                draggable={false}
                className={cn(
                  "size-4/5 object-contain object-center",
                  isTyping && "animate-pulse"
                )}
              />
            </div>
            <span className="text-sm md:text-[15px] font-poppins font-normal">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

SimpleTypingChatbot.displayName = "SimpleTypingChatbot";
export { SimpleTypingChatbot };
