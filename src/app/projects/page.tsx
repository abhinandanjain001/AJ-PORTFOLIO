"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  ...projects.filter((project) => project.description).map((project) => ({
    id: project.id,
    name: project.title,
    description: project.description,
    link: project.live,
    github: project.github,
    githubPrivate: project.githubPrivate,
    images: project.screenshots,
  })),
  {
    id: 1,
    name: "Disaster Management (EduSafe 360) 🌐",
    description: `AR/VR-based disaster training with real-time alerts, location tracking, and safe-zone mapping.`,
    link: "https://edu-safe-360.vercel.app/",
    images: [
      "/assets/projects-screenshots/disaster-management/1.png",
      "/assets/projects-screenshots/disaster-management/2.png",
      "/assets/projects-screenshots/disaster-management/3.png",
      "/assets/projects-screenshots/disaster-management/4.png",
      "/assets/projects-screenshots/disaster-management/5.png"
    ],
  },
  {
    id: 2,
    name: "AI Blog Companion 🧠",
    description: `An AI-powered blog generator that writes posts and creates matching images automatically. Streamlit + OpenAI API tool for SEO blog generation with prompt control and export support.`,
    link: "https://ai-blog-companion-bxvdnpucqsknnmfoxdrku5.streamlit.app/",
    images: [
      "/assets/projects-screenshots/ai-blog-companion/1.png"
    ],
  },
  {
    id: 3,
    name: "SDE Preparation Sheet 📘",
    description: `Curated SDE preparation sheet for coding interview practice and revision.`,
    link: "https://sde-perpation-sheet.vercel.app/",
    images: [
      "/assets/projects-screenshots/sde-preparation-sheet/1.png",
      "/assets/projects-screenshots/sde-preparation-sheet/2.png",
      "/assets/projects-screenshots/sde-preparation-sheet/3.png"
    ],
  },
  {
    id: 4,
    name: "AI-Powered Wedding Management 💍",
    description: `React + Node.js + MongoDB platform with vendor booking, budgeting, and AR/VR venue simulations.`,
    link: "https://weddingsite-fbf1.vercel.app/",
    images: [
      "/assets/projects-screenshots/ai-wedding/1.png"
    ],
  },
  {
    id: 5,
    name: "Virtual 3D Store 🛍️",
    description: `AI-based immersive virtual reality store experience built for modern retail.`,
    link: "https://retail-vision-guide.lovable.app",
    images: [
      "/assets/projects-screenshots/virtual-3d-store/1.png",
      "/assets/projects-screenshots/virtual-3d-store/2.png",
      "/assets/projects-screenshots/virtual-3d-store/3.png",
      "/assets/projects-screenshots/virtual-3d-store/4.png"
    ],
  },
  {
    id: 6,
    name: "Jarvis AI 🤖",
    description: `An AI assistant that automates everyday tasks and interacts via voice commands.`,
    link: "https://github.com/abhinandanjain001/jarvis-ai",
    images: [
      "/assets/projects-screenshots/jarvis-ai/1.png"
    ],
  },
  {
    id: 7,
    name: "Education Guru 🎓",
    description: `Smart education platform featuring AI-powered tutoring and resources.`,
    link: "https://educationguru.vercel.app/",
    images: [
      "/assets/projects-screenshots/education-guru/1.png",
      "/assets/projects-screenshots/education-guru/2.png"
    ],
  },
  {
    id: 8,
    name: "Servizio 24/7 🚗",
    description: `On-demand household services platform with real-time booking flow and Firebase backend.`,
    link: "https://github.com/abhinandanjain001",
    images: [
      "/assets/projects-screenshots/servizio/1.avif"
    ],
  },
  {
    id: 9,
    name: "Weather App 🌦️",
    description: `Responsive web app that forecasts weather up to 5 days using live API data.`,
    link: "https://today-weather-io.vercel.app/",
    images: [
      "/assets/projects-screenshots/weather-app/1.png"
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 h-full pb-16">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {PROJECTS.map((project) => (
            <li
              className="w-full min-w-0 min-h-[400px] flex flex-col border-[.5px] rounded-md border-zinc-600 overflow-hidden"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label={`${project.name} screenshots`}
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`Screenshot of ${project.name}`}
                        className="w-full h-[200px] object-contain rounded-md bg-zinc-900"
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300 flex flex-1 flex-col">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-4 text-sm">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 min-h-11 hover:underline">
                    Visit Website <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  {"github" in project && project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 min-h-11 hover:underline">
                      <Github className="h-4 w-4" aria-hidden="true" /> {"githubPrivate" in project && project.githubPrivate ? "GitHub (private)" : "GitHub"}
                    </Link>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
