import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring, useScroll } from "framer-motion";
import {
  goals,
  ImagePath,
  inquiry,
  inquiryQuestionHeadings,
  inquiryQuestions,
  inquiryServices,
} from "@/constants";
import { UI } from "@/models";
import toLower from "lodash/toLower";
import { cn } from "@/lib/utils";
import { HeadingChip, MagicCard, RainbowButton } from "@/components/ui";
import { useBoundStore } from "@/store";
import isEqual from "lodash/isEqual";
import kebabCase from "lodash/kebabCase";
import isEmpty from "lodash/isEmpty";
import { toast } from "react-hot-toast";
import { ContactForm, Service } from "@slice/index";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CACHE_KEY = "geoLocationData";
const CACHE_EXPIRATION = 24 * 60 * 60 * 1000;

const RequstConsultation = () => {
  const {
    step,
    updateForm,
    getStep,
    getForm,
    getLeanFormServices,
    prevStep,
    nextStep,
    addService,
    removeService,
  } = useBoundStore();
  const [progress, setProgress] = useState<number>(0);
  const [defaultCountry, setDefaultCountry] = useState("gb");

  const setContact = (value: string) => {
    updateForm("contact", value);
  };

  const getInquiryBySubject = () => {
    if (isEmpty(getForm().subject)) {
      return [];
    } else {
      const inquiryKey: keyof typeof inquiry = kebabCase(
        getForm().subject
      ) as keyof typeof inquiry;

      return inquiry[inquiryKey] ? inquiry[inquiryKey] : [];
    }
  };

  const getServiceBySubjectAndInquiry = () => {
    if (
      isEmpty(getForm().inquiry.type) ||
      isEmpty(getForm().inquiry.heading) ||
      isEmpty(getForm().inquiry.subheading)
    ) {
      return [];
    } else {
      const inquiryServiceKey: keyof typeof inquiryServices = `${kebabCase(
        getForm().subject
      )}_${kebabCase(
        getForm().inquiry.heading
      )}` as keyof typeof inquiryServices;

      return inquiryServices[inquiryServiceKey];
    }
  };

  const getInquiryQuestionsBySubject = (key: keyof typeof inquiryQuestions) => {
    if (isEmpty(inquiryQuestions[key])) return [];
    else return inquiryQuestions[key];
  };

  const getInquiryType = (heading: string) => {
    return toLower(heading) === "for yourself"
      ? "For YourSelf"
      : toLower(heading) === "for an organization"
      ? "For an Organization"
      : "N/A";
  };

  const clearForm = () => {
    updateForm("inquiry", {
      type: "",
      heading: "",
      subheading: "",
    });

    updateForm("services", []);
    updateForm("questions", []);
  };

  const onSelect = (
    key: keyof ContactForm,
    value: any,
    defaultValue: any = ""
  ) => {
    if (isEqual(getForm()[key], value)) {
      updateForm(key, defaultValue);
    } else {
      updateForm(key, value);
    }

    if (key === "subject") {
      clearForm();
    }
  };

  const onSelectService = (service: Service) => {
    const index = getForm().services.findIndex((o) => o.id === service.id);

    if (index !== -1) {
      removeService(service);
    } else {
      addService(service);
    }
  };

  const calculateProgress = (currentStep: number, totalSteps: number) => {
    setProgress(((currentStep - 1) / totalSteps) * 100);
  };

  const onNext = () => {
    const totalSteps = 4;

    const caseOne = () => {
      if (isEmpty(getForm().subject)) {
        toast.error("Select an item!");
      } else {
        if (kebabCase(getForm().subject) === "explore-possibilities") {
          nextStep(3);
          calculateProgress(getStep(), totalSteps);
        } else {
          nextStep(2);
          calculateProgress(getStep(), totalSteps);
        }
      }
    };

    const caseTwo = () => {
      if (
        isEmpty(getForm().inquiry.type) ||
        isEmpty(getForm().inquiry.heading) ||
        isEmpty(getForm().inquiry.subheading)
      ) {
        toast.error("Select an item!");
      } else {
        nextStep(3);
        calculateProgress(getStep(), totalSteps);
      }
    };

    const caseThree = () => {
      if (
        kebabCase(getForm().subject) === "launch-a-project" ||
        kebabCase(getForm().subject) === "collaborate-long-term"
      ) {
        if (isEmpty(getForm().services)) {
          toast.error("Kindly select an item!");
        } else {
          nextStep(4);
          calculateProgress(getStep(), totalSteps);
        }
      } else {
        const formFields = getInquiryQuestionsBySubject(
          kebabCase(getForm().subject) as keyof typeof inquiryQuestions
        );

        const missingFields = formFields.filter(
          (field) =>
            field.isRequired && isEmpty((getForm() as any)[field.label])
        );

        if (missingFields.length > 0) {
          toast.error("Please fill in all required fields!");
        } else {
          nextStep(4);
          calculateProgress(getStep(), totalSteps);
        }
      }
    };

    const caseFour = () => {
      const requiredFields = [getForm().name, getForm().email];

      if (requiredFields.some(isEmpty)) {
        toast.error("Please fill in all required fields to confirm!");
      } else {
        // Proceed to final step
        toast.success("Request Submitted Successfully!");
        // You can add your final submission logic here
        nextStep(5);
        calculateProgress(getStep(), totalSteps);
      }
    };

    if (getStep() === 1) {
      caseOne();
    } else if (getStep() === 2) {
      caseTwo();
    } else if (getStep() === 3) {
      caseThree();
    } else if (getStep() === 4) {
      caseFour();
    }
  };

  const onPrevious = () => {
    const totalSteps = 4;

    if (kebabCase(getForm().subject) === "explore-possibilities") {
      prevStep(1);
      calculateProgress(getStep(), totalSteps);
    } else {
      prevStep();
      calculateProgress(getStep(), totalSteps);
    }
  };

  useEffect(() => {
    const totalSteps = 4;
    calculateProgress(getStep(), totalSteps);
  }, [getStep]);

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);

    if (cachedData) {
      const { countryCode, timestamp } = JSON.parse(cachedData);

      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        setDefaultCountry(countryCode);
        return;
      }
    }

    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.country_code) {
          const countryCode = data.country_code.toLowerCase();

          setDefaultCountry(countryCode);

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ countryCode, timestamp: Date.now() })
          );
        }
      })
      .catch(() => {
        setDefaultCountry("gb");
      });
  }, []);

  useEffect(() => {
    console.log(`Step: ${getStep()}, Progress: ${progress}%`);
  }, [getStep, progress]);

  const getCurrentStepSnapshot = () => {
    switch (getStep()) {
      case 1:
        return (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
            {goals.map(({ id, Icon, code, heading, subheading }) => (
              <motion.button
                key={id}
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
                onClick={() =>
                  onSelect("subject" as keyof ContactForm, heading)
                }
                className="group relative rounded-xl overflow-hidden outline-none focus:outline"
              >
                <MagicCard
                  className={cn(
                    "flex flex-col justify-start p-5 shadow-lg group-hover:shadow-xl group-focus:shadow-xl cursor-pointer border-primary-200/20 group-hover:border-primary-200/5 transition-all duration-300 text-primary-content bg-primary-950/90 relative overflow-hidden",
                    kebabCase(getForm().subject) === kebabCase(heading) &&
                      "!bg-gradient-to-r !from-primary-600 !to-indigo-600 !shadow-xl !border-none !text-primary-content"
                  )}
                  gradientColor="#242b33"
                >
                  <Icon
                    className={cn(
                      "mb-3 text-primary group-hover:text-primary-content group-focus:text-primary-content transition-colors relative duration-300",
                      kebabCase(getForm().subject) === kebabCase(heading) &&
                        "text-primary-content"
                    )}
                  />
                  <Icon
                    className={cn(
                      "absolute z-10 -top-12 -right-12 text-primary-900/90 group-hover:text-indigo-300/90 group-focus:text-indigo-300/90 group-hover:rotate-12 group-focus:rotate-12 transition-transform duration-300",
                      kebabCase(getForm().subject) === kebabCase(heading) &&
                        "text-indigo-300/90"
                    )}
                    size={110}
                  />

                  <motion.h4 className="text-lg text-left font-bricolage font-semibold mb-1 relative z-[2500]">
                    {heading}
                  </motion.h4>

                  <motion.p className="text-sm text-left font-poppins relative z-[2500]">
                    {subheading}
                  </motion.p>
                </MagicCard>

                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
              </motion.button>
            ))}
          </motion.div>
        );
      case 2:
        return (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
            {getInquiryBySubject().map(
              ({ id, Icon, code, heading, subheading }) => (
                <motion.button
                  key={id}
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
                  onClick={() =>
                    onSelect("inquiry" as keyof ContactForm, {
                      type: getInquiryType(heading),
                      heading,
                      subheading,
                    })
                  }
                  className="group relative rounded-xl overflow-hidden outline-none focus:outline"
                >
                  <MagicCard
                    className={cn(
                      "flex flex-col justify-start p-5 shadow-lg group-hover:shadow-xl group-focus:shadow-xl cursor-pointer border-primary-200/20 group-hover:border-primary-200/5 transition-all duration-300 text-primary-content bg-primary-950/90 relative overflow-hidden",
                      `${kebabCase(getForm().subject)}_${kebabCase(
                        getForm().inquiry.heading
                      )}` === code &&
                        "!bg-gradient-to-r !from-primary-600 !to-indigo-600 !shadow-xl !border-none !text-primary-content"
                    )}
                    gradientColor="#242b33"
                  >
                    <Icon
                      className={cn(
                        "mb-3 text-primary group-hover:text-primary-content group-focus:text-primary-content transition-colors relative duration-300",
                        `${kebabCase(getForm().subject)}_${kebabCase(
                          getForm().inquiry.heading
                        )}` === code && "text-primary-content"
                      )}
                    />
                    <Icon
                      className={cn(
                        "absolute z-10 -top-12 -right-12 text-primary-900/90 group-hover:text-indigo-300/90 group-focus:text-indigo-300/90 group-hover:rotate-12 group-focus:rotate-12 transition-transform duration-300",
                        `${kebabCase(getForm().subject)}_${kebabCase(
                          getForm().inquiry.heading
                        )}` === code && "text-indigo-300/90"
                      )}
                      size={110}
                    />

                    <motion.h4 className="text-lg text-left font-bricolage font-semibold mb-1 relative z-[2500]">
                      {heading}
                    </motion.h4>

                    <motion.p className="text-sm text-left font-poppins relative z-[2500]">
                      {subheading}
                    </motion.p>
                  </MagicCard>

                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                </motion.button>
              )
            )}
          </motion.div>
        );
      case 3:
        return kebabCase(getForm().subject) === "explore-possibilities" ||
          kebabCase(getForm().subject) === "training-mentorship" ? (
          <>
            <motion.h4 className="text-lg font-poppins mb-4 text-center italic text-zinc-500">
              {
                inquiryQuestionHeadings[
                  `${kebabCase(
                    getForm().subject
                  )}-heading` as keyof typeof inquiryQuestionHeadings
                ]
              }
            </motion.h4>
            <motion.div className="w-full grid grid-cols-2 grid-rows-[auto] 2xl:grid-cols-3 gap-4 xl:gap-6">
              {getInquiryQuestionsBySubject(
                kebabCase(getForm().subject) as keyof typeof inquiryQuestions
              ).map((q) => (
                <motion.div key={q.id} className="flex flex-col space-y-2">
                  <motion.label
                    className="text-sm font-poppins text-zinc-50"
                    htmlFor={kebabCase(q.label)}
                  >
                    {q.label}
                    {q.isRequired && (
                      <span className="text-pink-600 text-base font-medium ml-1">
                        *
                      </span>
                    )}
                  </motion.label>
                  <motion.textarea
                    id={kebabCase(q.label)}
                    className="w-full p-4 relative font-poppins max-w-xl mx-auto bg-zinc-800 text-sm leading-5 text-zinc-50 rounded-xl focus:outline-none focus:ring-0 resize-none overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
                    rows={4}
                    required={q.isRequired}
                    placeholder={q.placeholder}
                  ></motion.textarea>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6">
            {getServiceBySubjectAndInquiry().map(
              ({ id, Icon, code, heading, subheading }) => (
                <motion.button
                  key={id}
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
                  onClick={() =>
                    onSelectService({ id, Icon, code, heading, subheading })
                  }
                  className="group relative rounded-xl overflow-hidden outline-none focus:outline"
                >
                  <MagicCard
                    className={cn(
                      "flex flex-col justify-start p-5 shadow-lg group-hover:shadow-xl group-focus:shadow-xl cursor-pointer border-primary-200/20 group-hover:border-primary-200/5 transition-all duration-300 text-primary-content bg-primary-950/90 relative overflow-hidden",
                      getLeanFormServices().includes(id) &&
                        "!bg-gradient-to-r !from-primary-600 !to-indigo-600 !shadow-xl !border-none !text-primary-content"
                    )}
                    gradientColor="#242b33"
                  >
                    <Icon
                      className={cn(
                        "mb-3 text-primary group-hover:text-primary-content group-focus:text-primary-content transition-colors relative duration-300",
                        getLeanFormServices().includes(id) &&
                          "text-primary-content"
                      )}
                    />
                    <Icon
                      className={cn(
                        "absolute z-10 -top-12 -right-12 text-primary-900/90 group-hover:text-indigo-300/90 group-focus:text-indigo-300/90 group-hover:rotate-12 group-focus:rotate-12 transition-transform duration-300",
                        getLeanFormServices().includes(id) &&
                          "text-indigo-300/90"
                      )}
                      size={110}
                    />

                    <motion.h4 className="text-lg text-left font-bricolage font-semibold mb-1 relative z-[2500]">
                      {heading}
                    </motion.h4>

                    <motion.p className="text-sm text-left font-poppins relative z-[2500]">
                      {subheading}
                    </motion.p>
                  </MagicCard>

                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                </motion.button>
              )
            )}
          </motion.div>
        );
      case 4:
        return (
          <>
            <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
              <motion.div className="flex flex-col space-y-1">
                <motion.label
                  className="text-sm font-poppins text-zinc-50"
                  htmlFor={"name"}
                >
                  Your Name
                  <span className="text-pink-600 text-base font-medium ml-1">
                    *
                  </span>
                </motion.label>
                <motion.input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-3 px-6 relative font-poppins max-w-xl mx-auto bg-zinc-800 text-sm leading-5 text-zinc-50 rounded-full focus:outline-none focus:ring-0 resize-none overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
                  required
                  placeholder={"E.g., John Snow"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateForm(e.target.name, e.target.value)
                  }
                />
              </motion.div>

              <motion.div className="flex flex-col space-y-1">
                <motion.label
                  className="text-sm font-poppins text-zinc-50"
                  htmlFor={"email"}
                >
                  Your Email Address
                  <span className="text-pink-600 text-base font-medium ml-1">
                    *
                  </span>
                </motion.label>
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full p-3 px-6 relative font-poppins max-w-xl mx-auto bg-zinc-800 text-sm leading-5 text-zinc-50 rounded-full focus:outline-none focus:ring-0 resize-none overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
                  placeholder={"E.g., johnsnow@example.com"}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateForm(e.target.name, e.target.value)
                  }
                />
              </motion.div>

              <motion.div className="flex flex-col space-y-1">
                <motion.label
                  className="text-sm font-poppins text-zinc-50"
                  htmlFor={"contact"}
                >
                  Your Phone Number{" "}
                  <span className="text-zinc-400">(Optional)</span>
                </motion.label>
                <PhoneInput
                  country={defaultCountry}
                  value={getForm().contact}
                  onChange={setContact}
                  inputStyle={{
                    backgroundColor: "#27272a", // bg-zinc-800
                    color: "#F4F4F5", // text-zinc-50
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.875rem", // text-sm
                    padding: "0.60rem 1.5rem", // p-3 px-6
                    paddingLeft: "3rem",
                    height: "auto",
                    width: "100%",
                    border: "none",
                    borderRadius: "9999px",
                    boxShadow:
                      "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)", // shadow styles
                  }}
                  buttonStyle={{
                    backgroundColor: "#18181b",
                    border: "none",
                  }}
                  dropdownStyle={{
                    backgroundColor: "#1C1C1F",
                    color: "#F4F4F5",
                  }}
                  placeholder="E.g., +44 7700 900123"
                />
              </motion.div>

              <motion.div className="flex flex-col space-y-1 col-span-2">
                <motion.label
                  className="text-sm font-poppins text-zinc-50"
                  htmlFor={"message"}
                >
                  Anything else you'd like to share?{" "}
                  <span className="text-zinc-400">(Optional)</span>
                </motion.label>
                <motion.textarea
                  name="message"
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    updateForm(e.target.name, e.target.value)
                  }
                  id={kebabCase("Anything else you'd like to share")}
                  className="w-full col-span-1 p-4 relative font-poppins bg-zinc-800 text-sm leading-5 text-zinc-50 rounded-2xl focus:outline-none focus:ring-0 resize-none overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200"
                  rows={3}
                  placeholder={
                    "E.g., specific requirements, timelines, or preferences."
                  }
                ></motion.textarea>
              </motion.div>
            </motion.div>
          </>
        );
      case 5:
        return (
          <>
            <motion.h1>Request Submitted Successfully!</motion.h1>
          </>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <ScrollProgress progress={progress} />

      <motion.div
        className={cn(
          "section h-auto grid gap-8 xl:gap-y-10 py-10 xl:py-12 2xl:py-16 relative z-[2000]"
        )}
      >
        <motion.div className="flex flex-col items-center">
          <HeadingChip>
            Request Consultation
          </HeadingChip>
          
          <motion.h2 className="text-3xl xl:text-4xl text-zinc-50 text-center font-bricolage font-bold tracking-wide xl:mt-12">
            Ready to Bring Your Vision to Life?
          </motion.h2>

          <motion.h4 className="text-xl text-center text-zinc-50 font-poppins font-normal mt-2">
            Take the first step toward crafting impactful digital solutions.
          </motion.h4>
        </motion.div>

        <AnimatePresence mode={"wait"}>
          <motion.div
            key={`step-${getStep()}`}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              type: "tween",
              duration: 0.3,
            }}
            variants={{
              initialState: {
                opacity: 0,
                x: "100%",
              },
              animateState: {
                opacity: 1,
                x: 0,
              },
              exitState: {
                opacity: 0,
                x: "-100%",
              },
            }}
            className="grid grid-cols-1 w-full h-auto"
          >
            {getCurrentStepSnapshot()}
          </motion.div>
        </AnimatePresence>

        <motion.div className="flex justify-end space-x-4 xl:space-x-6 w-full">
          <InteractiveLeftButton
            onClick={onPrevious}
            text="Previous"
            className={cn(
              "w-40 border-zinc-600/80 hover:border-zinc-600/5 hover:text-zinc-100 text-zinc-400 font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300",
              getStep() === 1 ? "opacity-0 pointer-events-none" : "opacity-1"
            )}
          />
          <InteractiveRightButton
            onClick={onNext}
            text="Next"
            className={cn(
              "border-primary-300/40 hover:border-primary-200/5 text-primary-400 hover:text-primary-content font-poppins text-[15px] uppercase tracking-wide !font-medium transition-opacity duration-300",
              getStep() > 3
                ? "opacity-0 pointer-events-none hidden"
                : "opacity-1 block"
            )}
          />

          <RainbowButton
            onClick={onNext}
            className={cn(
              "uppercase tracking-wide text-[15px] font-poppins !font-medium !rounded-full hover:text-zinc-950",
              getStep() < 4 ? "opacity-0 hidden" : "inline-flex opacity-1"
            )}
          >
            {"Confirm & Submit"}
          </RainbowButton>
        </motion.div>
      </motion.div>
    </>
  );
};

const Noise: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn("absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]", className)}
      style={{
        backgroundImage: `url(${ImagePath.NOISE})`,
        backgroundSize: "30%",
      }}
    ></div>
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
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary-400 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary-600"></div>
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

const ScrollProgress: React.FC<UI.ScrollProgressProps> = ({
  progress,
  className,
}) => {
  const scaleX = useSpring(0, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  useEffect(() => {
    scaleX.set(progress / 100);
  }, [progress, scaleX]);

  return (
    <motion.div
      className={cn(
        "absolute inset-x-0 top-0 z-[2000] h-[2px] origin-left bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
};

InteractiveRightButton.displayName = "InteractiveRightButton";
InteractiveLeftButton.displayName = "InteractiveLeftButton";

export {
  RequstConsultation,
  Noise,
  InteractiveRightButton,
  InteractiveLeftButton,
};
