"use client";

import { UI } from "@/models";
import { cn } from "@/lib/utils";
import { Wrapper } from "@/wrapper";
import { ImagePath } from "@/constants";
import Image, { ImageProps } from "next/image";
import { GridPattern, HeadingChip } from "@/components/ui";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nanoid } from "nanoid";
import kebabCase from "lodash/kebabCase";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { BASE_URL } from "@/sitemap";
import React, { createContext, useEffect, useId, useState } from "react";

const projectDetails: any = {
  "my-landlord-heaven": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.MYLANDLORD_HEAVEN_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Next Js",
      },
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "MySQL DB",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "My Landlord Heaven",
    category: "PropTech",
    logo: ImagePath.MYLANDLORD_HEAVEN_LOGO,
    fullTitle: "Elevating Property Ownership Experience",
    description:
      "MyLandlordHeaven offers landlords guaranteed rental income, property upgrade financing, and comprehensive management services, ensuring optimized returns and peace of mind.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            The Road to Seamless Collaboration:
          </p>

          <p className="pl-2.5">
            The project began with a focus on building a shared{" "}
            <span className="font-medium">component</span> library to unify the
            team&apos;s efforts. Using{" "}
            <span className="font-medium">Storybook</span>, I ensured components
            were well-documented and reusable, streamlining development
            workflows.
          </p>

          <p className="my-4 pl-2.5">
            To address scalability, I set up a{" "}
            <span className="font-medium">micro-frontend architecture</span>{" "}
            that allowed independent services to communicate seamlessly, all
            unified under one authentication service. Alongside these
            architectural improvements, I created{" "}
            <span className="font-medium">starter kits</span> and tools to
            accelerate onboarding and project setup, documenting everything
            comprehensively with <span className="font-medium">Docusaurus</span>
            .
          </p>

          <p className="pl-2.5">
            A significant aspect of the journey was{" "}
            <span className="font-medium">mentorship</span>, where I worked
            closely with three engineers, identifying their challenges,
            providing guidance, and fostering their growth into exceptional
            professionals.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Senior Frontend
            Engineer/Frontend Lead
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Built a robust{" "}
                <span className="font-medium">component library</span> for the
                team, leveraging <span className="font-medium">Storybook</span>{" "}
                for seamless documentation and collaboration.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Analyzed existing codebases and developed{" "}
                <span className="font-medium">
                  utility functions, custom hooks, an icon library, and
                  React/Next.js starter kits,
                </span>{" "}
                all documented with{" "}
                <span className="font-medium">Docusaurus</span>.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Established a scalable{" "}
                <span className="font-medium">micro-frontend architecture</span>
                , integrating multiple services with a unified authentication
                system.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Mentored{" "}
                <span className="font-medium">three frontend engineers</span>,
                nurturing their growth and enhancing team productivity.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Actively participated in{" "}
                <span className="font-medium">
                  sprint planning, strategic meetings, and code reviews
                </span>
                , driving high-quality deliverables.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>Legacy Codebase and
            Inconsistencies:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The existing codebase lacked standardization and reusable tools.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Developed utility
                functions, custom hooks, and a React/Next.js starter kit to
                ensure consistency and reduce redundancy.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>Scalability
            Requirements:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Building a micro-frontend architecture that integrates
                seamlessly with a unified authentication system.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Designed a
                flexible architecture that allowed for independent service
                deployment while maintaining a cohesive user experience.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Mentorship
            Responsibilities:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Balancing technical tasks with mentoring team members and
                addressing their skill gaps.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Tailored guidance
                to each engineer’s needs, fostering their confidence and
                capabilities.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Improved Technical Expertise:
                </span>{" "}
                My understanding of{" "}
                <span className="font-medium">micro-frontend architecture</span>{" "}
                and <span className="font-medium">microservices</span> advanced
                significantly.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Documentation as a Superpower:
                </span>{" "}
                By using tools like{" "}
                <span className="font-medium">Storybook</span> and{" "}
                <span className="font-medium">Docusaurus</span>, I learned the
                importance of clear, accessible documentation for team
                efficiency.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Empathy in Leadership:</span>{" "}
                Mentoring taught me to identify team members&apos; pain points
                and help them grow into their potential.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Beyond Code:</span> The CTO&apos;s
                guidance underscored the criticality of building solutions that
                are not only functional but also ethical, scalable, and
                user-focused.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The <span className="font-medium">component library</span> and{" "}
                <span className="font-medium">utility tools</span> reduced
                development time by <span className="font-medium">40%</span>,
                improving team productivity.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The{" "}
                <span className="font-medium">micro-frontend architecture</span>{" "}
                enhanced scalability, allowing services to operate independently
                while maintaining a seamless user experience.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Engineers I mentored are now thriving in the tech space,
                contributing significantly to their projects and organizations.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Improved onboarding and team efficiency through well-documented
                starter kits and tools, setting a solid foundation for future
                projects.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Built a strong culture of collaboration, learning, and
                responsibility within the team.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
  "onecopy-business-ai": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.ONECOPY_AI,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Vue Js",
      },
      {
        id: nanoid(),
        title: "Vuex",
      },
      {
        id: nanoid(),
        title: "Node Js",
      },
      {
        id: nanoid(),
        title: "Nest Js",
      },
      {
        id: nanoid(),
        title: "GSAP",
      },
      {
        id: nanoid(),
        title: "Tailwind CSS",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Daisy UI",
      },
    ],
    title: "Onecopy Business AI",
    category: "AI & Content Creation",
    logo: ImagePath.ONECOPY_AI_LOGO,
    fullTitle: "Onecopy Business Marketing AI",
    description:
      "An intelligent content generation platform leveraging advanced AI models to create tailored, high-quality copy for businesses and individuals, enhancing productivity and creativity.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Key Contributions and Achievements:
          </p>

          <p className="pl-2.5">
            The project began with an in-depth{" "}
            <span className="font-medium">UI/UX audit</span> to identify pain
            points in the existing design. By transforming outdated components
            into modern, interactive ones, the platform became more engaging and
            intuitive.
          </p>

          <p className="my-4 pl-2.5">
            Development workflows were streamlined by creating a bespoke{" "}
            <span className="font-medium">component library</span> and a custom{" "}
            <span className="font-medium">CSS icon library</span>, saving the
            team valuable time. I also facilitated{" "}
            <span className="font-medium">agile ceremonies</span> like sprint
            planning and daily stand-ups, ensuring clear priorities and
            effective collaboration.
          </p>

          <p className="pl-2.5">
            As we progressed, I improved the platform&apos;s{" "}
            <span className="font-medium">content and SEO</span>, helping it
            rank better while integrating{" "}
            <span className="font-medium">Google Analytics</span> for actionable
            insights. Deployment was handled using{" "}
            <span className="font-medium">DigitalOcean droplets</span> and an
            Apache server, ensuring a smooth and scalable launch.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Team Lead/Senior
            Frontend Engineer & Project Manager
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Conducted <span className="font-medium">UI/UX audits</span>,
                modernizing outdated components into engaging, user-friendly
                designs.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Designed and implemented a bespoke{" "}
                <span className="font-medium">component library</span> and a
                custom <span className="font-medium">CSS icon library</span>,
                significantly accelerating development efficiency.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Spearheaded{" "}
                <span className="font-medium">sprint planning sessions</span>,
                managed sprint backlogs, and facilitated daily stand-ups,
                ensuring seamless team collaboration.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Enhanced the application&apos;s{" "}
                <span className="font-medium">copy and SEO</span>, improving
                visibility and engagement while integrating{" "}
                <span className="font-medium">Google Analytics</span> for
                data-driven user behavior insights.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Managed deployment on{" "}
                <span className="font-medium">DigitalOcean</span>, utilizing
                droplets and an Apache server for a robust hosting solution.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Convinced the CEO to introduce{" "}
                <span className="font-medium">tier names and logos</span>,
                adding personality and brand identity to the platform.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>Requirement Changes
            Midway:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>Frequent changes required quick adaptability.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Leveraged agile
                principles to reprioritize tasks and accommodate new
                requirements while maintaining progress.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>Time Constraints:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>Limited time necessitated trade-offs in features.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Focused on
                delivering high-impact components first while deferring
                lower-loading={"eager"} features.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Unfamiliar
            Functionalities:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>Some components and features were entirely new to me.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Invested time in
                research and learning, ultimately delivering high-quality
                implementations.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Adaptability is Key:</span> Agile
                principles proved invaluable in navigating changing requirements
                and time constraints.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Innovation through Collaboration:
                </span>{" "}
                Open communication with stakeholders, like the CEO, led to
                creative branding ideas that added significant value.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Continuous Learning:</span>{" "}
                Tackling unfamiliar features enhanced my problem-solving skills
                and technical expertise.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Efficiency through Tools:</span>{" "}
                Developing custom libraries significantly streamlined workflows
                and will remain a best practice in future projects.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Revamped UI/UX designs increased user engagement and
                satisfaction.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The bespoke component library and custom CSS icon library
                reduced development time by{" "}
                <span className="font-medium">30%</span>, improving team
                productivity.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Enhanced SEO and copy boosted platform visibility, attracting
                more users and improving search rankings.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Google Analytics integration provided actionable insights,
                enabling data-driven decision-making.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Successful deployment on DigitalOcean ensured a robust and
                scalable infrastructure for the platform.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The new tier names and logos added personality and enhanced the
                brand&apos;s appeal, positively resonating with users and
                stakeholders.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
  "phc-accountability-tracka": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.PHC_TRACKA,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Next Js",
      },
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Recoil",
      },
      {
        id: nanoid(),
        title: "Tailwind CSS",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Node Js",
      },
    ],
    title: "PHC Accountability Tracka",
    category: "Healthcare & Civic Tech",
    logo: ImagePath.PHC_LOGO,
    fullTitle: "Primary Health Care Accountability Tracka",
    description:
      "A community-driven platform empowering citizens to report and monitor the state of primary healthcare centers, providing actionable insights for advocacy and fostering accountability among stakeholders.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            The Road to Empowering Accountability:
          </p>

          <p className="pl-2.5">
            I joined the project mid-way, tasked with developing two crucial
            dashboards to provide actionable insights for stakeholders. With
            minimal onboarding, I quickly familiarized myself with the existing
            codebase, allowing me to deliver results efficiently.
          </p>

          <p className="my-4 pl-2.5">
            Collaboration was central to this project, as I worked closely with
            the team and the PM to align on goals and ensure a smooth workflow.
            From development to deployment, the journey emphasized teamwork and
            technical precision, culminating in a platform that empowers
            communities to monitor and advocate for better healthcare services.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Senior Frontend
            Engineer
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Joined the project mid-way and quickly adapted with{" "}
                <span className="font-medium">minimal onboarding</span>,
                seamlessly integrating into the team.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivered tasks efficiently and on time, demonstrating a high
                level of productivity under tight deadlines.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Built two{" "}
                <span className="font-medium">data-driven dashboards</span> from
                start to completion, ensuring user-friendly interfaces for
                monitoring healthcare centers.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Collaborated closely with team members and the{" "}
                <span className="font-medium">Project Manager</span>, fostering
                clear communication and alignment.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Enhanced my proficiency in{" "}
                <span className="font-medium">Next.js</span>, contributing to
                the development and deployment phases.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Rapidly understood the existing codebase, making impactful
                changes with speed and precision.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>Mid-Project Onboarding:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>Joining the project mid-way with minimal context.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Leveraged my
                ability to quickly analyze and understand the codebase, allowing
                me to contribute effectively from day one.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>Tight Timelines:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivering high-quality dashboards under strict deadlines.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Focused on
                efficient task management, prioritizing key deliverables to
                ensure timely completion.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Complex Codebase:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Understanding and modifying an existing codebase with minimal
                documentation.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Used my expertise
                in debugging and logical structuring to navigate and improve the
                codebase rapidly.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Adaptability is Key:</span>{" "}
                Joining a project mid-way strengthened my ability to adapt
                quickly and contribute without delays.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Collaboration is Critical:</span>{" "}
                Close communication with the team and PM ensured alignment and
                smooth workflows.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Technical Growth:</span> Deepened
                my expertise in <span className="font-medium">Next.js</span> and
                honed my skills in working with existing codebases efficiently.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Time Management:</span> Learned to
                prioritize tasks effectively under tight deadlines, ensuring
                both quality and delivery.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Successfully developed and deployed two{" "}
                <span className="font-medium">interactive dashboards</span>,
                providing communities and stakeholders with actionable insights
                into healthcare center conditions.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Empowered citizens to report and monitor healthcare centers,
                fostering accountability and transparency.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Enhanced team efficiency and collaboration by quickly adapting
                to the project&apos;s requirements.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivered a platform that supports civic advocacy and drives
                improvements in healthcare services.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
  gradely: {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.GRADELY_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Vue Js",
      },
      {
        id: nanoid(),
        title: "Vuex",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "MySQL DB",
      },
    ],
    title: "Gradely",
    category: "EdTech",
    logo: ImagePath.GRADELY_LOGO,
    fullTitle: "Revolutionizing Personalized Education",
    description:
      "A personalized learning platform for primary and secondary students, leveraging adaptive assessments and interactive lessons to close learning gaps and build subject mastery.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            The Road to Stabilizing the Report Card Application:
          </p>

          <p className="pl-2.5">
            The journey began with a thorough{" "}
            <span className="font-medium">QA process</span>, where I partnered
            with the QA Engineer to identify nearly 60 bugs in the report card
            application. These issues ranged from UI glitches to deeper
            technical flaws that directly impacted user experience.
          </p>

          <p className="my-4 pl-2.5">
            After cataloging and prioritizing the bugs, I resolved them within{" "}
            <span className="font-medium">two weeks</span>, stabilizing the app
            and eliminating customer complaints. Post-bug resolution, I revamped
            the <span className="font-medium">UI/UX</span> by creating{" "}
            <span className="font-medium">new report card templates</span> that
            aligned with customer expectations.
          </p>

          <p className="pl-2.5">
            My role extended beyond development, as I actively communicated with{" "}
            <span className="font-medium">schools</span> to gather valuable
            feedback. These insights were shared with the{" "}
            <span className="font-medium">CTO</span>, enabling us to make
            informed decisions and implement impactful improvements.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Frontend Engineer (Vue
            Js Specialist)
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Joined the team during a critical period to address a{" "}
                <span className="font-medium">
                  buggy report card application
                </span>{" "}
                plagued with technical debt and customer complaints.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Collaborated with the{" "}
                <span className="font-medium">QA Engineer</span> to identify and
                document nearly{" "}
                <span className="font-medium">60 critical bugs</span> in the
                application.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Successfully resolved all bugs within{" "}
                <span className="font-medium">two weeks</span>, restoring
                customer confidence and significantly improving the app’s
                stability.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Designed and implemented{" "}
                <span className="font-medium">new report card templates</span>,
                enhancing the <span className="font-medium">UI/UX</span> for
                better usability and aesthetics.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Communicated directly with{" "}
                <span className="font-medium">customers (schools)</span> to
                gather feedback on the app&apos;s strengths, weaknesses, and
                desired improvements, which informed critical updates.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Partnered with the <span className="font-medium">CTO</span> to
                prioritize and implement customer-driven improvements,
                increasing user satisfaction.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Earned the team&apos;s reputation as the{" "}
                <span className="font-medium">“Bug Resolving Champion”</span>{" "}
                for my swift and effective debugging skills.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>Bug Overload:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The report card application was riddled with nearly 60 bugs,
                causing customer dissatisfaction.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Partnered with
                the QA Engineer, systematically identified issues, and employed
                root cause analysis to resolve them efficiently within two
                weeks.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>Technical Debt:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The existing codebase was burdened with legacy issues and poor
                documentation.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Used a{" "}
                <span className="font-medium">
                  top-down and bottom-up debugging approach
                </span>{" "}
                to address the technical debt while improving overall code
                quality.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Customer Feedback Loop:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Gathering actionable insights from schools while maintaining
                development momentum.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Communicated
                regularly with customers, identified their pain points, and
                translated feedback into tangible improvements in the app.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Mastering Debugging Techniques:
                </span>{" "}
                This project significantly improved my debugging skills, as I
                perfected both{" "}
                <span className="font-medium">root cause analysis</span> and the{" "}
                <span className="font-medium">top-down/bottom-up</span>{" "}
                approaches.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Customer-Centric Development:
                </span>{" "}
                Communicating directly with users helped me better understand
                the importance of aligning technical solutions with real-world
                needs.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Collaboration is Key:</span>{" "}
                Working with a supportive{" "}
                <span className="font-medium">CTO</span> and{" "}
                <span className="font-medium">Team Lead</span> reinforced the
                value of open communication and teamwork in driving success.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Resilience in High-Pressure Situations:
                </span>{" "}
                Resolving a large volume of issues under tight deadlines taught
                me the importance of adaptability and focus.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Resolved <span className="font-medium">60 critical bugs</span>{" "}
                within two weeks, stabilizing the report card application and
                restoring customer trust.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Improved <span className="font-medium">user satisfaction</span>{" "}
                by redesigning templates and enhancing the{" "}
                <span className="font-medium">UI/UX</span> based on customer
                feedback.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Strengthened the company’s relationship with schools through a
                proactive feedback loop and customer-driven updates.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Earned recognition as the{" "}
                <span className="font-medium">“Bug Resolving Champion”</span>,
                fostering a culture of excellence and efficiency within the
                team.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Contributed to a more stable and scalable platform, supporting
                Gradely’s mission to close learning gaps for students.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
  liveable: {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.LIVEABLE_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "Next Js",
      },
      {
        id: nanoid(),
        title: "Turbo Repo",
      },
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "MySQL DB",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "Liveable",
    category: "UrbanTech & PropTech",
    logo: ImagePath.LIVEABLE_LOGO,
    fullTitle: "Transforming Urban Living Spaces",
    description:
      "Liveable is a platform dedicated to enhancing the quality of urban living by providing innovative solutions for sustainable and efficient housing in Nigeria.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            The Road to Enhanced Urban Living Solutions:
          </p>

          <p className="pl-2.5">
            The project began with a deep dive into the existing system,
            identifying areas for improvement and scalability. My primary focus
            was on building a robust{" "}
            <span className="font-medium">component library</span> to ensure
            consistency and efficiency in UI development.
          </p>

          <p className="my-4 pl-2.5">
            I introduced{" "}
            <span className="font-medium">micro-frontend architecture</span> to
            enable modular service development, with a unified authentication
            system ensuring seamless integration across the platform. Alongside
            these architectural improvements, I developed{" "}
            <span className="font-medium">starter kits</span> and tools to
            accelerate onboarding and development.
          </p>

          <p className="pl-2.5">
            Mentorship played a pivotal role in the journey, as I worked closely
            with three frontend engineers to upskill them, ensuring they became
            integral contributors to the project.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Senior Frontend
            Engineer/Frontend Lead
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Built a robust{" "}
                <span className="font-medium">component library</span> for the
                team, leveraging <span className="font-medium">Storybook</span>{" "}
                for seamless documentation and collaboration.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Analyzed existing codebases and developed{" "}
                <span className="font-medium">
                  utility functions, custom hooks, an icon library, and
                  React/Next.js starter kits,
                </span>{" "}
                all documented with{" "}
                <span className="font-medium">Docusaurus</span>.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Established a scalable{" "}
                <span className="font-medium">micro-frontend architecture</span>
                , integrating multiple services with a unified authentication
                system.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Mentored{" "}
                <span className="font-medium">three frontend engineers</span>,
                nurturing their growth and enhancing team productivity.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Actively participated in{" "}
                <span className="font-medium">
                  sprint planning, strategic meetings, and code reviews
                </span>
                , driving high-quality deliverables.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>Legacy Codebase and
            Inconsistencies:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The platform&apos;s existing codebase lacked standardization.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Introduced a
                unified <span className="font-medium">component library</span>,
                utility tools, and starter kits, reducing technical debt and
                improving team efficiency.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>Scalability
            Requirements:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Building a micro-frontend architecture that allowed for
                independent module development while maintaining a cohesive user
                experience.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Designed and
                implemented an architecture that balanced modularity with
                seamless integration.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Team Development:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Addressing skill gaps within the team while meeting project
                deadlines.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Provided hands-on
                mentoring and technical guidance, tailored to each
                engineer&apos;s strengths and areas for improvement.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Deepened Technical Expertise:
                </span>{" "}
                Enhanced my knowledge of{" "}
                <span className="font-medium">microservices</span> and{" "}
                <span className="font-medium">micro-frontend architecture</span>
                , which I&apos;ve since applied to other projects.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Documentation as a Tool for Success:
                </span>{" "}
                Leveraging tools like{" "}
                <span className="font-medium">Storybook</span> and{" "}
                <span className="font-medium">Docusaurus</span> significantly
                improved team collaboration and onboarding processes.
                efficiency.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Leadership Beyond Code:</span>{" "}
                Mentorship taught me to be patient, empathetic, and proactive in
                helping team members succeed.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Responsibility in Engineering:
                </span>{" "}
                The CTO&apos;s guidance emphasized the importance of precision
                and accountability in building solutions that serve users
                reliably.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The <span className="font-medium">component library</span> and
                tools reduced development time by{" "}
                <span className="font-medium">30%</span>, enhancing team
                productivity.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The{" "}
                <span className="font-medium">micro-frontend architecture</span>{" "}
                enabled scalable service development while maintaining platform
                cohesion.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Improved onboarding and collaboration through comprehensive
                documentation and starter kits.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Mentored engineers who now thrive in their roles, contributing
                to the tech space.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivered a scalable and maintainable platform that supports
                sustainable urban housing solutions in Nigeria, positively
                impacting communities.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
  "ssaf-logistics": {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.SSAF_LOGISTICS_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Node Js",
      },
      {
        id: nanoid(),
        title: "SASS",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "SSAF Logistics",
    category: "Logistics & Supply Chain",
    logo: ImagePath.SSAF_LOGISTICS_LOGO,
    fullTitle: "Optimizing Logistics Operations via innovation",
    description:
      "SSAF Logistics specializes in transporting project-critical cargo to challenging destinations, ensuring timely and efficient delivery.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            The Road to Efficient Logistics Management:
          </p>

          <p className="pl-2.5">
            The project began with the task of translating complex designs into
            functional, modular components. By focusing on a{" "}
            <span className="font-medium">modular approach</span>, I ensured
            that each section of the platform—shipments, recipients, quotes,
            invoices, and settings—was reusable and easy to maintain.
          </p>

          <p className="my-4 pl-2.5">
            Once the designs were implemented, I proceeded with integrating{" "}
            <span className="font-medium">APIs</span> and third-party services,
            ensuring a seamless user experience and robust functionality. My
            efforts helped build a reliable logistics platform tailored to meet
            SSAF Logistics&apos; needs for managing critical cargo efficiently.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Frontend Engineer
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Translated designs for{" "}
                <span className="font-medium">
                  shipments, recipients, quotes, invoices, and settings
                </span>{" "}
                into modular, reusable frontend components, ensuring
                maintainability and scalability.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Introduced a{" "}
                <span className="font-medium">
                  modular development approach
                </span>{" "}
                to the project, streamlining workflows and improving code
                efficiency.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Built two{" "}
                <span className="font-medium">data-driven dashboards</span> from
                start to completion, ensuring user-friendly interfaces for
                monitoring healthcare centers.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Integrated <span className="font-medium">APIs</span> and
                third-party services seamlessly, ensuring smooth communication
                between the frontend and backend systems.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Worked under intense pressure and tight deadlines, demonstrating
                grit and perseverance to deliver high-quality solutions.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>Unrealistic Timelines:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Tight deadlines and high expectations from management created
                significant pressure.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Prioritized tasks
                effectively, pushed through challenging timelines with grit, and
                maintained focus to deliver results.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>High Managerial
            Pressure:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Intense pressure from managers demanded consistent performance
                under stressful conditions.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Maintained open
                communication, set realistic expectations, and demonstrated
                resilience to complete the project successfully.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  The Power of Modular Development:
                </span>{" "}
                Adopting a modular approach reinforced the importance of
                scalability and maintainability in large projects.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Resilience Under Pressure:</span>{" "}
                The experience strengthened my ability to perform under tight
                deadlines and high-pressure situations.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Team Alignment is Key:</span>{" "}
                Ensuring alignment between managers and developers can improve
                timelines and reduce unnecessary stress.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Adaptability Matters:</span>{" "}
                Balancing design implementation with integration tasks enhanced
                my flexibility and technical proficiency.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivered a functional and modular frontend for managing
                shipments, recipients, quotes, invoices, and settings.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Successfully integrated APIs and third-party services, enabling
                seamless platform operations.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Improved project efficiency by introducing modular workflows,
                reducing future development time and technical debt.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Contributed to a reliable logistics platform that supports SSAF
                Logistics’ mission to deliver critical cargo efficiently, even
                under challenging conditions.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
  sims: {
    images: [
      {
        id: nanoid(),
        alt: "",
        category: "",
        title: "",
        src: ImagePath.SIMS_PAGE,
      },
    ],
    stack: [
      {
        id: nanoid(),
        title: "React Js",
      },
      {
        id: nanoid(),
        title: "Redux",
      },
      {
        id: nanoid(),
        title: "Laravel",
      },
      {
        id: nanoid(),
        title: "Vue Js",
      },
      {
        id: nanoid(),
        title: "Vuex",
      },
      {
        id: nanoid(),
        title: "Docker",
      },
    ],
    title: "SIMS",
    category: "EdTech & GovTech",
    logo: ImagePath.SIMS_LOGO,
    fullTitle: "Revolutionizing Educational Administration in Plateau State",
    description:
      "SIMS, the cloud-based platform of the Plateau State Ministry of Education, streamlines school management by integrating student records, academic progress, and communication tools for efficiency and compliance.",
    projectJourney: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            The Road to Transforming Education Management:
          </p>

          <p className="pl-2.5">
            The project began with a series of{" "}
            <span className="font-medium">stakeholder meetings</span> with the
            Plateau Ministry of Education staff to gather requirements and
            define clear project objectives. Using these insights, we
            architected the solution, combining{" "}
            <span className="font-medium">React.js and Vue.js</span> for the
            frontend, <span className="font-medium">PHP and Laravel</span> for
            the backend, and <span className="font-medium">MySQL</span> for
            database management.
          </p>

          <p className="my-4 pl-2.5">
            My role extended beyond team leadership to include{" "}
            <span className="font-medium">UI/UX design</span>, where I analyzed
            and implemented user-friendly components for presenting academic and
            administrative data. Over the course of{" "}
            <span className="font-medium">8 months</span>, the team worked
            tirelessly, delivering a platform that seamlessly integrates student
            records, academic progress tracking, and communication tools.
          </p>

          <p className="pl-2.5">
            The project concluded with{" "}
            <span className="font-medium">UAT sessions</span>, where we pitched
            the solution, gathered feedback, and iterated based on stakeholder
            insights.
          </p>
        </div>
      </>
    ),
    contributions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty text-zinc-50/80">
          <h6>
            <span className="font-medium">My Role:</span> Team Lead, Full-Stack
            Engineer
          </h6>

          <p className="mt-2 mb-4">Key Contributions and Achievements:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Led a team of <span className="font-medium">6 developers</span>{" "}
                to design and build <span className="font-medium">SIMS</span>{" "}
                and <span className="font-medium">One Class</span>, cloud-based
                school management solutions for the{" "}
                <span className="font-medium">
                  Plateau State Ministry of Education
                </span>
                .
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Leveraged a diverse tech stack, including{" "}
                <span className="font-medium">
                  React.js, Vue.js, PHP, Laravel, and MySQL,
                </span>{" "}
                to develop robust and scalable solutions.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Conducted extensive{" "}
                <span className="font-medium">stakeholder meetings</span> to
                gather requirements, project objectives, and ensure alignment
                with the ministry’s goals.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Acted as a <span className="font-medium">UI/UX lead</span>,
                crafting interfaces inspired by platforms like Behance and
                Dribbble to ensure optimal presentation of data and usability.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Mentored team members by learning and debugging technologies
                weekly, strengthening the team&apos;s proficiency in{" "}
                <span className="font-medium">
                  Laravel, React.js, and Vue.js
                </span>
                .
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivered the project within{" "}
                <span className="font-medium">8 months</span>, including{" "}
                <span className="font-medium">
                  user acceptance testing (UAT)
                </span>
                , gathering insights, and implementing feedback-driven
                improvements.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    solutions: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Turning Obstacles into Opportunities:
          </p>

          <p className="font-medium pl-2.5 mb-4">
            <span className="font-light mr-2.5">1.</span>No Dedicated UI/UX
            Designer:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>Designing user interfaces and experiences fell on me.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Researched and
                drew inspiration from{" "}
                <span className="font-medium">Behance</span> and{" "}
                <span className="font-medium">Dribbble</span>, analyzing and
                implementing the most suitable components to present data
                effectively.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">2.</span>Steep Learning Curve:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                The team required technical support across multiple frameworks
                (React.js, Vue.js, Laravel).
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Consistently
                learned new aspects of the technologies to mentor team members
                and debug complex issues.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Burnout and Health
            Challenges:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>The intense workload led to exhaustion and illness.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Managed team
                tasks strategically to maintain momentum while ensuring project
                delivery despite personal challenges.
              </span>
            </motion.li>
          </motion.ul>

          <p className="font-medium pl-2.5 mt-8 mb-4">
            <span className="font-light mr-2.5">3.</span>Evolving Requirements:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>Stakeholders introduced changes during development.</span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Solution:</span> Maintained an
                agile approach, accommodating new requirements without derailing
                progress.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    lessons: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">Insights for the Future:</p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Adaptability Across Roles:</span>{" "}
                Taking on{" "}
                <span className="font-medium">UI/UX responsibilities</span>{" "}
                reinforced the importance of versatility in leadership.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">The Power of Collaboration:</span>{" "}
                Working with an amazing team pushed me to constantly learn and
                grow.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">
                  Stakeholder Alignment is Critical:
                </span>{" "}
                Regular communication ensured the solution met the ministry’s
                expectations and objectives.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Resilience in Leadership:</span>{" "}
                Balancing team mentorship, stakeholder management, and
                development tasks strengthened my capacity to lead under
                pressure.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-medium">Iterative Improvement:</span> UAT
                insights proved the value of continuous feedback loops in
                delivering user-centered solutions.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
    results: () => (
      <>
        <div className="font-poppins font-light text-sm md:text-base text-pretty subpixel-antialiased text-zinc-50/80">
          <p className="mt-2 mb-4 font-medium">
            Delivering Measurable Results:
          </p>

          <motion.ul className="flex flex-col w-full md:pl-2.5 space-y-4">
            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Delivered two comprehensive solutions
                <span className="font-medium">—SIMS</span> and{" "}
                <span className="font-medium">One Class—</span>to enhance school
                management and education efficiency.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Empowered the{" "}
                <span className="font-medium">
                  Plateau State Ministry of Education
                </span>{" "}
                to streamline operations, track academic progress, and improve
                communication between schools and stakeholders.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Elevated the technical proficiency of team members through
                mentorship and collaborative problem-solving.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Designed a{" "}
                <span className="font-medium">user-friendly UI/UX</span>{" "}
                experience that simplified the management of student records and
                academic performance tracking.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-poppins font-light text-sm md:text-base tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                Successfully conducted{" "}
                <span className="font-medium">UAT sessions</span>, refined the
                solutions, and ensured the platform met stakeholder needs.
              </span>
            </motion.li>
          </motion.ul>
        </div>
      </>
    ),
  },
};

