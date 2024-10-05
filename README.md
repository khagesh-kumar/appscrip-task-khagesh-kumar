Appscrip Task - Khagesh Kumar
This repository contains the implementation of a product discovery page as per the task guidelines provided by Appscrip. The application is built using React and Next.js to showcase server-side rendering (SSR), SEO optimization, responsiveness, and more.

Project Overview
This task involves creating a functional product discovery page that includes product filters, mock data integration, server-side rendering (SSR), and SEO optimization. The page is responsive and designed to work seamlessly on mobile and tablet devices.

Features
Responsive Design: Fully responsive design for desktop, tablet, and mobile.
Server-Side Rendering (SSR): Optimized for performance and search engine visibility.
SEO Optimized: Appropriate use of meta tags, alt attributes for images, and structured headings (H1, H2).
Product Filtering: Allows users to filter products based on multiple categories.
Mock Data Integration: Optionally integrates data from FakeStoreAPI.
Tech Stack
Frontend: React.js, Next.js
Backend: Server-side rendering (SSR) with Next.js
CSS: Custom styling (CSS Modules)
API: Mock data using FakeStoreAPI (optional)
Deployment: Hosted on Netlify
Installation and Setup
Follow the steps below to set up the project locally:

Prerequisites
Node.js (v14.x or later)
npm or yarn package manager
Steps
Clone the Repository:

bash
Copy code
git clone https://github.com/khagesh-kumar/appscrip-task-khagesh-kumar.git
Navigate to the Project Directory:

bash
Copy code
cd appscrip-task-khagesh-kumar
Install Dependencies:

bash
Copy code
npm install
Run Development Server: To run the app in development mode:

bash
Copy code
npm run dev
Open http://localhost:3000 to view the app in your browser.
The app will reload if you make edits to the code.
Production
To run the app in production mode:

Build the Project:

bash
Copy code
npm run build
Start the Production Server:

bash
Copy code
npm run start
The app will be available at http://localhost:3000.

Deployment
To deploy the app, follow these steps:

1. Deploy to Netlify
Go to Netlify, create a new site, and connect your GitHub repository.
The app will be automatically deployed after pushing changes to the GitHub repository.
2. Alternative Deployment (e.g., Vercel)
You can also deploy using services like Vercel which natively supports Next.js apps.
SEO Settings
Page Title: Includes a meaningful page title for SEO.
Meta Description: Describes the content of the page to improve search engine ranking.
Headings: Structured properly with H1, H2 tags to support search engine indexing.
Image Alt Text: All images include descriptive alt text to improve accessibility and SEO.
Example:

jsx
Copy code
import Head from 'next/head';

export default function HomePage() {
  return (
    <Head>
      <title>Discover Our Products - Appscrip Task</title>
      <meta name="description" content="Explore our exclusive product range with customizable filters. Built using React.js and Next.js for Appscrip task." />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
Folder Structure
bash
Copy code
appscrip-task-khagesh-kumar/
├── components/            # React components used throughout the project
├── pages/                 # Next.js pages (e.g., index.js for the home page)
├── public/                # Public assets such as images
├── styles/                # Custom CSS files
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── .next/                 # Generated build files (after running `npm run build`)
Evaluation Criteria
You will be evaluated based on:

Code structure and maintainability
Naming conventions used throughout the project
Use of minimal external packages
Responsiveness and adaptability to screen sizes (desktop, tablet, mobile)
Effective use of Server-Side Rendering (SSR) for improved performance
Proper implementation of SEO settings
License
This project is licensed under the MIT License.

Author
Bhadrachalam Khagesh Kumar

Feel free to reach out if you have any questions regarding the setup or code.
