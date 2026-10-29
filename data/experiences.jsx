import { FaBriefcase } from "react-icons/fa";

export const experiences = [
  {
    date: "January 2026 – July 2026",
    title: "Web Development Team Lead (Volunteer) @ TEDxOsogbo",
    location: "Osogbo, Nigeria",
    description: (
      <>
        Led development of the official TEDxOsogbo 2026 website (
        <a
          href="https://tedxosogbo.com.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          tedxosogbo.com.ng
        </a>
        ) using Next.js and TypeScript. Coordinated the engineering effort and
        integrated third-party ticketing platforms (Xara AI and Tixvnt) to
        handle smooth ticket sales and payments for approximately 200 event
        participants.
      </>
    ),
    icon: FaBriefcase,
    images: [
      {
        name: "TEDxOsogbo",
        src: "/images/tedx.webp",
        link: "https://tedxosogbo.com.ng",
        width: 1566,
        height: 789,
      },
    ],
  },
  {
    date: "November 2024 – May 2025",
    title: "Associate Frontend Developer @ Lint Universal Technologies",
    location: "Plateau State, Nigeria",
    description: (
      <>
        Rebuilt the customer dashboard with Next.js and TypeScript as the sole
        frontend developer, delivering virtual card creation, multi-step
        onboarding with validation, wallet management, payroll processing, and
        bill payments.
        <div style={{ marginTop: "12px" }}>
          Set up a Docusaurus documentation site that gave the team a single
          reference for system architecture and implementation details. Worked
          day to day with product managers, designers, backend engineers, QA
          testers, and the mobile team to take features smoothly from design to
          production release.
        </div>
      </>
    ),
    icon: FaBriefcase,
    images: [
      {
        name: "Lint Finance",
        src: "/images/lint.webp",
        link: "https://lint.finance",
        width: 1566,
        height: 789,
      },
    ],
  },
  {
    date: "July 2024 – August 2024",
    title: "Frontend Developer Intern @ HNG Tech",
    location: "Lagos, Nigeria",
    description: (
      <>
        Finished among the top 523 of 24,123 participants in HNG Internship 11
        (finalist certificate). Contributed to Tifi, a live AI-powered platform
        built with Next.js and TypeScript that turns scripts into videos, images
        into videos and talking avatars, and summarizes PDFs and podcasts.
        <div style={{ marginTop: "12px" }}>
          Led the shift of most of the application from client-side to
          server-side rendering, significantly improving SEO and performance,
          and contributed key interfaces to the admin dashboard.
        </div>
      </>
    ),
    icon: FaBriefcase,
    images: [
      {
        name: "HNG",
        src: "/images/hng.webp",
        link: "https://hng.tech/",
        width: 1566,
        height: 789,
      },
      {
        name: "Tifi",
        src: "/images/tifi.webp",
        width: 1566,
        height: 789,
      },
    ],
  },
  {
    date: "August 2023 – June 2024",
    title:
      "Embedded Engineer & Web Developer (NYSC Placement) @ Kadosh Mechatronics",
    location: "Ondo State, Nigeria",
    description: (
      <>
        Developed Arduino and ESP8266/NodeMCU firmware for embedded projects
        including home automation, a smart dust extractor, a massager, and a
        fire and gas detection system, interfacing sensors, relays, and
        actuators.
        <div style={{ marginTop: "12px" }}>
          Built web interfaces served directly from the ESP8266 for remote
          monitoring and control of connected devices. Also developed an in-house
          inventory management system with React and Firebase for tracking
          components across projects, and taught web development and embedded
          systems while mentoring junior engineers.
        </div>
      </>
    ),
    icon: FaBriefcase,
    images: [
      {
        name: "Kadosh Mechatronics",
        src: "/images/kadosh.webp",
        link: "https://kadoshmechatronics.com",
        width: 1566,
        height: 789,
      },
    ],
  },
  {
    date: "March 2023 – September 2023",
    title: "Frontend Developer Intern @ Oluadepe Farms Nigeria Limited (OFNL)",
    location: "Nigeria",
    description: (
      <>
        Contributed to a desktop application using React and Electron supporting
        farmers with crop planning, inventory tracking, and supplier
        coordination. Developed the farmer registration module and pond
        management features.
      </>
    ),
    icon: FaBriefcase,
    images: [
      {
        name: "OFNL",
        src: "/images/ofnl.webp",
        width: 820,
        height: 312,
      },
    ],
  },
  {
    date: "June 2021 – September 2021",
    title: "Full Stack Web Developer @ Naijaspirit Multimedia",
    location: "Osun State, Nigeria",
    description: (
      <>
        Built a React and PHP/MySQL web application for online voting, event
        ticketing, and opinion polling that handled over 23,000 user visits
        across multiple events. Integrated Paystack and Flutterwave payment
        gateways to process votes and ticket purchases, and developed an admin
        dashboard for organizers to track sales, vote counts, and revenue.
      </>
    ),
    icon: FaBriefcase,
  },
];
