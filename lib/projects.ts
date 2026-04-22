export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  stack: string[]
  liveHref: string
  caseStudyHref: string
  imageAlt: string
  imageSrc?: string
  align: "left" | "right"
  featured: boolean
}

export const projects: Project[] = [
  {
    id: "fitzone",
    title: "FitZone Gym",
    subtitle: "Booking & Management System",
    description:
      "A full-stack web app that lets gym clients book sessions, gives trainers control of their schedule, and hands owners a live dashboard.",
    longDescription:
      "A full-stack web application built for gym owners to manage memberships, class bookings, and staff. Features three role-based dashboards — admin, trainer, and member — with a real-time booking system and automated scheduling.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    liveHref: "https://fitzone-gym-ten.vercel.app",
    caseStudyHref: "/work/fitzone",
    imageAlt: "FitZone Gym Project",
    align: "left",
    featured: true,
    imageSrc: "/images/fitzone/screen-3.png", 
  },
  {
    id: "zesto",
    title: "Zesto",
    subtitle: "Food Delivery Landing Page",
    description:
      "A high-converting mobile app landing page that turns hungry visitors into app downloads — built for local food delivery businesses.",
    longDescription:
      "A full product landing page built in Next.js with Framer Motion animations, dual-audience architecture for both end customers and restaurant partners, phone mockup components, and a restaurant dashboard preview section.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveHref: "https://zesto-xi.vercel.app/",
    caseStudyHref: "/work/zesto",
    imageAlt: "Zesto Project",
    imageSrc: "/images/zesto/screen-01.PNG", 
    align: "right",
    featured: true,
  },
  {
    id: "studiosync",
    title: "StudioSync",
    subtitle: "SaaS Landing Page",
    description:
      "A conversion-focused SaaS landing page for gym owners — turning website visitors into waitlist signups, automatically.",
    longDescription:
      "A fully designed SaaS landing page built with Next.js and Framer Motion. Features a live waitlist connected to Google Sheets, animated dashboard mockup, interactive tab-based feature showcase, and a pricing section with monthly/annual toggle.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Sheets API"],
    liveHref: "https://studiosync.vercel.app",
    caseStudyHref: "/work/studiosync",
    imageAlt: "StudioSync Project",
imageSrc: "/images/studiosync/screen-1.png", 
    align: "left",
    featured: true,
  },
  {
    id: "quickbite",
    title: "QuickBite",
    subtitle: "Food Delivery Mobile App",
    description:
      "A full-stack food delivery app that lets restaurants take orders, track deliveries, and grow their customer base.",
    longDescription:
      "A Flutter mobile app for food delivery with real-time order tracking, restaurant browsing, smart cart with add-on customisation, promo code engine, and a custom-built animated map tracker — no paid map SDK required.",
    stack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Lottie"],
    liveHref: "#/no",
    caseStudyHref: "/work/quickbite",
    imageAlt: "QuickBite Project",
imageSrc: "/images/quickbite/screen-6.png", 
    align: "right",
    featured: false,
  },
  {
    id: "asaan-bill",
    title: "Asaan Bill",
    subtitle: "Invoice Tool for Pakistani Shopkeepers",
    description:
      "A voice-powered invoicing app that lets Pakistani shopkeepers create and share invoices in under 60 seconds.",
    longDescription:
      "A Flutter invoice app designed for small shopkeepers in Pakistan. Supports Urdu and Roman Urdu voice input for hands-free invoice creation, offline-first storage with Isar, WhatsApp direct sharing, and a 90-day trial system.",
    stack: ["Flutter", "Isar", "Riverpod", "GoRouter"],
    liveHref: "#/no",
    caseStudyHref: "/work/AsaanBill",
    imageAlt: "Asaan Bill Project",
    imageSrc: "/images/asaan-bill/hero.png",
    align: "left",  
    featured: false,
  },
]