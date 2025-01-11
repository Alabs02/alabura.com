"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FloatingNav } from "@/components/ui";
import { NavItems } from "@/constants";
import { Footer } from "@/containers";

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  theme?: string;
  footer?: string;
};

const Wrapper: React.FC<WrapperProps> = ({ children, footer, theme = "dark" }) => {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [pathname, theme]);

  return (
    <>
      <FloatingNav navItems={NavItems} />

      {children}

      <script>
        {`document.documentElement.setAttribute('data-theme', '${theme}');`}
      </script>

      <Footer className={footer} />
    </>
  );
};

Wrapper.displayName = "Wrapper";
export { Wrapper };
