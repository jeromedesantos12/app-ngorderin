# Ngorderin App

This is a Next.js application called "Ngorderin App". This README provides an overview of the project structure, features, and instructions for setting it up.

## Project Structure

The project is organized as follows:

```
app-ngorderin/
├── .next/              # Next.js build output
├── node_modules/       # Project dependencies
├── public/             # Static assets (images, icons)
├── src/
│   ├── app/            # Main application pages and layouts
│   ├── components/     # Reusable React components
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── template/
│   │   └── ui/
│   ├── data/           # JSON data files
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
├── .gitignore
├── bun.lock
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

## Features

Based on the project structure, the application includes the following features:

*   **User Profile:** Displays user information.
*   **Todo List:** A simple to-do list feature.
*   **Testimonials:** Shows customer testimonials.
*   **Hero Section:** A prominent hero section for the main page.
*   **Steps/Instructions:** A section to guide users through a process.
*   **Theme Switching:** Light and dark mode support.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
*   **Package Manager:** [Bun](https://bun.sh/)

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (v20 or later)
*   [Bun](https://bun.sh/)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd app-ngorderin
    ```
3.  Install the dependencies:
    ```bash
    bun install
    ```

## Running the Application

To start the development server, run:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Endpoints

This project uses Next.js App Router. API endpoints can be created as `route.ts` files inside the `src/app/api` directory. Currently, there are no predefined API endpoints.

## Environment Variables

To manage environment variables, create a `.env.local` file in the root of the project. Add your environment-specific variables to this file. For example:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

These variables can be accessed in your application as `process.env.NEXT_PUBLIC_API_URL`.
