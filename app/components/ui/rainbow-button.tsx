"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";
type RainbowButtonProps = MotionProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
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
      className={cn(
        "group !border-zinc-600/50 hover:!border-zinc-50/50 focus:!border-zinc-50/50 relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-zinc-50 hover:text-zinc-950 focus:text-zinc-950 text-sm md:!text-[15px] transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:[filter:blur(calc(0.8*1rem))]",

        "bg-[linear-gradient(#000000,#000000),linear-gradient(#000000_50%,rgba(0,0,0,0.5)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        "hover:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        "focus:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
