import { MotionProps } from "framer-motion";
import { JSX } from "react";

export type ScrollProgressProps = {
  progress: number;
  className?: string;
}

export type FloatingNavItem = {
  label: string;
  href?: string;
  icon?: JSX.Element;
  subItems?: SubItems[];
}

export type SubItems = {
  href: string;
  title: string;
  description: string;
}

export type FloatingNavProps = {
  className?: string;
  navItems: FloatingNavItem[];
}

export type InteractiveButtonProps = MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
}