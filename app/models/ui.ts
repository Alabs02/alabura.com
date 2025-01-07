import { MotionProps } from "framer-motion";
import { JSX, ReactNode } from "react";

export type ScrollProgressProps = {
  progress: number;
  className?: string;
}

export type FloatingNavItem = {
  id: string;
  label: string;
  href?: string;
  icon?: JSX.Element;
  subItems?: SubItems[];
}

export type SubItems = {
  id: string;
  href: string;
  title: string;
  description: string;
}

export type FloatingNavProps = {
  className?: string;
  navItems: FloatingNavItem[];
}

export type ShinyTextProps = {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export type AnimatedFeatureCardProps = {
  cta?: string;
  heading: string;
  subheading: string;
  className?: string;
  showGradient?: boolean;
  containerClassName?: string;
  Skeleton: React.ElementType;
};

export type TimelineEntry = {
  id: string;
  positionTitle: string;
  companyName: string;
  dates: {
    start: string;
    end: string;
  };
  location: string;
  content: React.JSX.Element;
}

export type InteractiveButtonProps = MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
}