"use client";

import React, { FC, useEffect, useState } from "react";
import { AnimatedLink, AnimatedMenu, RainbowButton } from "@/components/ui";
import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import Link from "next/link";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";


// MODELS
import { UI } from "@/models";
import { HireButtonCopy, ImagePath } from "@/constants";

export const FloatingNav: FC<UI.FloatingNavProps> = ({ navItems }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          onMouseLeave={() => setActive(null)}
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: visible ? 1 : 0,
          }}
          transition={{
            type: "tween",
            ease: easeInOut,
            duration: 0.3,
          }}
          className="fixed top-5 inset-x-0 z-[5000] flex items-center justify-center max-w-fit mx-auto rounded-full md:space-x-4 lg:space-x-6 py-3 px-6 border border-zinc-200/25 bg-zinc-950/65 backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        >
          <Link href="/" prefetch passHref>
            <motion.div
              transition={{
                type: "tween",
                ease: easeInOut,
                duration: 0.3,
              }}
              whileHover={{
                scale: 1.1,
              }}
              className="group relative h-6 w-6 xl:h-7 xl:w-7 grid place-items-center"
            >
              <Image
                src={ImagePath.BRAND_LOGO_LIGHT}
                alt="Alabura's Brand Logo"
                fill
                priority
                draggable={false}
                className="transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />

              <Image
                src={ImagePath.BRAND_LOGO}
                alt="Alabura's Brand Logo"
                fill
                priority
                draggable={false}
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          </Link>

          {navItems.map((navItem) =>
            isEmpty(navItem?.subItems) ? (
              <AnimatedLink key={navItem.id} {...navItem} />
            ) : mounted ? (
              <AnimatedMenu
                key={navItem.id}
                active={active}
                setActive={setActive}
                {...navItem}
              />
            ) : null
          )}

          <RainbowButton className="!rounded-full font-poppins">
            {HireButtonCopy}
          </RainbowButton>
        </motion.nav>
      </AnimatePresence>
    </>
  );
};
