"use client";

import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "./WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Ai-Resume-Analyzer",
    description:
      "The AI Resume Analyzer is a powerful, AI-driven tool built to help job seekers refine their resumes for maximum visibility and better job matches. Leveraging advanced ATS analysis, it provides instant resume evaluations, ATS scores, and personalized improvement suggestions to boost hiring potential. Users can seamlessly upload and store their resumes using Puter.js, ensuring smooth, serverless backend operations. Designed with React, Tailwind CSS, JavaScript, and HTML, the platform delivers a sleek, responsive, and user-friendly interface that works flawlessly across devices. Beyond scoring, the tool offers smart job matching by analyzing job descriptions and guiding users to optimize keywords and structure for better alignment. This project",
    stack: [{ name: "React.js" }, { name: "JavaScript" }, { name: "TailwindCSS" }],
    image: "/images/p1.jpg",
    live: "https://ai-resumep-analyzer.vercel.app/",
    github: "https://github.com/Rishabbt/Ai-Resumep-Analyzer.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "E-Commerce(FashTch)",
    description:
      "FashTech is a modern e-commerce web application designed to provide a seamless and responsive shopping experience. Built using Next.js, React, and Redux Toolkit, it features dynamic product listings, an interactive cart, and a clean, intuitive interface. The platform ensures consistent performance across all devices through a fully responsive layout. Clerk authentication is integrated for secure user access. This project highlights my ability to design, develop, and manage scalable frontend architectures with a focus on usability and performance.",
    stack: [{ name: "Next.js" }, { name: "Redux" }, { name: "JavaScript" }],
    image: "/images/p5.png",
    live: "https://mini-games-lyart.vercel.app/",
    github: "https://github.com/Rishabbt/mini-games.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "Portfolio-website",
    description:
    "I specialize in developing dynamic and responsive web applications utilizing a modern tech stack that includes React.js, Node.js, JavaScript, and Tailwind CSS. My expertise in React.js enables me to build modular and efficient user interfaces, while Node.js allows me to create scalable and high-performance backend services. Proficient in JavaScript, I implement clean, maintainable code following best practices. Additionally, I leverage Tailwind CSS to design visually appealing and fully responsive layouts. To enhance user engagement, I incorporate smooth and intuitive animations, ensuring an optimal and polished user experience across all devices. ",
    stack: [{ name: "Next.js" }, { name: "React.js" },{ name: "TypeScript" }],
    image: "/images/p3.jpg",
    live: "https://portfolio-website-ecru-three-44.vercel.app/",
    github: "https://github.com/Rishabbt/Portfolio-website.git",
  },
  {
    num: "04",
    category: "frontend",
    title: "E-commerce webpage",
    description:
      "Built with semantic HTML5, modular CSS3 (mobile-first using Flexbox & CSS Grid and carefully scoped media queries) and fast, progressive JavaScript (deferred/async loading, code-splitting and event-delegation), this e-commerce front end delivers a polished shopping experience across all screen sizes. Images use srcset/picture with responsive sizing and lazy loading, critical CSS is inlined for instant above-the-fold render, and nonessential scripts load after interaction to preserve first contentful paint. Accessibility (ARIA roles, keyboard focus, meaningful landmarks), touch-friendly controls, and fluid layouts ensure usability on phones, tablets and desktops, while bundling, minification, HTTP caching and optional service-worker caching keep repeat loads snappy. The result: a performant, resilient, and scalable storefront that looks and feels native on every device.",
    stack: [{ name: "JavaScript" }, { name: "HTML5" }, { name: "CSS3" }],
    image: "/images/p2.jpg",
    live: "https://e-commerce-sigma-coral.vercel.app/",
    github: "https://github.com/Rishabbt/E-commerce.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
  const currentIndex = swiper.activeIndex;
  setProject(projects[currentIndex]);
};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      id="Project" className="mx-5 min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 " data-aos="zoom-out" data-aos-anchor-placement = "top-center" data-aos-delay ="100"
    >
      <h1 className="mb-10 text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent
        <span className="text-cyan-300"> Projects</span>
      </h1>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Side */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-white text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Buttons */}
              <div className="border-t">
                <div className="flex items-center gap-4">
                  {/* Live button */}
                  <Link href={project.live || "#"}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group mt-2">
                          <BsArrowUpRight className="text-white md:text-3xl sm:text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* Github button */}
                  <Link href={project.github || "#"}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group mt-2">
                          <BsGithub className="text-white md:text-3xl sm:text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={`Project ${project.num}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
