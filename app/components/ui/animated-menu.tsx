"use client";

// STYLES
import "@/styles/animated-link.scss";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { UI } from "@/models";
import {
  HoverEffect,
  InteractiveHoverButton,
  SparklesText,
} from "@/components/ui";

import { MenuItem } from "@/components/ui";
import { HeroBtnCopy } from "@/constants";

export const AnimatedMenu: FC<
  UI.FloatingNavItem & {
    active: string | null;
    setActive: React.Dispatch<React.SetStateAction<string | null>>;
  }
> = ({ href, label, active, subItems, setActive }) => {
  const pathname = usePathname();
  const activeRoute = pathname.includes(href ? href : "");

  const serializedSubItems = subItems ? subItems : [];

  return (
    <MenuItem
      setActive={setActive}
      active={active}
      item={label}
      activeRoute={activeRoute}
    >
      <HoverEffect items={serializedSubItems} />

      <div className="flex flex-col w-full items-center gap-y-2">
        <SparklesText
          sparklesCount={3}
          className="2xl:text-lg lg:text-base text-sm text-primary-400 font-medium font-bricolage"
          text="Have a Vision? Let's turn it into reality."
        />
        <InteractiveHoverButton
          text={HeroBtnCopy}
          className="!w-auto"
        />
      </div>
    </MenuItem>
  );
};
