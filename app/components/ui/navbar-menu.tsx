"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import clsx from "clsx";
import debounce from "lodash/debounce";
import { ChevronDown } from "lucide-react";
import { AnimatedLink } from "./animated-link";
import { nanoid } from "nanoid";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  activeRoute: boolean;
  children?: React.ReactNode;
}) => {
  const updateActiveState = debounce(() => {
    setActive(item);
  }, 500);

  return (
    <div onMouseEnter={updateActiveState} className="relative">
      <AnimatedLink
        id={nanoid()}
        label={item}
        className={clsx(
          active && "!text-primary-200/95",
          !active && "animated-link"
        )}
        suffix={
          <ChevronDown
            className={clsx(
              "relative top-[1px] h-4 w-4 transition duration-500 group-hover:rotate-180",
              { "group-data-[state=open]:rotate-180": active }
            )}
            aria-hidden="true"
          />
        }
      />

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-[42%] lg:translate-x-[-42%] 2xl:left-[50%] 2xl:translate-x-[-50%] mx-auto lg:pt-2 2xl:pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-primary-950/[0.99] backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-200/20 shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href
}: {
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex space-x-2 transition duration-300 border border-transparent bg-transparent hover:backdrop-blur-md hover:shadow-md hover:bg-primary-900/55 p-2 hover:border-primary-200/20 active:border-primary focus:border-primary-200/95 rounded-lg"
    >
      <div>
        <h4 className="text-base font-bold mb-1 text-primary-content font-bricolage">
          {title}
        </h4>
        <p className="text-primary-content/60 text-sm max-w-[10rem] xl:max-w-[14rem] font-inter">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
