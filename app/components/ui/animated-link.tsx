"use client";

// STYLE
import "@/styles/animated-link.scss";

import React, { FC } from "react";
import Link from "next/link";
import { UI } from "@/models";
import clsx from "clsx";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const AnimatedLink: FC<
  UI.FloatingNavItem & {
    className?: string;
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
  }
> = ({ id, label, href, className, prefix, suffix }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return href ? (
    <Link
      aria-label={label}
      key={`animated-link-${id}`}
      data-hover-label={label}
      href={href}
      prefetch={true}
      className={clsx(
        "text-sm md:text-[15px] leading-6 tracking-normal font-normal md:font-medium font-poppins text-zinc-50 hover:text-secondary-300/95 active:text-secondary focus:text-secondary transition-colors duration-300",
        isActive && "!text-secondary-300/95 font-semibold",
        !isActive && "animated-link",
        className
      )}
    >
      {prefix ? prefix : <></>}
      <span className={clsx("animated-link__label")}>{label}</span>
      {suffix ? suffix : <></>}
    </Link>
  ) : (
    <motion.a
      aria-label={label}
      data-state={label ? "open" : "close"}
      data-hover-label={label}
      className={clsx(
        "group !flex items-center gap-x-1 text-sm md:text-[15px] leading-6 tracking-normal font-medium font-poppins text-[inherit] transition-colors duration-300",
        className
      )}
    >
      {prefix ? prefix : <></>}
      <span className={clsx("animated-link__label")}>{label}</span>
      {suffix ? suffix : <></>}
    </motion.a>
  );
};
