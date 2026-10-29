import typing from "../public/images/typing.webp";
import capsule from "../public/images/capsule.webp";
import jitter from "../public/images/jitter.webp";
import outpost from "../public/images/outpost.jpeg";

export const coreProjects = [
  {
    id: "oasis",
    title: "Oasis",
    role: "Lead Developer & Curriculum Designer",
    status: "Launching November 2026",
    timeline: "July 2026 – Present",
    mockups: [
      {
        type: "phone",
        src: "/images/oasis/mobile-home.webp",
        width: 456,
        height: 1024,
        caption: "Oasis Mobile — Home Dashboard",
      },
      // {
      //   type: "laptop",
      //   src: "/images/oasis/desktop-home.webp",
      //   width: 1920,
      //   height: 989,
      //   caption: "Oasis Mobile — Home Dashboard",
      // },
      // {
      //   type: "laptop",
      //   src: "/images/oasis/desktop-lesson-player.webp",
      //   width: 1024,
      //   height: 527,
      //   caption: "Oasis Desktop — Interactive Lesson Player",
      // },
      // {
      //   type: "laptop",
      //   src: "/images/oasis/desktop-topics.webp",
      //   width: 1024,
      //   height: 527,
      //   caption: "Oasis Desktop — Mathematics Topic Explorer",
      // },
      {
        type: "phone",
        src: "/images/oasis/mobile-courses.webp",
        width: 456,
        height: 1024,
        caption: "Oasis Mobile — Course Library",
      },
      // {
      //   type: "laptop",
      //   src: "/images/oasis/desktop-path.webp",
      //   width: 1024,
      //   height: 527,
      //   caption: "Oasis Desktop — Matrices Lesson Path",
      // },
      {
        type: "phone",
        src: "/images/oasis/mobile-path.webp",
        width: 456,
        height: 1024,
        caption: "Oasis Mobile — Sequential Lesson Path",
      },
      // {
      //   type: "laptop",
      //   src: "/images/oasis/desktop-courses.webp",
      //   width: 1024,
      //   height: 527,
      //   caption: "Oasis Desktop — Learning Library",
      // },
      {
        type: "phone",
        src: "/images/oasis/mobile-topics.webp",
        width: 456,
        height: 1024,
        caption: "Oasis Mobile — Topic Progress View",
      },
      {
        type: "phone",
        src: "/images/oasis/mobile-lesson-player.webp",
        width: 456,
        height: 1024,
        caption: "Oasis Mobile — Interactive Lesson Player",
      },
      {
        type: "phone",
        src: "/images/oasis/mobile-diagram.webp",
        width: 541,
        height: 1213,
        caption: "Oasis Mobile — Interactive Lesson Player",
      },
      {
        type: "phone",
        src: "/images/oasis/mobile-category.webp",
        width: 541,
        height: 1213,
        caption: "Oasis Mobile — Interactive Lesson Player",
      },
      {
        type: "phone",
        src: "/images/oasis/mobile-match.webp",
        width: 361,
        height: 809,
        caption: "Oasis Mobile — Interactive Lesson Player",
      },
      {
        type: "phone",
        src: "/images/oasis/mobile-matrix.webp",
        width: 1082,
        height: 2426,
        caption: "Oasis Mobile — Interactive Lesson Player",
      },
      {
        type: "phone",
        src: "/images/oasis/mobile-streak.webp",
        width: 361,
        height: 809,
        caption: "Oasis Mobile — Interactive Lesson Player",
      },
    ],
    headline:
      "A learning platform built to help students truly understand why concepts work, starting with first-year students at Osun State University.",
    highlights: [
      "Built a student-facing mobile/PWA app and an admin workspace for creating, previewing, organizing, and publishing modular lessons.",
      "Developed an interactive lesson player with graded activities, mathematical content rendering, diagrams, and learner progress tracking.",
      "Implemented a graph-based visual lesson editor with validation, undo/redo, draft recovery, live student preview, and version history.",
      "Implemented a multi-package architecture sharing curriculum, editor, and lesson-player packages across mobile, admin, and a TypeScript API backed by Firebase, Firestore, and Cloudflare Workers.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Ionic",
      "Capacitor",
      "Firebase",
      "Firestore",
      "Cloudflare Workers",
    ],
    badge: "Core Platform",
    isHeroic: true,
  },
  {
    id: "typing-app",
    title: "Mavis Beacon Typing Application",
    role: "Full Stack Developer",
    timeline: "2023",
    img: typing,
    alt: "Mavis Beacon Typing App",
    headline:
      "A full-stack, gamified typing platform inspired by childhood memories of Mavis Beacon, designed to make mastering keyboard speed engaging and measurable.",
    highlights: [
      "User authentication and personal profiles with score tracking and historical progress charts.",
      "Typing tests with WPM calculation, accuracy metrics, error highlighting, and customizable practice drills.",
      "A scoreboard and audio features for focus sessions.",
    ],
    tech: ["React", "Express.js", "MongoDB", "Node.js", "TailwindCSS"],
    badge: "Full-Stack Web App",
    isHeroic: true,
  },
];

export const creativeProjects = [
  {
    title: "Capsules by Moyra",
    type: "Site Recreation",
    originalUrl: "https://capsules.moyra.co",
    originalLabel: "capsules.moyra.co",
    description:
      "A high-fidelity recreation of the award-winning Capsules landing page by Moyra, focused on smooth GSAP scroll choreography, perspective transitions, and sleek interactive motion.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "GSAP"],
    img: capsule,
    alt: "Capsules by Moyra Recreation",
  },
  {
    title: "Jitter Video",
    type: "Site Recreation",
    originalUrl: "https://jitter.video",
    originalLabel: "jitter.video",
    description:
      "An interactive recreation of the award-winning Jitter.video website, engineered with high-performance animations, choreographed timelines, and responsive layout fidelity.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "GSAP"],
    img: jitter,
    alt: "Jitter Video Recreation",
  },
  {
    title: "Outpost Design",
    type: "Site Recreation",
    originalUrl: "https://outpost.design",
    originalLabel: "outpost.design",
    description:
      "A landing page recreation of Outpost, built with modern web animation techniques, clean typographic hierarchy, and responsive interaction design.",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "GSAP"],
    img: outpost,
    alt: "Outpost Design Recreation",
  },
];
