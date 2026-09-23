import designSystemPreview from '../assets/uiux/design-system/preview.svg';
import mobileBankingPreview from '../assets/uiux/mobile-banking/preview.svg';

export const uiuxProjects = [
  {
    id: "dark-design-system",
    title: "Dark Theme Design System & UI Kit",
    category: "Design System",
    description:
      "A cohesive design language comprising atomic tokens, typography scale, accessible contrast ratios, and modular card components for dark-mode web applications.",
    deliverables: ["Typography Scale", "Color Tokens (WCAG AA)", "Auto-Layout Components", "Interactive States"],
    image: designSystemPreview,
    imageAlt: "Dark Theme Design System Preview",
    figmaUrl: null, // Placeholder: [ADD_FIGMA_DESIGN_SYSTEM_URL]
    prototypeUrl: null, // Placeholder
    isCaseStudy: true,
  },
  {
    id: "mobile-banking-flow",
    title: "Fintech Mobile Application - User Flow & Wireframes",
    category: "Mobile UX & Prototype",
    description:
      "End-to-end user experience mapping for instant peer-to-peer transfers, biometrics authentication, and clear payment confirmation feedback screens.",
    deliverables: ["User Journey Mapping", "Low-Fi Wireframes", "Interactive Prototype", "Accessibility Review"],
    image: mobileBankingPreview,
    imageAlt: "Fintech Mobile Application Wireframes Preview",
    figmaUrl: null, // Placeholder: [ADD_FIGMA_FINTECH_URL]
    prototypeUrl: null, // Placeholder
    isCaseStudy: true,
  },
];

export const designPrinciples = [
  {
    title: "Visual Hierarchy & Typography",
    description: "Guiding the reader's eye naturally through deliberate font scales, line-height balancing, and purposeful whitespace.",
  },
  {
    title: "Accessibility & Usability",
    description: "Ensuring color contrast conforms to WCAG guidelines, maintaining tap target sizes, and designing intuitive user pathways.",
  },
  {
    title: "Design-to-Code Feasibility",
    description: "Designing components with real CSS flexbox, grid, and Tailwind classes in mind to ensure seamless developer implementation.",
  },
];
