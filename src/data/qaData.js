export const qaSections = [
  {
    id: "fundamentals",
    title: "Testing Fundamentals",
    badge: "Core Theory",
    description: "Foundational principles governing software development cycles, quality verification, and systematic test design.",
    topics: [
      {
        name: "SDLC (Software Development Life Cycle)",
        detail: "Understanding Waterfall, Agile, and iterative delivery pipelines to align QA activities with developer sprints.",
      },
      {
        name: "STLC (Software Testing Life Cycle)",
        detail: "Structured phase flow: Requirement Analysis, Test Planning, Test Case Development, Test Environment Setup, Test Execution, and Test Cycle Closure.",
      },
      {
        name: "Verification vs Validation",
        detail: "Verification confirms we are building the product right (reviews, walkthroughs, inspections); Validation confirms we built the right product (executing software).",
      },
      {
        name: "Test Case Design",
        detail: "Formulating deterministic test scenarios using Boundary Value Analysis (BVA), Equivalence Class Partitioning (ECP), and Decision Table techniques.",
      },
      {
        name: "Positive & Negative Testing",
        detail: "Verifying standard user journeys alongside stress scenarios with unexpected, malformed, boundary, or out-of-range inputs.",
      },
    ],
  },
  {
    id: "testing-types",
    title: "Testing Types & Strategies",
    badge: "Execution Methodologies",
    description: "Multi-tiered execution strategies targeted across different release cycles and application layers.",
    topics: [
      {
        name: "Smoke Testing",
        detail: "High-level build verification tests to ensure the application's critical path is stable before in-depth testing begins.",
      },
      {
        name: "Sanity Testing",
        detail: "Targeted verification post-bug-fix to confirm specific module functionalities work properly without regression.",
      },
      {
        name: "Regression Testing",
        detail: "Re-executing existing test suites after code modifications to verify existing features remain unbroken.",
      },
      {
        name: "Retesting",
        detail: "Executing failed test cases again following a bug fix to ensure the specific defect has been resolved.",
      },
      {
        name: "Functional & UI Testing",
        detail: "Validating user interfaces, element layouts, responsive breakpoints, state transitions, and business logic execution.",
      },
      {
        name: "API Testing",
        detail: "Testing backend endpoints independently of the user interface to validate payload structure, auth tokens, status codes, and error responses.",
      },
    ],
  },
  {
    id: "defect-management",
    title: "Defect Management & Bug Tracking",
    badge: "Quality Governance",
    description: "Structured workflows to record, classify, prioritize, and monitor defects through their complete lifecycle.",
    topics: [
      {
        name: "Bug Life Cycle",
        detail: "Stages: New → Assigned → Open → In Progress → Fixed → Pending Retest → Retest → Verified → Closed (or Reopened / Rejected / Deferred).",
      },
      {
        name: "Severity vs Priority",
        detail: "Severity reflects technical impact on the system (Critical, High, Medium, Low); Priority defines business urgency for resolution.",
      },
      {
        name: "Defect Reporting Standard",
        detail: "Writing reproducible reports with unambiguous titles, preconditions, reproduction steps, expected vs actual results, logs, and screenshots.",
      },
      {
        name: "Root Cause Analysis",
        detail: "Investigating defect origins in database constraints, frontend state management, unhandled edge cases, or asynchronous race conditions.",
      },
    ],
  },
  {
    id: "api-testing",
    title: "API & Backend Validation",
    badge: "Service Layer",
    description: "Evaluating HTTP endpoints, payload contracts, authentication mechanisms, and network response metrics.",
    topics: [
      {
        name: "REST APIs & Architecture",
        detail: "Stateless client-server communication, JSON schemas, URL parameters, query queries, and body payloads.",
      },
      {
        name: "HTTP Methods & Verbs",
        detail: "Correct semantics and idempotent behaviors across GET, POST, PUT, PATCH, and DELETE requests.",
      },
      {
        name: "HTTP Status Code Validation",
        detail: "Verifying 2xx success (200, 201, 204), 4xx client errors (400, 401 Unauthorized, 403 Forbidden, 404, 422), and 5xx server issues.",
      },
      {
        name: "Postman Collections & Tests",
        detail: "Building automated environment variables, test scripts (`pm.test`, `pm.expect`), pre-request scripts, and test runner workflows.",
      },
    ],
  },
  {
    id: "automation",
    title: "Test Automation Fundamentals",
    badge: "Automation Engineering",
    description: "Scripting deterministic, scalable end-to-end tests across browsers with modern automation frameworks.",
    topics: [
      {
        name: "Playwright",
        detail: "Modern end-to-end testing with cross-browser support (Chromium, Firefox, WebKit), auto-waiting, network mocking, and parallel execution.",
      },
      {
        name: "Selenium WebDriver",
        detail: "Browser driver orchestration, selector strategies (XPath, CSS, IDs), and cross-browser test lifecycle management.",
      },
      {
        name: "Page Object Model (POM)",
        detail: "Architectural design pattern separating test logic from page element selectors to maximize maintainability.",
      },
      {
        name: "Waits & Synchronization",
        detail: "Eliminating flakiness via explicit waits, conditional expected conditions, and dynamic polling instead of arbitrary sleeps.",
      },
      {
        name: "TypeScript in Automation",
        detail: "Typing test parameters, fixtures, API response models, and assertion helpers to catch selector drift at compile time.",
      },
    ],
  },
  {
    id: "qa-tools",
    title: "QA Tooling Ecosystem",
    badge: "Tools & Frameworks",
    description: "Industry-standard utilities employed for test design, defect logging, endpoint inspection, and automation.",
    topics: [
      {
        name: "Postman",
        detail: "API request builder, automated runner, token interpolation, schema validation assertions.",
      },
      {
        name: "Jira Software",
        detail: "Sprint backlog management, bug tracking tickets, acceptance criteria alignment, defect triage.",
      },
      {
        name: "Selenium",
        detail: "Automated browser interaction, headless runs, multi-environment regression suites.",
      },
      {
        name: "Playwright",
        detail: "Next-gen test runner with trace viewer, codegen, snapshot testing, and API request testing.",
      },
    ],
  },
];

export const qaArtifacts = [
  {
    id: "postman-api-suite",
    title: "REST API Automated Test Suite",
    type: "API Collection",
    description: "A comprehensive Postman test suite covering positive status assertions, token auth validation, and negative payload testing.",
    tags: ["Postman", "REST API", "JSON Schema", "Environment Variables"],
    status: "Collection Ready",
    linkText: "View Documentation",
    url: null, // Placeholder for GitHub/collection link
  },
  {
    id: "cms-test-plan",
    title: "Construction Management System - Test Plan",
    type: "Test Strategy",
    description: "Structured test case matrix for role-based access testing (Admin, Contractor, Site Manager), document uploads, and daily reporting.",
    tags: ["Manual Testing", "Test Matrix", "RBAC", "STLC"],
    status: "Documented",
    linkText: "View Test Plan",
    url: null, // Placeholder for test document link
  },
  {
    id: "e2e-automation-suite",
    title: "End-to-End Automation Framework",
    type: "Automation",
    description: "Playwright test runner utilizing Page Object Model architecture with auto-wait assertions and cross-browser regression workflows.",
    tags: ["Playwright", "TypeScript", "POM", "E2E Testing"],
    status: "In Development",
    linkText: "View Repository",
    url: null, // Placeholder for GitHub repo link
  },
];
