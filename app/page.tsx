"use client";

// CONTAINERS
import { Hero, Noise, RequstConsultation } from "@/containers";
import { ToastConfig } from "./components/ui";

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

      <ToastConfig />
    </>
  );
}
