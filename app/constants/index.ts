import { UI } from "@/models";
import { nanoid } from "nanoid";
import {
  GraduationCap,
  Handshake,
  Lightbulb,
  Rocket,
  SquareUserRound,
  Building2,
  Code,
  Smartphone,
  Server,
  Brush,
  ShieldCheck,
  Timer,
  BarChart,
  UsersRound,
  Gauge,
  Workflow,
} from "lucide-react";

export const ImagePath = {
  NOISE: "/images/noise.webp",
  BRAND_LOGO: "/images/alabura.webp",
  BRAND_LOGO_DARK: "/images/alabura-dark.webp",
  BRAND_LOGO_LIGHT: "/images/alabura-light.webp",

  GIT_LOGO: "/images/git.svg",
  SEO_IMG: "/images/seo.webp",
  VITE_LOGO: "/images/vitejs.svg",
  CANVA_LOGO: "/images/canva.webp",
  CURSOR_LOGO: "/images/cursor.webp",
  VS_CODE_LOGO: "/images/vscode.svg",
  FIREBASE_LOGO: "/images/firebase.webp",
  POSTMAN_LOGO: "/images/postman-icon.svg",
  FROG_SEO_LOGO: "/images/frog-seo.webp",
  SEM_RUSH_LOGO: "/images/semrush.webp",
  SYNK_LOGO: "/images/synk.webp",
  JENKINS_LOGO: "/images/jenkins.svg",
  TERRAFORM_LOGO: "/images/terraform.svg",
  RIVERPOD_LOGO: "/images/riverpod-logo.svg",

  PYTHON_LOGO: "/images/python.svg",
  JAVASCRIPT_LOGO: "/images/js.svg",
  TYPESCRIPT_LOGO: "/images/typescript.svg",
  DART_LOGO: "/images/dart.svg",
  PHP_LOGO: "/images/php.svg",

  WAVY_LINES: "/images/wavy-lines.webp",
  ILLUS_LINES_DOWN: "/images/illus-lines-down.webp",
  ILLUS_LINES_TOP: "/images/illus-lines-top.webp",

  ONECOPY_AI: "/images/onecopy-ai-dashboard.webp",
  ONECOPY_AI_LOGO: "/images/onecopy-logo.webp",

  PHC_LOGO: "/images/phc-logo.webp",
  PHC_TRACKA: "/images/phc-tracka.webp",

  GRADELY_PAGE: "/images/gradely-page.webp",
  GRADELY_LOGO: "/images/gradely-logo.webp",

  MYLANDLORD_HEAVEN_LOGO: "/images/mylandlord-heaven-logo.svg",
  MYLANDLORD_HEAVEN_PAGE: "/images/mylandlord-heaven-page.webp",

  LIVEABLE_LOGO: "/images/liveable-logo.svg", 
  LIVEABLE_PAGE: "/images/liveable-page.webp",

  SSAF_LOGISTICS_LOGO: "/images/ssaf-logistics.webp",
  SSAF_LOGISTICS_PAGE: "/images/ssaf-logistics-page.webp",

  SIMS_PAGE: "/images/sims-page.webp",
  SIMS_LOGO: "/images/sims-logo.webp",

  MESH_PORTRAITE: "/images/mesh.webp",
  CHRIS_IYAMA_PORTRAITE: "/images/chris-iyama.webp",
  SEGUN_PORTRAITE: "/images/segun.webp",
  UCHE_NICK_PORTRAITE: "/images/nick-uche.webp",

  ACRONIS_FULL_LOGO: "/images/acronis-full.webp",
  LIVEABLE_FULL_LOGO: "/images/liveable-logo-full.webp",
  MYLANDLORD_HEAVEN_FULL_LOGO: "/images/mylandlord-heaven-full.webp",
  GRADELY_FULL_LOGO: "/images/gradely-logo-full.webp",
  BUDGIT_FULL_LOGO: "/images/budgit-logo-full.webp",
  FBN_QUEST_FULL_LOGO: "/images/fbn-quest-full.webp",
  SBSC_FULL_LOGO: "/images/sbsc-colour-full.webp",
  ASTRO_MARKETER_FULL_LOGO: "/images/astro-marketer-full.webp",
  PLATEAU_STATE_FULL_LOGO: "/images/plateau-state-government-logo-full.webp",

  PERKS_ICON: "/images/perks.svg",
  GLOBE_ICON: "/images/globe.svg",
  ROCKET_ICON: "/images/rocket.svg",
  VERCEL_ICON: "/images/vercel.svg",
  ARROW_DOWN_WHITE: "/images/arrow-down-white.svg",
};

