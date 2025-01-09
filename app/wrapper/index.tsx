import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { FloatingNav } from "@/components/ui";
import { NavItems } from "@/constants";

type WrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  theme?: string;
};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  theme = "dark"
}) => {
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
    </>
  );
};

Wrapper.displayName = "Wrapper";
export { Wrapper };
