import React from "react";
import { motion } from "framer-motion";
import { HeadingChip, Timeline } from "@/components/ui";
import Image from "next/image";
import { UI } from "@/models";
import { nanoid } from "nanoid";

const WorkHistory = () => {
  const data: UI.TimelineEntry[] = [
    {
      id: nanoid(),
      positionTitle: "Senior Software Engineer",
      companyName: "Software Business Solutions Consulting (SBSC)",
      dates: {
        start: "Jul 2022",
        end: "Present",
      },
      location: "Lagos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Spearheaded frontend development for critical banking applications, including FirstNote Investment Platform and CBN FX Blotter.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Enhanced banking solutions by improving communication and operational efficiency for seven banking entities.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Boosted user satisfaction through A/B testing and analytics, conducted OWASP ZAP-based security audits, and led Agile project management initiatives.
              </span>
            </motion.li>

          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "User-centric Frontend Lead",
      companyName: "Astro Marketer Systems LLC",
      dates: {
        start: "Nov 2023",
        end: "Dec 2024",
      },
      location: "Lagos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Sprint planner, Agile leader, and deployment manager for the OneCopy AI platform.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Developed custom CSS and toast libraries, transforming outdated UI components into engaging designs.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Integrated Google Analytics to enable user behavior tracking, ensuring successful launches and feature prioritization.
              </span>
            </motion.li>

          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "Senior Frontend Engineer",
      companyName: "BudgIT",
      dates: {
        start: "May 2023",
        end: "Jul 2023",
      },
      location: "Lagos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Designed accessible, user-centric healthcare accountability platforms.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Built a React component library to streamline workflows and delivered the PHC Tracker MVP on time.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Successfully deployed solutions via Vercel, emphasizing accessibility and real-time critical data access.
              </span>
            </motion.li>

          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "Frontend Engineer",
      companyName: "Acronis International GmbH",
      dates: {
        start: "Apr 2022",
        end: "Dec 2022",
      },
      location: "Schaffhausen, Switzerland",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Collaborated with UI/UX teams to deliver seamless Figma-to-code translations and scalable module architectures.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Rewrote JavaScript modules in TypeScript, increasing code quality and test coverage (60% and 42%).
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Improved team efficiency by abstracting API logic, organizing scalable file structures, and championing code quality reviews.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "Lead Frontend Engineer",
      companyName: "Liveable",
      dates: {
        start: "Feb 2022",
        end: "Jul 2022",
      },
      location: "Lagos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Frontend supervisor and lead developer for efficient multi-team collaboration.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Implemented micro-frontend architecture for Liveable and LandlordHeaven platforms.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Developed reusable NPM packages, designed secure authentication modules, and delivered polished, scalable web applications.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "Frontend Engineer",
      companyName: "Gradely",
      dates: {
        start: "Nov 2021",
        end: "Feb 2022",
      },
      location: "Lagos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Frontend developer focused on enhancing educator workflows.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Created interactive report cards with customizable templates and automated result computations.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Reduced software bugs by 28%, enriching user experience through dynamic graphs and secure digital signatures.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "FullStack Engineer",
      companyName: "AspireUnivas InterSystems LLC",
      dates: {
        start: "Apr 2021",
        end: "Nov 2021",
      },
      location: "Jos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "} Team lead for system requirements analysis and development.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Delivered three EdTech solutions for the Plateau State Ministry of Education.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Designed optimized databases and high-quality educational platforms, fostering widespread adoption.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      ),
    },
    {
      id: nanoid(),
      positionTitle: "Mobile Engineer",
      companyName: "BitSense",
      dates: {
        start: "Jan 2021",
        end: "Mar 2021",
      },
      location: "Jos, Nigeria",
      content: (
        <motion.div className="w-full md:pl-5">
          <motion.ul className="flex flex-col w-full space-y-4">
          <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Role:</span>{" "}  Mobile developer bridging design and backend services.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Key Contributions:</span>{" "} Developed MVP mobile apps with seamless UI/UX integration.
              </span>
            </motion.li>

            <motion.li className="flex items-start space-x-1.5 font-bricolage font-light text-sm md:text-base text-zinc-50/70 tracking-[0.01em]">
              <i className="icon-bolt text-[16.5px] md:text-[18px] text-transparent bg-gradient-to-br bg-clip-text from-primary-500 via-indigo-500 to-purple-500"></i>
              <span>
                <span className="font-semibold text-zinc-50/90">Achievements:</span>{" "} Delivered a functional and reliable product on schedule.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>
      ),
    },
  ];

  return (
    <>
      <motion.div className="section h-full gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]">
        <motion.div className="flex flex-col items-center">
          <HeadingChip>Professional Journey</HeadingChip>

          <motion.h2 className="text-3xl xl:text-4xl text-center text-transparent bg-gradient-to-b bg-clip-text from-zinc-200 to-zinc-600 font-extrabold font-bricolage tracking-wide mt-12">
            Collaborating with the Best
          </motion.h2>

          <motion.h4 className="text-xl text-center text-zinc-50/80 font-poppins font-normal lg:w-[70%] mt-6">
            I've had the privilege of working alongside world-class
            professionals at exceptional companies, gaining invaluable
            experience and contributing to impactful projects.
          </motion.h4>
        </motion.div>

        <motion.div className="w-full flex flex-col gap-y-12 items-center mt-8 xl:mt-12">
          <Timeline data={data} />
        </motion.div>
      </motion.div>
    </>
  );
};

WorkHistory.displayName = "WorkHistory";
export { WorkHistory };