export const NavItems: UI.FloatingNavItem[] = [
  {
    id: nanoid(),
    label: "Home",
    href: "/",
  },
  {
    id: nanoid(),
    label: "About",
    href: "/about-alabura-usman",
  },
  {
    id: nanoid(),
    label: "Services",
    href: "/#services",
    subItems: [
      {
        id: nanoid(),
        title: "Modern Web App Development",
        href: "/docs/primitives/alert-dialog",
        description: "Creating responsive and scalable web applications.",
      },
      {
        id: nanoid(),
        title: "Mobile App Development",
        href: "/docs/primitives/alert-dialog",
        description: "Building intuitive mobile apps for Android and iOS.",
      },
      {
        id: nanoid(),
        title: "Backend Development",
        href: "/docs/primitives/alert-dialog",
        description: "Developing secure and efficient server-side systems.",
      },
      {
        id: nanoid(),
        title: "IT Consulting",
        href: "/docs/primitives/hover-card",
        description: "Providing IT strategies aligned with business goals.",
      },
      {
        id: nanoid(),
        title: "UI/UX Design & Audit",
        href: "/docs/primitives/progress",
        description: "Enhancing usability with intuitive designs and audits.",
      },
      {
        id: nanoid(),
        title: "Application Security",
        href: "/docs/primitives/scroll-area",
        description: "Safeguarding systems through proactive risk mitigation.",
      },
      {
        id: nanoid(),
        title: "Agile Project Management",
        href: "/docs/primitives/tabs",
        description: "Ensuring timely delivery with agile frameworks.",
      },
      {
        id: nanoid(),
        title: "Data Analytics, Insights, & Audit",
        href: "/docs/primitives/tooltip",
        description: "Transforming data into actionable business insights.",
      },
      {
        id: nanoid(),
        title: "SEO & Performance Optimization",
        href: "/docs/primitives/tooltip",
        description: "Improving visibility and performance with analytics.",
      },
      {
        id: nanoid(),
        title: "Training & Mentorship",
        href: "/docs/primitives/tooltip",
        description: "Empowering teams through tailored training programs.",
      },
    ],
  },
  {
    id: nanoid(),
    label: "Projects",
    href: "/#projects",
  },
  // {
  //   id: nanoid(),
  //   label: "Insights",
  //   href: "/insights",
  // },
];

export const ProjectsDelivered = {
  stat: 20,
  src: ImagePath.ROCKET_ICON,
  heading: "Projects Delivered",
  content:
    "Across industries like fintech, edtech, proptech, logistics, and retail.",
};

export const Perks = {
  src: ImagePath.PERKS_ICON,
  heading: "Bespoke Solutions",
  content: "Tailored strategies to accelerate growth and efficiency.",
};

export const GlobalCollaboration = {
  src: ImagePath.GLOBE_ICON,
  heading: "Global Collaboration",
  content: "Partnered with teams across 5 countries to deliver results.",
};

export const Intro = "I'm Alabura Usman";

export const HeroSecondaryCopy = [
  "Your Strategic Engineer",
  "Your Consultant",
  "Your Outside Frame of Reference",
];

export const HeroSubContent =
  "I partner with businesses to ideate, architect, design, and build market-leading digital solutions. Through applied creativity and digital transformation, I leave a positive dent on every challenge I tackle.";

export const HireButtonCopy = "Discuss a  Project";
export const DiscussProjectBtnCopy = "Start Your Next Breakthrough";
export const HeroBtnCopy = "Let’s Discuss Your Next Project";
export const HeroSubHeadingCopyFirst = "You Bring the Vision";
export const HeroSubHeadingCopySecond = "I Engineer the Reality";

export const goals = [
  {
    id: nanoid(),
    Icon: Rocket,
    code: "launch-a-project",
    heading: "Launch a Project",
    subheading: "Need a partner to bring your idea to life?",
  },
  {
    id: nanoid(),
    Icon: Handshake,
    code: "collaborate-long-term",
    heading: "Collaborate Long-term",
    subheading: "Need a partner to bring your idea to life?",
  },
  {
    id: nanoid(),
    Icon: Lightbulb,
    code: "explore-possibilities",
    heading: "Explore Possibilities",
    subheading: "Not sure what you need? Let's discuss!",
  },
  {
    id: nanoid(),
    Icon: GraduationCap,
    code: "training-&-mentorship",
    heading: "Training & Mentorship",
    subheading: "Empowering your team with tailored learning and guidance.",
  },
];

