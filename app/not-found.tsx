"use client";

import { ArrowRight } from "lucide-react";
import { RainbowButton, StarsBackground } from "./components/ui";
import { Wrapper } from "./wrapper";
import Link from "next/link";
import { cn } from "./lib/utils";

export default function NotFound() {
  const phoneNumber = "+2349027661950";
  const initialMessage = encodeURIComponent(
    "Hi there! I’d like to get in touch with you."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${initialMessage}`;

  return (
    <>
      <Wrapper footer="!top-0">
        <section className="w-full grid grid-cols-1 place-items-center relative overflow-hidden bg-gradient-to-b from-zinc-900/80 via-background to-zinc-900/80 pt-24">
          <div className="section relative flex flex-col items-center h-full gap-y-10 py-10 xl:py-12 2xl:py-16 z-[2000]">
            <h3 className="text-3xl xl:text-5xl text-center md:text-left font-bricolage mt-2 font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-500">
              Ready to Build Something Exceptional?
            </h3>

            <p className="font-poppins text-neutral-50/90 text-base lg:text-xl text-center w-full">
              Let&apos;s collaborate and turn your vision into a reality.
              Together, we&apos;ll create digital solutions that stand the test
              of time.
            </p>

            <div className="flex flex-col space-y-6 items-center md:flex-row md:space-x-6 md:space-y-0 md:justify-center w-full mt-2">
              <Link
                aria-label="Let's Collaborate"
                href={
                  "mailto:usmanunfolds@alabura.com?subject=Hello%20Alabura&body=I%20wanted%20to%20reach%20out%20regarding..."
                }
                passHref
              >
                <RainbowButton
                  aria-label="Let's Collaborate"
                  className={cn(
                    "inline-flex space-x-2 items-center !rounded-full uppercase tracking-wide text-[15px] text-zinc-950 font-poppins !font-normal !bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]"
                  )}
                >
                  <span>{"Let's Collaborate"}</span>
                  <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" />
                </RainbowButton>
              </Link>

              <Link
                href={whatsappLink}
                target={"_blank"}
                aria-label="Say Hi On WhatsApp"
                passHref
              >
                <RainbowButton
                  aria-label="Say Hi On WhatsApp"
                  className="!rounded-full font-poppins gap-x-2 uppercase text-[15px] !font-normal tracking-wide"
                >
                  <span>{"Say Hi On WhatsApp"}</span>
                  <span className="icon-whatsapp"></span>
                </RainbowButton>
              </Link>
            </div>
          </div>

          <StarsBackground className="z-[1000]" />
        </section>
      </Wrapper>
    </>
  );
}
