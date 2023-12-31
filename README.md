# Penn State College of Engineering Website Rework

## Description

This project is a modernized redesign of the [Penn State College of Engineering Website](https://www.engr.psu.edu) that leverages the 
combined capabilities of the Next.js framework, the GraphQL API query language, and the Storyblok Headless CMS.

### Deployed Site

![GIF of the deployed project.](./public/chrome-capture-2023-11-14.gif)

See the project live: [PSU CoE Rework](https://psu-coe-rework.vercel.app)

## Stack

### Next.js v14.0.1

System Requirments
- Node.js 18.17 or later
- macOS, Windows (including WSL), and Linux are supported

Configurations Used
- ESLint
- Tailwind CSS
- App Router

Overview
- Next.js is an open source React framework, created by Vercel, designed to build incredibly fast, optimized, and user-oriented applications. 
Some of its benefits include: requiring next to no configuration, access to both server side rendering and static generation at once, automatic 
code splitting, TypeScript support (if you're into that sort of thing), and Fast Refresh (a personal favorite).

Key Features
- Dynamic Routing
  - By combining the `generateStaticParams` function and the Catch-all Dynamic Segment `[...slug]`, 
  this project dynamically routes all pages (with the exception of the root page), allowing for additional 
  pages to be added using the Storyblok CMS without requiring the creation of new `page.js` files. If you 
  would like to see this functionality in action, you can find it implemented in [`app/[...slug]/page.js`](./app/[...slug]/page.js).

  (**App Router** required; if you are currently building a Next.js project and have opted to use the 
  **Pages Router**, see `GetStaticProps`, `GetStaticPaths`, and **Dynamic Routes** in the **Pages Router** 
  section of the [Next.js Pages Documentation](https://nextjs.org/docs/pages/building-your-application))
- Server Side Rendering (SSR) and Server Side Components
  - While the use of SSR in this project is limited (a tradeoff associated with the use of the Live Editing feature of Storyblok), 
  all pages are rendered server side using [`app/page.js`](./app/page.js) (the root page) and [`[...slug]/page.js`](./app/[...slug]/page.js) 
  (dynamically routed additional pages).
- Client Components
  - Client Components are the core of this site. By using the Apollo Client, along aside an additional libary that extends Apollo's compatability 
  with Next.js, the root layout (`RootLayout`, found in [`app/layout.js`](./app/layout.js)) uses the client wrapper imported from 
  [`lib/ApolloProvider.js`](./lib/ApolloProvider.js) to make every component used within Storyblok a Client Component. This enables the use of 
  states, effects, and listeners, but more importantly, allows us to take full advantage of the Live Editor built into the Storyblok CMS.

Building your next project using Next.js? Get started with [Next.js Installation](https://nextjs.org/docs/getting-started/installation).

Looking for more Next.js information? Check out [Next.js Documentation](https://nextjs.org/docs).

### GraphQL (via the Apollo Client v3.8.0-rc.2)

Dependencies Used
- `@apollo/client@rc`
- `graphql`
- `@apollo/experimental-nextjs-app-support` (an official Apollo Client library built to enhance the compatibility of Apollo and Next.js 13+)

REST vs GraphQL

If you're a developer planning on building a project using a headless CMS, you will soon be faced with a pivotal decision: REST, or GraphQL? If you're 
using Storyblok, than this may seem like a relatively easy choice (on the surface, at least). Both the Storyblok Content Delivery API and Management API 
are organized around REST, and most of Storyblok's documentation is written with this in mind. So, why deviate?
- Single vs. Multiple Endpoints- A typical RESTful API usually requires data fetching from multiple different endpoints. This is inherently slower than an API 
using GraphQL, where only one endpoint is required to fetch data.
- Overfetching/Underfetching- RESTful APIs tend to suffer from overfetching and underfetching issues that stem from the fixed structures of their endpoints.
Either the endpoint in question returns unnecessary data, or it doesn't return enough data, requiring more fetches to other endpoints to retrieve whatever data is 
still needed (usually resulting in overfetching... See the problem?). On the other hand, with GraphQL, you can request exactly the data you need at any given time.
- Strongly Typed Schemas- GraphQL uses **Schema Definition Language (SDL)** to define an API's schema. This means you always have a clear understanding of the API's 
operations, thanks to SDL's strong type system. If you're using Storyblok, you can see this in action by using the **Storyblok GraphQL Playground**. Just use
```
https://gapi-browser.storyblok.com?token=YOUR_TOKEN
```
and replace `YOUR_TOKEN` with your Storyblok API token. You might also need to add a region specifier. For example, if you are in the US regions, you would use
```
https://gapi-us-browser.storyblok.com
```
![Storyblok GraphQL Playground](./public/Screenshot%202023-11-15%20125347.png)

You can find an example of a GraphQL query made to the Apollo client in [`app/[...slug]/page.js`](./app/[...slug]/page.js) and [`app/page.js`](./app/page.js).

Adding GraphQL to your next project? Here are some helpful resources.
- [GraphQL](https://graphql.org/)
- [Learn GraphQL](https://www.howtographql.com/)

Using GraphQL with Storyblok? Find more information at [GraphQL Content Delivery API](https://www.storyblok.com/docs/graphql-api).

### Storyblok v2.4.7

Headless CMS
- Storyblok is a **headless CMS**. This means it is designed for back-end content management; it provides content storage, a content creator/manager interface, and access 
to your chosen API. A headless CMS uses a decoupled architecture that seperates the frontend (design and development) and the backend (content management) of a project. 
This makes a headless CMS far more adaptive and scalable than a traditional CMS that uses a monolith/silo type structure, where the frontend and backend are woven 
(sometimes knotted) tightly together. It also improves performance, grants increased flexibility to developers and content managers by migitating dependencies, and allows 
for more optimized applications.

Visual Editor
- Storyblok's **Visual Editor** enables content management to be performed easily, visually, and in realtime. This includes drag-and-drop, preview, and asset management 
features, along with the ability to create workflows and discussions to improve collaboration within a team.

![Storyblok Visual Editor](./public/Screenshot%202023-11-15%20125744.png)

Planning on using the Storyblok Headless CMS to manage the backend of your next app? Check out these resources.
- [Storyblok](https://www.storyblok.com/)
- [Storyblok Documentation](https://www.storyblok.com/docs/guide/introduction)

Combining Next.js and Storyblok? Use this [Storyblok Next.js 13 Guide](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial) to get started. (This guide uses 
the **App Router** introduced in Next.js 13. If you are using an earlier version or have opted to use the **Pages Router**, check out [The Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)).

### Getting Started with a Next.js/GraphQL/Storyblok Project- How to Mount this Stack

1. Create Your Project- Start by creating a Next.js project. I recommend doing so with `create-next-app`, which takes care of most of the project's set up for you. In
   the terminal, run:
   ```
   npx create-next-app@latest
   ```
2. Choose Your Configurations- After you have initialized the creation of your project, you should then see a series of prompts:
   ```
   What is your project named? my-app
   Would you like to use TypeScript? No / Yes
   Would you like to use ESLint? No / Yes
   Would you like to use Tailwind CSS? No / Yes
   Would you like to use `src/` directory? No / Yes
   Would you like to use App Router? (recommended) No / Yes
   Would you like to customize the default import alias (@/*)? No / Yes
   What import alias would you like configured? @/*
   ```
   You are welcome to choose whichever configurations best suit the needs of your specific project, but if you are following this repository as a guide, your choices
   should be:
   ```
   What is your project named? <your-project-name>
   Would you like to use TypeScript? No
   Would you like to use ESLint? Yes
   Would you like to use Tailwind CSS? Yes
   Would you like to use `src/` directory? No
   Would you like to use App Router? (recommended) Yes
   Would you like to customize the default import alias (@/*)? No
   What import alias would you like configured? @
   ```
   After you've chosen your configurations, `create-next-app` will create a directory for your project and install the necessary dependencies based on your choices.

3. Install Remaining Dependencies- After your project directory has been created, you'll need to install the remaining dependencies required to set your project up
   with the Apollo Client, GraphQL, and Storyblok. In the terminal, navigate to the root of your project's directory and run:
   ```
   npm install @apollo/client@rc graphql @apollo/experimental-nextjs-app-support @storyblok/react
   ```
   Once the installation is finished, you should have everything you need to get started with this stack.


## Deployment- Vercel

This site was deployed using Vercel. If you'd like to learn more about deploying a Next.js application using Vercel, you can visit 
[Deploying Your Next.js App](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy). This page gives step-by-step instructions on deployment, including how to create a Vercel Account at https://vercel.com/signup using your GitHub account and how to import your repository at https://vercel.com/import/git.

## Progress Report

- Navigation has been overhauled. Each dropdown menu found in the header has been condensed to include only the categories used in the corresponding tabs of the current CoE website 
(excluding quick links). Current plans include a seperate page for each category. 
A dedicated side bar has been added; this is now where the search bar and quick links can be found. A **Hotline** button has been put in place of the **Directory** button, which has 
been moved into the quick links.
- Various cosmetic changes have been implemented, including but not limited to:
  - Placeholder text in the search bar has been changed
  - The **Give Now** button now reads **Donate** (Give Now reads as mildly demanding. Just a personal take)
  - There is now an **I Engineer** title in the I Engineer section of content.
  - The blank side margins have been removed.
- Responsiveness has been drastically improved.
- All links are active, but internal links all route to a **Page Under Construction** placeholder page (with the exception of the link attached to the header logo, which takes the user
back to the home page). This will be replaced with legitimate content as new pages are added.
- Work on additional pages will start once the remaining content from the landing page is ported over.
- For now, the search bar is purely cosmetic. It will become fully functional when at least one more page has been added.
- At the moment, `<img />` tags have been used as image containers. These will be replaced with `<Image>` elements sometime in the near future for the sake of optimization.
- Current Priorities
  - Responsiveness
  - Remaining landing page content
  - Clean up CSS
  - Additional pages

**This section will be updated as work progresses and improvements are made.**


## Sources

- This site is a redesigned version of the Penn State University College of Engineering Website, and therefore, all content (including text, images, and video files) was sourced from 
the current College of Engineering website, which can be found at https://www.engr.psu.edu.
- Due to the fact that this project is development and stack oriented (rather than design oriented) in nature, some stylistic aspects have been sourced from the Penn State 
University landing page, which can be found at https://psu.edu, and used as a basis for the CSS implemented in this project. This is also an effort to show how the current CoE 
website could be converted to implement design choices used by the main Penn State web brand. ***Note: This is reference to stylistic choices, not the code used in the landing page itself.***

## License

MIT License

Copyright (c) 2023 Christian Callahan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