export const inquiry = {
  "launch-a-project": [
    {
      id: nanoid(),
      Icon: SquareUserRound,
      code: "launch-a-project_for-yourself",
      heading: "For Yourself",
      subheading: "Personal/freelance projects.",
    },
    {
      id: nanoid(),
      Icon: Building2,
      code: "launch-a-project_for-an-organization",
      heading: "For an Organization",
      subheading: "Bigger, team-based or institutional projects.",
    },
  ],
  "collaborate-long-term": [
    {
      id: nanoid(),
      Icon: SquareUserRound,
      code: "collaborate-long-term_for-yourself",
      heading: "For Yourself",
      subheading: "Freelancers or solo professionals needing ongoing support.",
    },
    {
      id: nanoid(),
      Icon: Building2,
      code: "collaborate-long-term_for-an-organization",
      heading: "For an Organization",
      subheading: "Companies seeking integrated, long-term partnerships.",
    },
  ],
  "training-mentorship": [
    {
      id: nanoid(),
      Icon: SquareUserRound,
      code: "training-mentorship_for-yourself",
      heading: "For Yourself",
      subheading: "1-on-1 mentorship or personal learning goals.",
    },
    {
      id: nanoid(),
      Icon: Building2,
      code: "training-mentorship_for-an-organization",
      heading: "For an Organization",
      subheading:
        "Team-based training or leadership programs for a company/institution.",
    },
  ],
};

export const inquiryServices = {
  "launch-a-project_for-yourself": [
    {
      id: nanoid(),
      Icon: Code,
      code: "frontend-development",
      heading: "Frontend Development",
      subheading:
        "Bring your ideas to life with responsive and visually appealing user interfaces.",
    },
    {
      id: nanoid(),
      Icon: Smartphone,
      code: "mobile-app-development",
      heading: "Mobile App Development",
      subheading: "Build sleek, intuitive mobile apps for Android and iOS.",
    },
    {
      id: nanoid(),
      Icon: Server,
      code: "backend-development",
      heading: "Backend Development",
      subheading:
        "Create secure, efficient backend systems tailored to your personal projects.",
    },
    {
      id: nanoid(),
      Icon: Brush,
      code: "ui-ux-design",
      heading: "UI/UX Design & Audit",
      subheading:
        "Design captivating interfaces and conduct usability audits for your applications.",
    },
    {
      id: nanoid(),
      Icon: ShieldCheck,
      code: "application-security",
      heading: "Application Security",
      subheading:
        "Safeguard your personal applications with proactive security measures.",
    },
  ],
  "launch-a-project_for-an-organization": [
    {
      id: nanoid(),
      Icon: Code,
      code: "frontend-development",
      heading: "Frontend Development",
      subheading:
        "Develop scalable, responsive, and visually stunning web solutions for your organization.",
    },
    {
      id: nanoid(),
      Icon: Smartphone,
      code: "mobile-app-development",
      heading: "Mobile App Development",
      subheading:
        "Deliver customized mobile applications that align with your team's goals and customers' needs.",
    },
    {
      id: nanoid(),
      Icon: Server,
      code: "backend-development",
      heading: "Backend Development",
      subheading:
        "Architect robust server-side systems to handle your organization's demands efficiently.",
    },
    {
      id: nanoid(),
      Icon: Lightbulb,
      code: "it-consulting",
      heading: "IT Consulting",
      subheading:
        "Provide strategic IT guidance to align technology with your business objectives.",
    },
    {
      id: nanoid(),
      Icon: Brush,
      code: "ui-ux-design",
      heading: "UI/UX Design & Audit",
      subheading:
        "Optimize user engagement with well-designed and user-centric interfaces.",
    },
    {
      id: nanoid(),
      Icon: ShieldCheck,
      code: "application-security",
      heading: "Application Security",
      subheading:
        "Enhance your organization's cybersecurity to prevent risks and vulnerabilities.",
    },
    {
      id: nanoid(),
      Icon: Timer,
      code: "agile-project-management",
      heading: "Agile Project Management",
      subheading:
        "Streamline project delivery using agile methodologies for maximum efficiency.",
    },
    {
      id: nanoid(),
      Icon: BarChart,
      code: "data-analytics",
      heading: "Data Analytics, Insights, & Audit",
      subheading:
        "Turn data into actionable insights to drive business decisions effectively.",
    },
    {
      id: nanoid(),
      Icon: Gauge,
      code: "seo-performance-optimization",
      heading: "SEO & Performance Optimization",
      subheading:
        "Improve search visibility and optimize performance with in-depth analytics.",
    },
  ],
  "collaborate-long-term_for-yourself": [
    {
      id: nanoid(),
      Icon: Code,
      code: "frontend-support",
      heading: "Ongoing Frontend Support",
      subheading:
        "Maintain and enhance your web interfaces with continuous improvements and updates.",
    },
    {
      id: nanoid(),
      Icon: Server,
      code: "backend-support",
      heading: "Ongoing Backend Support",
      subheading:
        "Ensure your server-side systems are secure, efficient, and scalable over time.",
    },
    {
      id: nanoid(),
      Icon: Smartphone,
      code: "mobile-support",
      heading: "Ongoing Mobile Support",
      subheading:
        "Keep your mobile applications up-to-date and optimized for the latest platforms.",
    },
    {
      id: nanoid(),
      Icon: Rocket,
      code: "scalable-solutions",
      heading: "Scalable Solutions",
      subheading:
        "Develop long-term, scalable solutions for evolving personal projects.",
    },
  ],
  "collaborate-long-term_for-an-organization": [
    {
      id: nanoid(),
      Icon: Code,
      code: "frontend-support",
      heading: "Ongoing Frontend Support",
      subheading:
        "Deliver seamless, optimized user interfaces with continuous frontend updates.",
    },
    {
      id: nanoid(),
      Icon: Server,
      code: "backend-support",
      heading: "Ongoing Backend Support",
      subheading:
        "Maintain robust and scalable backend systems to meet organizational needs.",
    },
    {
      id: nanoid(),
      Icon: Smartphone,
      code: "mobile-support",
      heading: "Ongoing Mobile Support",
      subheading:
        "Ensure mobile applications are optimized and aligned with business goals.",
    },
    {
      id: nanoid(),
      Icon: UsersRound,
      code: "team-integration",
      heading: "Team Integration",
      subheading:
        "Embed skilled professionals into your team for long-term collaboration.",
    },
    {
      id: nanoid(),
      Icon: Workflow,
      code: "continuous-improvement",
      heading: "Continuous Improvement",
      subheading:
        "Enhance processes and systems with iterative improvements for sustained success.",
    },
    {
      id: nanoid(),
      Icon: ShieldCheck,
      code: "cybersecurity-partnership",
      heading: "Cybersecurity Partnership",
      subheading:
        "Develop and execute long-term strategies to safeguard your organization's assets.",
    },
  ],
};