const ProjectOverview = () => {
  const { project } = useParams();
  const router = useRouter();

  const projectAnalysis = projectDetails[project as any];

  const currentProjects = [
    "onecopy-business-ai",
    "my-landlord-heaven",
    "gradely",
    "phc-accountability-tracka",
    "liveable",
    "ssaf-logistics",
    "sims"
  ];

  const cards = projectAnalysis?.images?.map((card: any) => (
    <Card key={card.src} card={card} />
  ));

  const [canGoNext, setCanGoNext] = useState(true);
  const [canGoBack, setCanGoBack] = useState(true);

  useEffect(() => {
    setCanGoBack(project !== "onecopy-business-ai");
    setCanGoNext(project !== "sims");
  }, [project]);

  const patterns = [
    [17, 1],
    [16, 3],
    [13, 5],
    [10, 6],
    [9, 7],
  ];

  const onNext = () => {
    switch (project) {
      case "onecopy-business-ai":
        router.push(`/project/my-landlord-heaven`);
        return;
      case "my-landlord-heaven":
        router.push(`/project/gradely`);
        return;
      case "gradely":
        router.push(`/project/phc-accountability-tracka`);
        return;
      case "phc-accountability-tracka":
        router.push(`/project/liveable`);
        return;
      case "liveable":
        router.push(`/project/ssaf-logistics`);
        return;
      case "ssaf-logistics":
        router.push(`/project/sims`);
        return;
      default:
        router.push(`/project/onecopy-business-ai`);
        return;
    }
  };

  const onPrevious = () => {
    switch (project) {
      case "my-landlord-heaven":
        router.push(`/project/onecopy-business-ai`);
        return;
      case "gradely":
        router.push(`/project/my-landlord-heaven`);
        return;
      case "phc-accountability-tracka":
        router.push(`/project/gradely`);
        return;
      case "liveable":
        router.push(`/project/phc-accountability-tracka`);
        return;
      case "ssaf-logistics":
        router.push(`/project/liveable`);
        return;
      case "sims":
        router.push(`/project/ssaf-logistics`);
        return;
      default:
        router.push(`/project/onecopy-business-ai`);
        return;
    }
  };

  if (!project) {
    notFound();
  }

  if (!currentProjects.includes(project as string || "")) {    
    notFound();
  }

  return (
    <>
      <Head>
        <title>{`${projectAnalysis?.title} | Alabura Usman`}</title>
        <meta
          name="description"
          content={
            projectAnalysis?.description ||
            `Explore details about ${projectAnalysis?.title}, a featured project by Alabura Usman.`
          }
        />
        <meta
          property="og:title"
          content={`${projectAnalysis?.title} | Alabura Usman`}
        />
        <meta
          property="og:description"
          content={
            projectAnalysis?.description ||
            `Discover how ${projectAnalysis?.title} was designed and developed to deliver impactful solutions.`
          }
        />
        <meta property="og:url" content={`${BASE_URL}/project/${project}`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`${BASE_URL}${projectAnalysis?.logo}`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={`${projectAnalysis?.title} | Alabura Usman`}
        />
        <meta
          property="twitter:description"
          content={
            projectAnalysis?.description ||
            `Uncover the story behind ${projectAnalysis?.title}, a remarkable project by Alabura Usman.`
          }
        />
        <meta
          property="twitter:image"
          content={`${BASE_URL}${projectAnalysis?.logo}`}
        />
      </Head>

      <Wrapper footer="!top-0">
        <header className="w-full min-h-screen flex flex-col items-center relative bg-gradient-to-b from-background to-background">
          <section className="section relative h-full gap-y-10 py-10 xl:py-12 2xl:py-16 mt-[95px] z-[2000]">
            <div className="w-full flex flex-col gap-y-4 items-start">
              <HeadingChip>Project Overview</HeadingChip>

              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bricolage font-extrabold subpixel-antialiased text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600">
                {projectAnalysis?.title} - {projectAnalysis?.category}
              </h3>

              <p className="font-poppins text-zinc-50/90 text-base lg:text-xl w-full xl:max-w-[80%] 2xl:max-w-[70%] mt-2">
                {projectAnalysis?.description}
              </p>

              <div className="flex items-center flex-wrap gap-4 mt-4">
                {projectAnalysis?.stack.map((item: any) => (
                  <motion.div
                    key={item?.id}
                    className={cn(
                      "ring-1 ring-yellow-500/10 bg-zinc-950/85 no-underline cursor-default group relative shadow-2xl shadow-black rounded-full p-px inline-block",
                      {
                        "ring-indigo-50/10":
                          kebabCase(item?.title) === "recoil",
                        "ring-pink-50/10": kebabCase(item?.title) === "sass",
                        "ring-slate-50/10":
                          kebabCase(item?.title) === "next-js",
                        "ring-red-50/10":
                          kebabCase(item?.title) === "nest-js" ||
                          kebabCase(item?.title) === "laravel",
                        "ring-cyan-50/10": kebabCase(item?.title) === "vuex",
                        "ring-secondary-50/10":
                          kebabCase(item?.title) === "vue-js",
                        "ring-purple-50/10": kebabCase(item?.title) === "redux",
                        "ring-green-50/10":
                          kebabCase(item?.title) === "daisy-ui" ||
                          kebabCase(item?.title) === "gsap" ||
                          kebabCase(item?.title) === "node-js",
                        "ring-blue-50/10":
                          kebabCase(item?.title) === "react-js" ||
                          kebabCase(item?.title) === "docker" ||
                          kebabCase(item?.title) === "tailwind-css",
                      }
                    )}
                  >
                    <div
                      className={cn(
                        "relative bg-yellow-950/20 text-yellow-50/90 flex space-x-2 items-center z-10 rounded-full py-0.5 px-3",
                        {
                          "bg-indigo-950/20 text-indigo-50/90":
                            kebabCase(item?.title) === "recoil",
                          "bg-pink-950/20 text-pink-50/90":
                            kebabCase(item?.title) === "sass",
                          "bg-slate-950/20 text-slate-50/90":
                            kebabCase(item?.title) === "next-js",
                          "bg-red-950/20 text-red-50/90":
                            kebabCase(item?.title) === "nest-js" ||
                            kebabCase(item?.title) === "laravel",
                          "bg-cyan-950/20 text-cyan-50/90":
                            kebabCase(item?.title) === "vuex",
                          "bg-secondary-950/20 text-secondary-50/90":
                            kebabCase(item?.title) === "vue-js",
                          "bg-purple-950/20 text-purple-50/90":
                            kebabCase(item?.title) === "redux",
                          "bg-green-950/20 text-green-50/90":
                            kebabCase(item?.title) === "daisy-ui" ||
                            kebabCase(item?.title) === "gsap" ||
                            kebabCase(item?.title) === "node-js",
                          "bg-blue-950/20 text-blue-50/90":
                            kebabCase(item?.title) === "react-js" ||
                            kebabCase(item?.title) === "docker" ||
                            kebabCase(item?.title) === "tailwind-css",
                        }
                      )}
                    >
                      <span className="tracking-wide text-sm lg:text-base font-bricolage font-light">
                        {item?.title}
                      </span>
                    </div>

                    <span
                      className={cn(
                        "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-yellow-500/90 to-white/0 transition-opacity duration-500",
                        {
                          "via-indigo-500/90":
                            kebabCase(item?.title) === "recoil",
                          "via-pink-500/90": kebabCase(item?.title) === "sass",
                          "via-slate-500/90":
                            kebabCase(item?.title) === "next-js",
                          "via-red-500/90":
                            kebabCase(item?.title) === "nest-js",
                          "via-cyan-500/90": kebabCase(item?.title) === "vuex",
                          "via-secondary-500/90":
                            kebabCase(item?.title) === "vue-js",
                          "via-purple-500/90":
                            kebabCase(item?.title) === "redux",
                          "via-green-500/90":
                            kebabCase(item?.title) === "daisy-ui",
                          "via-green-700/90":
                            kebabCase(item?.title) === "gsap" ||
                            kebabCase(item?.title) === "node-js",
                          "via-blue-500/90":
                            kebabCase(item?.title) === "react-js" ||
                            kebabCase(item?.title) === "docker" ||
                            kebabCase(item?.title) === "tailwind-css",
                          "via-error/90": kebabCase(item?.title) === "laravel",
                        }
                      )}
                    ></span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 w-full lg:w-[90%] 2xl:w-[80%] self-center h-[400px] lg:h-[450px] 2xl:h-[550px] mt-8 lg:mt-12 relative">
                <Carousel items={cards} />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 absolute h-[60%] w-[60%] 2xl:h-[40%] 2xl:w-[40%] overflow-hidden -top-0 -left-0 z-[500]">
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              squares={patterns}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
              )}
            />
          </div>

          <div className="grid grid-cols-1 absolute h-[50%] w-[40%] 2xl:h-[45%] 2xl:w-[30%] overflow-hidden -top-10 -right-10 z-[500]">
            <div className="w-full relative h-full grid">
              <Image
                src={ImagePath.ILLUS_LINE_TOP_PROJECT}
                alt={""}
                fill
                priority
                draggable={false}
                className="size-full opacity-90"
              />
            </div>
          </div>
        </header>

        <section className="w-full min-h-screen flex flex-col items-center relative bg-zinc-900">
          <div className="section relative grid grid-cols-12 grid-rows-[auto] h-full gap-6 lg:gap-8 2xl:gap-10 py-10 xl:py-12 2xl:py-16 z-[2000]">
            <div className="col-span-12 lg:col-span-1">
              <div className="w-auto h-12 relative overflow-hidden flex items-start justify-start">
                <Image
                  src={projectAnalysis?.logo}
                  alt={""}
                  fill
                  loading={"lazy"}
                  draggable={false}
                  className="!w-auto h-full md:!size-full object-contain"
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-1 flex justify-center">
              <div className="h-px w-full lg:h-full lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-neutral-700/0 via-neutral-700/90 to-neutral-700/0"></div>
            </div>

            <div className="col-span-12 lg:col-span-10 grid grid-cols-1 gap-y-6 lg:gap-y-10">
              <div className="w-full flex flex-col gap-y-4 items-start">
                <h4 className="font-bricolage font-extrabold md:tracking-wide text-pretty text-2xl lg:text-3xl xl:text-4xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                  Role & Achievements/Contributions
                </h4>

                {projectAnalysis?.contributions()}
              </div>

              <div className="w-full flex flex-col gap-y-4 items-start">
                <h4 className="font-bricolage font-extrabold md:tracking-wide text-pretty text-2xl lg:text-3xl xl:text-4xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                  Project Journey
                </h4>

                {projectAnalysis?.projectJourney()}
              </div>

              <div className="w-full flex flex-col gap-y-4 items-start">
                <h4 className="font-bricolage font-extrabold md:tracking-wide text-pretty text-2xl lg:text-3xl xl:text-4xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                  Challenges & Solutions
                </h4>

                {projectAnalysis?.solutions()}
              </div>

              <div className="w-full flex flex-col gap-y-4 items-start">
                <h4 className="font-bricolage font-extrabold md:tracking-wide text-pretty text-2xl lg:text-3xl xl:text-4xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                  Lessons Learned
                </h4>

                {projectAnalysis?.lessons()}
              </div>

              <div className="w-full flex flex-col gap-y-4 items-start">
                <h4 className="font-bricolage font-extrabold md:tracking-wide text-pretty text-2xl lg:text-3xl xl:text-4xl uppercase text-transparent bg-gradient-to-b bg-clip-text from-secondary-300 to-cyan-600">
                  Results and Impact
                </h4>

                {projectAnalysis?.results()}
              </div>
            </div>

            <div className="col-span-12 w-full flex flex-row justify-center space-x-2 md:space-x-4 2xl:space-x-6 pt-2">
              <InteractiveLeftButton
                onClick={onPrevious}
                text="Previous"
                aria-label="Previous"
                disabled={!canGoBack}
                aria-disabled={!canGoBack}
                className={cn(
                  "w-40 border-zinc-600/80 hover:border-zinc-600/5 hover:text-zinc-100 text-zinc-400 font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300",
                  !canGoBack && "disabled:opacity-50 pointer-events-none"
                )}
              />
              <InteractiveRightButton
                onClick={onNext}
                text="Next"
                aria-label="Next"
                disabled={!canGoNext}
                aria-disabled={!canGoNext}
                className={cn(
                  "w-40 border-secondary-300/40 hover:border-secondary-200/5 text-secondary-400 hover:text-secondary-content font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300",
                  !canGoNext && "disabled:opacity-50 pointer-events-none"
                )}
              />
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

const InteractiveRightButton = React.forwardRef<
  HTMLButtonElement,
  UI.InteractiveButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-secondary">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-secondary-content opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-cyan-600"></div>
    </motion.button>
  );
});

const InteractiveLeftButton = React.forwardRef<
  HTMLButtonElement,
  UI.InteractiveButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
        className
      )}
      {...props}
    >
      <span className="inline-block -translate-x-1 transition-all duration-300 group-hover:-translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full origin-left -translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-3 group-hover:opacity-100">
        <ArrowLeft />
        <span>{text}</span>
      </div>
      <div className="absolute right-[15%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-gray-400 transition-all duration-300 group-hover:right-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-l group-hover:from-gray-500 group-hover:to-gray-600"></div>
    </motion.button>
  );
});

