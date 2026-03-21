import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "disaster-management",
    category: "AR/VR",
    title: "Disaster Management (EduSafe 360) 🌐",
    src: "/assets/projects-screenshots/disaster-management/1.png",
    screenshots: [
      "/assets/projects-screenshots/disaster-management/1.png",
      "/assets/projects-screenshots/disaster-management/2.png",
      "/assets/projects-screenshots/disaster-management/3.png",
      "/assets/projects-screenshots/disaster-management/4.png",
      "/assets/projects-screenshots/disaster-management/5.png"
    ],
    live: "https://edu-safe-360.vercel.app/",
    github: "https://github.com/abhinandanjain001/AJ-PORTFOLIO",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.spline],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            AR/VR-based disaster training with real-time alerts, location tracking, and safe-zone mapping.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "ai-blog-companion",
    category: "AI Tool",
    title: "AI Blog Companion 🧠",
    src: "/assets/projects-screenshots/ai-blog-companion/1.png",
    screenshots: ["/assets/projects-screenshots/ai-blog-companion/1.png"],
    live: "https://ai-blog-companion-bxvdnpucqsknnmfoxdrku5.streamlit.app/",
    github: "https://ai-blog-companion-bxvdnpucqsknnmfoxdrku5.streamlit.app/",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.openai],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An AI-powered blog generator that writes posts and creates matching images automatically.
            Streamlit + OpenAI API tool for SEO blog generation with prompt control and export support.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "sde-preparation-sheet",
    category: "Interview Prep",
    title: "SDE Preparation Sheet 📘",
    src: "/assets/projects-screenshots/sde-preparation-sheet/1.png",
    screenshots: [
      "/assets/projects-screenshots/sde-preparation-sheet/1.png",
      "/assets/projects-screenshots/sde-preparation-sheet/2.png",
      "/assets/projects-screenshots/sde-preparation-sheet/3.png"
    ],
    live: "https://sde-perpation-sheet.vercel.app/",
    github: "https://sde-perpation-sheet.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Curated SDE preparation sheet for coding interview practice and revision.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "ai-wedding",
    category: "Full Stack",
    title: "AI-Powered Wedding Management 💍",
    src: "/assets/projects-screenshots/ai-wedding/1.png",
    screenshots: ["/assets/projects-screenshots/ai-wedding/1.png"],
    live: "https://weddingsite-fbf1.vercel.app/",
    github: "https://github.com/abhinandanjain001",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            React + Node.js + MongoDB platform with vendor booking, budgeting, and AR/VR venue simulations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "virtual-3d-store",
    category: "Virtual Reality",
    title: "Virtual 3D Store 🛍️",
    src: "/assets/projects-screenshots/virtual-3d-store/1.png",
    screenshots: [
      "/assets/projects-screenshots/virtual-3d-store/1.png",
      "/assets/projects-screenshots/virtual-3d-store/2.png",
      "/assets/projects-screenshots/virtual-3d-store/3.png",
      "/assets/projects-screenshots/virtual-3d-store/4.png"
    ],
    live: "https://retail-vision-guide.lovable.app",
    github: "https://retail-vision-guide.lovable.app",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.spline, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            AI-based immersive virtual reality store experience built for modern retail.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "jarvis-ai",
    category: "AI Assistant",
    title: "Jarvis AI 🤖",
    src: "/assets/projects-screenshots/jarvis-ai/1.png",
    screenshots: ["/assets/projects-screenshots/jarvis-ai/1.png"],
    live: "https://github.com/abhinandanjain001/jarvis-ai",
    github: "https://github.com/abhinandanjain001/jarvis-ai",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An AI assistant that automates everyday tasks and interacts via voice commands.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "education-guru",
    category: "Education Platform",
    title: "Education Guru 🎓",
    src: "/assets/projects-screenshots/education-guru/1.png",
    screenshots: [
      "/assets/projects-screenshots/education-guru/1.png",
      "/assets/projects-screenshots/education-guru/2.png"
    ],
    live: "https://educationguru.vercel.app/",
    github: "https://educationguru.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Smart education platform featuring AI-powered tutoring and resources.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "servizio",
    category: "Full Stack",
    title: "Servizio 24/7 🚗",
    src: "/assets/projects-screenshots/servizio/1.avif",
    screenshots: ["/assets/projects-screenshots/servizio/1.avif"],
    live: "https://github.com/abhinandanjain001",
    github: "https://github.com/abhinandanjain001",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            On-demand household services platform with real-time booking flow and Firebase backend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
  {
    id: "weather-app",
    category: "Web App",
    title: "Weather App 🌦️",
    src: "/assets/projects-screenshots/weather-app/1.png",
    screenshots: ["/assets/projects-screenshots/weather-app/1.png"],
    live: "https://today-weather-io.vercel.app/",
    github: "https://today-weather-io.vercel.app/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Responsive web app that forecasts weather up to 5 days using live API data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[this.src]} />
        </div>
      );
    },
  },
];
export default projects;