export const inquiryQuestionHeadings = {
  "explore-possibilities-heading":
    "Let’s explore together! Share your challenges, goals, or areas of interest so we can tailor a solution just for you.",
  "training-mentorship-heading":
    "Tell me more about the training or mentorship you’re looking for. The more details you provide, the better I can tailor our services to meet your needs.",
};

export const inquiryQuestions = {
  "explore-possibilities": [
    {
      id: nanoid(),
      label: "What challenges are you currently facing?",
      placeholder:
        "E.g., improving website performance, scaling a mobile app, securing backend systems",
      fieldType: "multi-line",
      isRequired: true,
    },
    {
      id: nanoid(),
      label: "What are your goals or areas of interest?",
      placeholder:
        "E.g., launching a new product, optimizing workflows, exploring AI solutions.",
      fieldType: "multi-line",
      isRequired: false,
    },
    {
      id: nanoid(),
      label: "Any other details you'd like to share?",
      placeholder:
        "E.g., preferred timelines, budget considerations, or existing tools you use.",
      fieldType: "multi-line",
      isRequired: false,
    },
  ],
  "training-mentorship": [
    {
      id: nanoid(),
      label: "What is the focus of the training or mentorship?",
      placeholder:
        "E.g., upskilling in frontend development, mobile development, or team collaboration.",
      fieldType: "single-line",
      isRequired: true,
    },
    {
      id: nanoid(),
      label: "What are the specific goals or outcomes you want to achieve?",
      placeholder:
        "E.g., improving team efficiency, preparing for an upcoming project, mastering agile methodologies.",
      fieldType: "multi-line",
      isRequired: false,
    },
    {
      id: nanoid(),
      label: "Are there any other details you'd like to share?",
      placeholder:
        "E.g., preferred timelines, team size, or any tools/resources you use.",
      fieldType: "multi-line",
      isRequired: false,
    },
  ],
};
