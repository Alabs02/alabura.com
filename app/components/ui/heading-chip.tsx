import React from "react";

const HeadingChip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-zinc-800 no-underline cursor-default group relative shadow-2xl shadow-black rounded-full p-px inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(61,145,230,0.6)_0%,rgba(61,145,230,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
        <h6 className="uppercase tracking-wide text-sm lg:text-base font-bricolage text-secondary-50 font-light">
          {children}
        </h6>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-secondary/0 via-secondary/90 to-secondary/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </div>
  );
};

export { HeadingChip };
