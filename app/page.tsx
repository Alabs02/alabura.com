"use client";

// CONTAINERS
import {
  Approach,
  Hero,
  Noise,
  RequstConsultation,
  Services,
  Technologies,
  TechnologiesArtifactTopLeft,
  TechnologiesArtifactTopRight,
  TechnologiesArtifactBottomRight
} from "@/containers";
import { DotPattern, ToastConfig } from "@/components/ui";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <header className="w-full min-h-screen flex flex-col items-center relative top-[95px]">
        <Hero />
      </header>

      <section className="w-full min-h-auto grid grid-cols-1 relative overflow-hidden top-[95px]">
        <div className="flex flex-col items-center w-full h-full relative">
          <RequstConsultation />
        </div>

        <Noise />
      </section>

      <section className="w-full min-h-screen grid grid-cols-1 relative overflow-hidden top-[95px]">
        <div className="flex flex-col items-center w-full h-full relative">
          <Services />
        </div>

        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "-top-2 [mask-image:linear-gradient(to_bottom_right,transparent,white,transparent,transparent,transparent)]"
          )}
        />
      </section>

      <section className="w-full min-h-screen grid grid-cols-1 relative overflow-hidden top-[95px] bg-zinc-900">
        <div className="flex flex-col items-center w-full h-full relative">
          <Approach />
        </div>
      </section>

      <section className="w-full min-h-screen grid grid-cols-1 relative overflow-hidden top-[95px] bg-zinc-950">
        <div className="flex flex-col items-center w-full h-full relative">
          <Technologies />
        </div>

        <TechnologiesArtifactTopRight />
        <TechnologiesArtifactTopLeft />
        <TechnologiesArtifactBottomRight />
      </section>

      <ToastConfig />
    </>
  );
}