const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

const Carousel = ({ items, initialScroll = 0 }: UI.CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full h-full grid grid-cols-1 grid-rows-10">
        <div
          className="row-span-9 flex w-full h-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start w-full gap-4",
              "mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-2xl min-w-full"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-end items-end gap-2 row-span-1">
          <button
            aria-label="Previous"
            aria-disabled={!canScrollLeft}
            className="relative z-40 h-9 w-9 2xl:h-10 2xl:w-10 rounded-full bg-zinc-50 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-5 w-5 2xl:h-6 2xl:w-6 text-zinc-600" />
          </button>

          <button
            aria-label="Next"
            aria-disabled={!canScrollRight}
            className="relative z-40 h-9 w-9 2xl:h-10 2xl:w-10 rounded-full bg-zinc-50 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-5 w-5 2xl:h-6 2xl:w-6 text-zinc-600" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

const Card = ({
  card,
  layout = false,
}: {
  card: UI.Card;
  layout?: boolean;
}) => {
  return (
    <>
      <motion.button
        aria-label={card?.title}
        layoutId={layout ? `card-${card.title}` : undefined}
        className="rounded-2xl bg-neutral-900 h-full w-full overflow-hidden flex flex-col items-start justify-start relative cursor-default z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>

        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

const BlurImage = ({
  height,
  width,
  src,
  alt,
  className,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      className={cn(
        "transition duration-300 object-top",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Project Preview"}
      {...rest}
    />
  );
};



Card.displayName = "Card";
Carousel.displayName = "Carousel";
BlurImage.displayName = "BlurImage";
projectDetails.displayName = "projectDetails";
ProjectOverview.displayName = "ProjectOverview";
CarouselContext.displayName = "CarouselContext";
ProjectOverview.displayName = "ProjectOverview";
InteractiveRightButton.displayName = "InteractiveRightButton";
InteractiveLeftButton.displayName = "InteractiveLeftButton";

export default ProjectOverview;
